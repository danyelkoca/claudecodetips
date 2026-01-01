import { loadTranslations, isValidLang } from '$lib/i18n/loader.js';
import { error } from '@sveltejs/kit';
import { db } from '$lib/server/firebase-admin.js';

export async function load({ params, cookies }) {
	const { lang } = params;

	if (!isValidLang(lang)) {
		throw error(404, 'langNotFound');
	}

	const t = await loadTranslations(lang);

	// Check if user has purchased via cookie
	const sessionId = cookies.get('purchase_session');
	let hasAccess = false;

	if (sessionId) {
		try {
			const purchaseDoc = await db.collection('purchases').doc(sessionId).get();
			if (purchaseDoc.exists && purchaseDoc.data()?.status === 'paid') {
				hasAccess = true;
			}
		} catch (err) {
			console.error('Failed to verify purchase:', err);
			// Fail closed - no access on error
		}
	}

	return {
		lang,
		t,
		hasAccess
	};
}
