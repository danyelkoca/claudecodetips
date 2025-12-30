import Stripe from 'stripe';
import { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET } from '$env/static/private';
import { db } from '$lib/server/firebase-admin.js';
import { DEFAULT_LANG } from '$lib/i18n/loader.js';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST({ request }) {
	const body = await request.text();
	const signature = request.headers.get('stripe-signature');

	let event;
	try {
		event = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);
	} catch (err) {
		console.error('Webhook signature verification failed:', err.message);
		return new Response(`Webhook Error: ${err.message}`, { status: 400 });
	}

	if (event.type === 'checkout.session.completed') {
		const session = event.data.object;

		try {
			await db.collection('purchases').doc(session.id).set({
				email: session.customer_email,
				stripe_session_id: session.id,
				stripe_customer_id: session.customer,
				status: 'paid',
				paid_at: new Date(),
				lang: session.metadata?.lang || DEFAULT_LANG
			});
			console.log('Purchase saved for:', session.customer_email);
		} catch (err) {
			console.error('Failed to save purchase:', err);
		}
	}

	return new Response('OK', { status: 200 });
}
