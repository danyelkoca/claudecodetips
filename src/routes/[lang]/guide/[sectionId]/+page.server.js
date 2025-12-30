import { error } from '@sveltejs/kit';
import { sections, loadTipsMeta } from '$lib/content/tips.js';

export async function load({ params, parent }) {
	const { lang, hasAccess } = await parent();
	const sectionId = params.sectionId;

	const section = sections.find((s) => s.id === sectionId);
	if (!section) {
		throw error(404, 'sectionNotFound');
	}

	const { tips: allTips } = await loadTipsMeta(lang);
	const sectionTips = allTips.filter((t) => section.tips.includes(t.id));

	// Find prev/next sections for navigation
	const sectionIndex = sections.findIndex((s) => s.id === sectionId);
	const prevSection = sectionIndex > 0 ? sections[sectionIndex - 1] : null;
	const nextSection = sectionIndex < sections.length - 1 ? sections[sectionIndex + 1] : null;

	return {
		section,
		sectionTips,
		hasAccess,
		prevSection,
		nextSection
	};
}
