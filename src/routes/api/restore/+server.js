import { json } from '@sveltejs/kit';
import { db } from '$lib/server/firebase-admin.js';
import { dev } from '$app/environment';
import { checkRateLimit } from '$lib/server/rateLimit.js';

export async function POST({ request, cookies, getClientAddress }) {
	try {
		// Rate limit: 3 attempts per IP per hour
		const ip = getClientAddress();
		try {
			await checkRateLimit(`restore_${ip}`, 3, 60);
		} catch (err) {
			if (err.message === 'rateLimitExceeded') {
				return json({ success: false, error: 'rateLimitExceeded' });
			}
			throw err;
		}

		const { email } = await request.json();

		if (!email) {
			return json({ success: false, error: 'emailRequired' });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ success: false, error: 'invalidEmail' });
		}

		const normalizedEmail = email.toLowerCase().trim();
		const snapshot = await db.collection('purchases')
			.where('email', '==', normalizedEmail)
			.where('status', '==', 'paid')
			.limit(1)
			.get();

		if (snapshot.empty) {
			return json({ success: false, error: 'restoreFailed' });
		}

		const sessionId = snapshot.docs[0].id;

		cookies.set('purchase_session', sessionId, {
			path: '/',
			httpOnly: true,
			secure: !dev,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 365 // 1 year
		});

		return json({ success: true });
	} catch (err) {
		console.error('Restore access error:', err);
		return json({ success: false, error: 'restoreFailed' });
	}
}
