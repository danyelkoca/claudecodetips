import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { PUBLIC_SITE_URL } from '$env/static/public';
import { json, error } from '@sveltejs/kit';
import { loadTranslations, DEFAULT_LANG } from '$lib/i18n/loader.js';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST({ request }) {
	try {
		const { lang, email } = await request.json();
		const effectiveLang = lang || DEFAULT_LANG;

		if (!email) {
			throw error(400, 'emailRequired');
		}

		const t = await loadTranslations(effectiveLang);

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'payment',
			line_items: [{
				price_data: {
					currency: 'usd',
					product_data: {
						name: t.checkout.productName,
						description: t.checkout.productDescription
					},
					unit_amount: 2900 // $29.00
				},
				quantity: 1
			}],
			customer_email: email,
			success_url: `${PUBLIC_SITE_URL}/${effectiveLang}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${PUBLIC_SITE_URL}/${effectiveLang}?canceled=true`,
			metadata: { lang: effectiveLang }
		});

		return json({ url: session.url });
	} catch (err) {
		console.error('Stripe checkout error:', err);
		throw error(500, 'checkoutFailed');
	}
}
