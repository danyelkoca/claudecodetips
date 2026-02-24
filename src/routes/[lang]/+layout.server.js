import { loadTranslations, isValidLang } from '$lib/i18n/loader.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { lang } = params;

	if (!isValidLang(lang)) {
		throw error(404, 'langNotFound');
	}

	const t = await loadTranslations(lang);

	return {
		lang,
		t
	};
}
