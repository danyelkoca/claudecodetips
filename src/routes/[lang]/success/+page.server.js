import { redirect } from '@sveltejs/kit';
import Stripe from 'stripe';
import { dev } from '$app/environment';

export async function load({ url, cookies, params, platform }) {
	const stripe = new Stripe(platform.env.STRIPE_SECRET_KEY);
	const sessionId = url.searchParams.get('session_id');

	if (!sessionId) {
		throw redirect(307, `/${params.lang}`);
	}

	try {
		// Verify with Stripe directly
		const session = await stripe.checkout.sessions.retrieve(sessionId);

		if (session.payment_status === 'paid') {
			// Set cookie for access
			cookies.set('purchase_session', sessionId, {
				path: '/',
				httpOnly: true,
				secure: !dev,
				sameSite: 'strict',
				maxAge: 60 * 60 * 24 * 365 // 1 year
			});

			return {
				accessGranted: true,
				email: session.customer_email
			};
		}
	} catch (err) {
		console.error('Failed to verify session:', err);
	}

	throw redirect(307, `/${params.lang}`);
}
