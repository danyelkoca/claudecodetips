import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { PUBLIC_SITE_URL } from '$env/static/public';
import { json } from '@sveltejs/kit';
import { loadTranslations, DEFAULT_LANG } from '$lib/i18n/loader.js';
import { checkRateLimit } from '$lib/server/rateLimit.js';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST({ request, platform, getClientAddress }) {
	try {
		const ip = getClientAddress();
		try {
			await checkRateLimit(platform, `checkout_${ip}`, 5, 60);
		} catch (err) {
			if (err.message === 'rateLimitExceeded') {
				return json({ error: 'rateLimitExceeded' }, { status: 429 });
			}
			throw err;
		}

		const { lang, email } = await request.json();
		const effectiveLang = lang || DEFAULT_LANG;

		if (!email) {
			return json({ error: 'emailRequired' }, { status: 400 });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'invalidEmail' }, { status: 400 });
		}

		const normalizedEmail = email.toLowerCase().trim();
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
					unit_amount: 2900
				},
				quantity: 1
			}],
			customer_email: normalizedEmail,
			success_url: `${PUBLIC_SITE_URL}/${effectiveLang}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${PUBLIC_SITE_URL}/${effectiveLang}?canceled=true`,
			metadata: { lang: effectiveLang }
		});

		return json({ url: session.url });
	} catch (err) {
		console.error('Stripe checkout error:', err);
		return json({ error: 'checkoutFailed' }, { status: 500 });
	}
}
