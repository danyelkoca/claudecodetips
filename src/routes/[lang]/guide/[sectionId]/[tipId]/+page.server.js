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

	// Helper to find section for any tip ID
	const findSectionForTip = (id) => sections.find(s => s.tips.includes(id));

	// Global prev/next navigation (tip 1-51)
	const prevTipId = tipId > 1 ? tipId - 1 : null;
	const nextTipId = tipId < 51 ? tipId + 1 : null;

	// Get section info for prev/next tips (for correct URL)
	const prevSection = prevTipId ? findSectionForTip(prevTipId) : null;
	const nextSection = nextTipId ? findSectionForTip(nextTipId) : null;

	// Get full tip data for prev/next
	const prevTip = prevTipId ? allTips.find((t) => t.id === prevTipId) : null;
	const nextTip = nextTipId ? allTips.find((t) => t.id === nextTipId) : null;

	return {
		section,
		tip,
		tipId,
		canAccess,
		hasAccess,
		prevTipId,
		nextTipId,
		prevTip,
		nextTip,
		prevSection,
		nextSection,
		isFallback
	};
}
