import { sections, loadTipsMeta, freeTipIds } from '$lib/content/tips.js';

// Carousel tip IDs with their section mappings
const carouselTipIds = [
	{ id: 2, section: 'setup' },
	{ id: 12, section: 'prompting' },
	{ id: 8, section: 'planning' },
	{ id: 33, section: 'pitfalls' },
	{ id: 25, section: 'multi-agent' }
];

export async function load({ parent }) {
	const { lang, t, hasAccess } = await parent();

	// Load all tips metadata
	const { tips: allTips } = await loadTipsMeta(lang);

	// Get free tips for preview section (just tip #2 for sample)
	const sampleTip = allTips.find((tip) => tip.id === 2);

	// Build curriculum data: sections with their tips
	const curriculum = sections.map((section) => ({
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

	// Build carousel tips data
	const carouselTips = carouselTipIds.map(({ id, section }) => {
		const tip = allTips.find((t) => t.id === id);
		return {
			id,
			section,
			title: tip.title,
			summary: tip.summary
		};
	});

	return {
		sampleTip,
		curriculum,
		carouselTips,
		hasAccess
	};
}
