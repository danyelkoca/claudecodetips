import Stripe from 'stripe';
import { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET } from '$env/static/private';
import { getDb } from '$lib/server/db.js';
import { DEFAULT_LANG } from '$lib/i18n/loader.js';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST({ request, platform }) {
	const contentLength = request.headers.get('content-length');
	if (contentLength && parseInt(contentLength) > 1048576) {
		return new Response('Payload too large', { status: 413 });
	}

	const body = await request.text();
	const signature = request.headers.get('stripe-signature');

	let event;
	try {
		event = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);
	} catch (err) {
		console.error('Webhook signature verification failed:', err.message);
		return new Response('Invalid signature', { status: 400 });
	}

	const db = getDb(platform);

	// Handle checkout.session.completed
	if (event.type === 'checkout.session.completed') {
		const session = event.data.object;

		if (session.payment_status !== 'paid') {
			return new Response('OK', { status: 200 });
		}

		try {
			// Check for duplicate event
			const existing = await db.prepare(`
				SELECT id FROM processed_webhook_events WHERE id = ?1
			`).bind(event.id).first();

			if (existing) {
				return new Response('OK', { status: 200 });
			}

			// Check if purchase already exists
			const existingPurchase = await db.prepare(`
				SELECT id, status FROM purchases WHERE id = ?1
			`).bind(session.id).first();

			if (existingPurchase && existingPurchase.status === 'paid') {
				return new Response('OK', { status: 200 });
			}

			// Batch insert: event + purchase atomically
			await db.batch([
				db.prepare(`
					INSERT INTO processed_webhook_events (id, event_type, processed_at)
					VALUES (?1, ?2, ?3)
				`).bind(event.id, event.type, new Date().toISOString()),

				db.prepare(`
					INSERT OR REPLACE INTO purchases (id, email, stripe_session_id, stripe_customer_id, stripe_payment_intent, status, paid_at, lang)
					VALUES (?1, ?2, ?3, ?4, ?5, 'paid', ?6, ?7)
				`).bind(
					session.id,
					session.customer_email?.toLowerCase().trim() || '',
					session.id,
					session.customer || null,
					session.payment_intent || null,
					new Date().toISOString(),
					session.metadata?.lang || DEFAULT_LANG
				)
			]);
		} catch (err) {
			console.error('Failed to save purchase:', err);
			return new Response('Database error', { status: 500 });
		}

		return new Response('OK', { status: 200 });
	}

	// Handle refunds
	if (event.type === 'charge.refunded') {
		const charge = event.data.object;
		const paymentIntent = charge.payment_intent;

		if (paymentIntent) {
			try {
				await db.prepare(`
					UPDATE purchases
					SET status = 'refunded', refunded_at = ?1
					WHERE stripe_payment_intent = ?2
				`).bind(new Date().toISOString(), paymentIntent).run();
			} catch (err) {
				console.error('Failed to handle refund:', err);
				return new Response('Database error', { status: 500 });
			}
		}
		return new Response('OK', { status: 200 });
	}

	// Handle disputes
	if (event.type === 'charge.dispute.created') {
		const dispute = event.data.object;
		try {
			const charge = await stripe.charges.retrieve(dispute.charge);
			const paymentIntent = charge.payment_intent;

			if (paymentIntent) {
				await db.prepare(`
					UPDATE purchases
					SET status = 'disputed', disputed_at = ?1
					WHERE stripe_payment_intent = ?2
				`).bind(new Date().toISOString(), paymentIntent).run();
			}
		} catch (err) {
			console.error('Failed to handle dispute:', err);
			return new Response('Database error', { status: 500 });
		}
		return new Response('OK', { status: 200 });
	}

	return new Response('OK', { status: 200 });
}
