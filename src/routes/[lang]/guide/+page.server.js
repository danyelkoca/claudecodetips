import { sections } from '$lib/content/tips.js';

export async function load({ parent }) {
	const { lang, hasAccess } = await parent();
	return { sections, hasAccess };
}
