import { error } from '@sveltejs/kit';
import { sections, loadTipsMeta, isTipFree } from '$lib/content/tips.js';

export async function load({ params, parent }) {
	const { lang, hasAccess } = await parent();
	const sectionId = params.sectionId;
	const tipId = parseInt(params.tipId, 10);

	// Validate section
	const section = sections.find((s) => s.id === sectionId);
	if (!section) {
		throw error(404, 'sectionNotFound');
	}

	// Validate tip belongs to section
	if (!section.tips.includes(tipId)) {
		throw error(404, 'tipNotInSection');
	}

	const { tips: allTips, isFallback } = await loadTipsMeta(lang);
	const tip = allTips.find((t) => t.id === tipId);

	if (!tip) {
		throw error(404, 'tipNotFound');
	}

	const canAccess = hasAccess || isTipFree(tipId);

	// Find prev/next tips within the same section
	const tipIndex = section.tips.indexOf(tipId);
	const prevTipId = tipIndex > 0 ? section.tips[tipIndex - 1] : null;
	const nextTipId = tipIndex < section.tips.length - 1 ? section.tips[tipIndex + 1] : null;

	// Get full tip data for prev/next
	const prevTip = prevTipId ? allTips.find((t) => t.id === prevTipId) : null;
	const nextTip = nextTipId ? allTips.find((t) => t.id === nextTipId) : null;

	return {
		section,
		tip,
		tipId,
		canAccess,
		prevTipId,
		nextTipId,
		prevTip,
		nextTip,
		isFallback
	};
}
