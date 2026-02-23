import { json } from '@sveltejs/kit';
import { getDb } from '$lib/server/db.js';
import { dev } from '$app/environment';
import { checkRateLimit } from '$lib/server/rateLimit.js';

export async function POST({ request, cookies, platform, getClientAddress }) {
	try {
		const ip = getClientAddress();
		try {
			await checkRateLimit(platform, `restore_${ip}`, 3, 60);
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

		const db = getDb(platform);
		const purchase = await db.prepare(`
			SELECT id FROM purchases
			WHERE email = ?1 AND status = 'paid'
			LIMIT 1
		`).bind(email.toLowerCase().trim()).first();

		if (!purchase) {
			return json({ success: false, error: 'restoreFailed' });
		}

		cookies.set('purchase_session', purchase.id, {
			path: '/',
			httpOnly: true,
			secure: !dev,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 365
		});

		return json({ success: true });
	} catch (err) {
		console.error('Restore access error:', err);
		return json({ success: false, error: 'restoreFailed' });
	}
}
