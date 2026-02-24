import { sections, loadTipsMeta } from '$lib/content/tips.js';

export async function load({ parent }) {
	const { lang, t } = await parent();

	// Load all tips metadata with translations
	const { tips: allTips } = await loadTipsMeta(lang, t);

	// Sample tips to highlight on landing page
	const sampleTipIds = [2, 12, 19, 28];
	const sampleTips = sampleTipIds.map((id) => {
		const tip = allTips.find((t) => t.id === id);
		const section = sections.find((s) => s.tips.includes(id));
		return {
			id: tip.id,
			title: tip.title,
			summary: tip.summary,
			section: section.id
		};
	});

	// Build curriculum data: sections with their tips
	const curriculum = sections.map((section) => ({
		id: section.id,
		tips: section.tips.map((tipId) => {
			const tip = allTips.find((t) => t.id === tipId);
			return {
				id: tipId,
				title: tip.title,
				summary: tip.summary
			};
		})
	}));

	// All tip titles for hero flowing text
	const allTipTitles = allTips
		.sort((a, b) => a.id - b.id)
		.map(tip => ({
			id: tip.id,
			title: tip.title
		}));

	return {
		sampleTips,
		curriculum,
		allTipTitles
	};
}
