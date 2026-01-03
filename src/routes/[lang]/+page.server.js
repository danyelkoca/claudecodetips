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

	// Load all tips metadata with translations
	const { tips: allTips } = await loadTipsMeta(lang, t);

	// Load all 4 free tips with section info
	const freeTips = freeTipIds.map((id) => {
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

	// All tip titles for hero flowing text
	const allTipTitles = allTips
		.sort((a, b) => a.id - b.id)
		.map(tip => ({
			id: tip.id,
			title: tip.title
		}));

	return {
		freeTips,
		curriculum,
		carouselTips,
		allTipTitles,
		hasAccess
	};
}
