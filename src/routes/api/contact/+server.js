import { json } from '@sveltejs/kit';
import { db } from '$lib/server/firebase-admin.js';
import { checkRateLimit } from '$lib/server/rateLimit.js';

export async function POST({ request, getClientAddress }) {
	try {
		const ip = getClientAddress();
		try {
			await checkRateLimit(`contact_${ip}`, 5, 60);
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

		await db.collection('contacts').add({
			name: name.trim(),
			email: email.toLowerCase().trim(),
			message: message.trim(),
			lang,
			ip,
			createdAt: new Date(),
			status: 'new'
		});

		return json({ success: true });
	} catch (err) {
		console.error('Contact form error:', err);
		return json({ success: false, error: 'submitFailed' });
	}
}
