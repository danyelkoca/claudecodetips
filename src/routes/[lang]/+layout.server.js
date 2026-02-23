import { loadTranslations, isValidLang } from '$lib/i18n/loader.js';
import { error } from '@sveltejs/kit';
import { getDb } from '$lib/server/db.js';

export async function load({ params, cookies, platform }) {
	const { lang } = params;

	if (!isValidLang(lang)) {
		throw error(404, 'langNotFound');
	}

	const t = await loadTranslations(lang);

	const sessionId = cookies.get('purchase_session');
	let hasAccess = false;

	if (sessionId) {
		try {
			const db = getDb(platform);
			const purchase = await db.prepare(`
				SELECT id FROM purchases WHERE id = ?1 AND status = 'paid'
			`).bind(sessionId).first();

			if (purchase) {
				hasAccess = true;
			}
		} catch (err) {
			console.error('Failed to verify purchase:', err);
		}
	}

	return {
		lang,
		t,
		hasAccess
	};
}
