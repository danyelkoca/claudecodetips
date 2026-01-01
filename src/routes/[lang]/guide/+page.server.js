import { sections, loadTipsMeta, freeTipIds } from '$lib/content/tips.js';

export async function load({ parent }) {
	const { lang, hasAccess } = await parent();
	const { tips: allTips } = await loadTipsMeta(lang);

	// Build sections with full tip data
	const sectionsWithTips = sections.map((section) => ({
		id: section.id,
		tips: section.tips.map((tipId) => {
			const tip = allTips.find((t) => t.id === tipId);
			return {
				id: tipId,
				title: tip.title,
				summary: tip.summary,
				isFree: freeTipIds.includes(tipId)
			};
		})
	}));

	// Calculate stats
	const totalTips = sections.reduce((acc, s) => acc + s.tips.length, 0);
	const totalSections = sections.length;
	const freeTipsCount = freeTipIds.length;

	return { sectionsWithTips, hasAccess, totalTips, totalSections, freeTipsCount };
}
