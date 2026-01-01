import Stripe from 'stripe';
import { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET } from '$env/static/private';
import { db } from '$lib/server/firebase-admin.js';
import { DEFAULT_LANG } from '$lib/i18n/loader.js';

const stripe = new Stripe(STRIPE_SECRET_KEY);

async function handleRefund(charge) {
	const paymentIntent = charge.payment_intent;
	if (!paymentIntent) return;

	const snapshot = await db.collection('purchases')
		.where('stripe_payment_intent', '==', paymentIntent)
		.limit(1)
		.get();

	if (!snapshot.empty) {
		await snapshot.docs[0].ref.update({
			status: 'refunded',
			refunded_at: new Date()
		});
	}
}

async function handleDispute(dispute) {
	const charge = await stripe.charges.retrieve(dispute.charge);
	const paymentIntent = charge.payment_intent;
	if (!paymentIntent) return;

	const snapshot = await db.collection('purchases')
		.where('stripe_payment_intent', '==', paymentIntent)
		.limit(1)
		.get();

	if (!snapshot.empty) {
		await snapshot.docs[0].ref.update({
			status: 'disputed',
			disputed_at: new Date()
		});
	}
}

export async function POST({ request }) {
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

	// Handle checkout.session.completed
	if (event.type === 'checkout.session.completed') {
		const session = event.data.object;

		// Validate payment is actually complete
		if (session.payment_status !== 'paid') {
			return new Response('OK', { status: 200 });
		}

		// Atomic transaction: deduplication + purchase write together
		// Prevents race condition where dedup succeeds but purchase write fails
		const eventRef = db.collection('processed_webhook_events').doc(event.id);
		const purchaseRef = db.collection('purchases').doc(session.id);

		try {
			await db.runTransaction(async (t) => {
				// Check if event already processed
				const eventDoc = await t.get(eventRef);
				if (eventDoc.exists) {
					throw new Error('DUPLICATE');
				}

				// Check if purchase already exists
				const purchaseDoc = await t.get(purchaseRef);
				if (purchaseDoc.exists && purchaseDoc.data()?.status === 'paid') {
					throw new Error('DUPLICATE');
				}

				// Write both atomically
				t.set(eventRef, { type: event.type, processedAt: new Date() });
				t.set(purchaseRef, {
					email: session.customer_email?.toLowerCase().trim() || '',
					stripe_session_id: session.id,
					stripe_customer_id: session.customer,
					stripe_payment_intent: session.payment_intent,
					status: 'paid',
					paid_at: new Date(),
					lang: session.metadata?.lang || DEFAULT_LANG
				});
			});
		} catch (err) {
			if (err.message === 'DUPLICATE') {
				return new Response('OK', { status: 200 });
			}
			console.error('Failed to save purchase:', err);
			// Return 500 so Stripe retries
			return new Response('Database error', { status: 500 });
		}

		return new Response('OK', { status: 200 });
	}

	// Handle refunds - revoke access
	if (event.type === 'charge.refunded') {
		try {
			await handleRefund(event.data.object);
		} catch (err) {
			console.error('Failed to handle refund:', err);
			return new Response('Database error', { status: 500 });
		}
		return new Response('OK', { status: 200 });
	}

	// Handle disputes - revoke access
	if (event.type === 'charge.dispute.created') {
		try {
			await handleDispute(event.data.object);
		} catch (err) {
			console.error('Failed to handle dispute:', err);
			return new Response('Database error', { status: 500 });
		}
		return new Response('OK', { status: 200 });
	}

	// Ignore other events
	return new Response('OK', { status: 200 });
}
