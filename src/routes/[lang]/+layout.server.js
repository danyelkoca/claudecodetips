import { loadTranslations, isValidLang } from '$lib/i18n/loader.js';
import { error } from '@sveltejs/kit';

export async function load({ params, cookies }) {
	const { lang } = params;

	if (!isValidLang(lang)) {
		throw error(404, 'langNotFound');
	}

	const t = await loadTranslations(lang);

	// Check if user has purchased
	const sessionId = cookies.get('purchase_session');

	// TODO: Set to false for production and enable Stripe/Firebase verification
	// For testing: grant full access to all tips
	let hasAccess = true;

	return {
		lang,
		t,
		hasAccess
	};
}
