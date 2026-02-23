import { json } from '@sveltejs/kit';
import { getDb } from '$lib/server/db.js';
import { checkRateLimit } from '$lib/server/rateLimit.js';

export async function POST({ request, platform, getClientAddress }) {
	try {
		const ip = getClientAddress();
		try {
			await checkRateLimit(platform, `contact_${ip}`, 5, 60);
		} catch (err) {
			if (err.message === 'rateLimitExceeded') {
				return json({ success: false, error: 'rateLimitExceeded' });
			}
			throw err;
		}

		const { name, email, message, lang } = await request.json();

		if (!name?.trim()) {
			return json({ success: false, error: 'nameRequired' });
		}
		if (!email?.trim()) {
			return json({ success: false, error: 'emailRequired' });
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ success: false, error: 'invalidEmail' });
		}
		if (!message?.trim() || message.trim().length < 10) {
			return json({ success: false, error: 'messageRequired' });
		}

		const db = getDb(platform);
		await db.prepare(`
			INSERT INTO contacts (name, email, message, lang, ip, created_at, status)
			VALUES (?1, ?2, ?3, ?4, ?5, ?6, 'new')
		`).bind(
			name.trim(),
			email.toLowerCase().trim(),
			message.trim(),
			lang || null,
			ip,
			new Date().toISOString()
		).run();

		return json({ success: true });
	} catch (err) {
		console.error('Contact form error:', err);
		return json({ success: false, error: 'submitFailed' });
	}
}
