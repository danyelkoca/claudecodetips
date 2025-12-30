import { DEFAULT_LANG } from '$lib/i18n/loader.js';

export const sections = [
	{ id: 'setup', tips: [1, 2, 3] },
	{ id: 'safety', tips: [4, 5, 6, 7] },
	{ id: 'planning', tips: [8, 9, 10, 11] },
	{ id: 'prompting', tips: [12, 13, 14, 15, 16, 17] },
	{ id: 'session', tips: [18, 19, 20, 21] },
	{ id: 'input', tips: [22, 23] },
	{ id: 'multi-agent', tips: [24, 25, 26, 27, 28] },
	{ id: 'customization', tips: [29, 30, 31] },
	{ id: 'pitfalls', tips: [32, 33, 34, 35, 36, 37, 38, 39] },
	{ id: 'advanced', tips: [40, 41, 42, 43, 44] },
	{ id: 'use-cases', tips: [45, 46, 47, 48, 49] },
	{ id: 'closing', tips: [50] },
	{ id: 'bonus', tips: [51] }
];

export const freeTipIds = [2, 12, 19, 28];

// First tip ID for each section (for section thumbnails)
export const sectionFirstTip = Object.fromEntries(
	sections.map(s => [s.id, s.tips[0]])
);

/**
 * Load all tips metadata for a language (server-safe, no components)
 * Falls back to English if no tips exist for the requested language
 * Returns { tips, isFallback }
 */
export async function loadTipsMeta(lang) {
	const modules = import.meta.glob('/src/lib/content/tips/**/*.svx');
	const tips = [];

	for (const [path, resolver] of Object.entries(modules)) {
		if (!path.includes(`/tips/${lang}/`)) continue;

		const tip = await resolver();
		tips.push({
			...tip.metadata
		});
	}

	if (tips.length > 0) {
		return { tips: tips.sort((a, b) => a.id - b.id), isFallback: false };
	}

	// Fall back to English
	if (lang !== DEFAULT_LANG) {
		const fallbackTips = [];
		for (const [path, resolver] of Object.entries(modules)) {
			if (!path.includes(`/tips/${DEFAULT_LANG}/`)) continue;

			const tip = await resolver();
			fallbackTips.push({
				...tip.metadata
			});
		}
		return { tips: fallbackTips.sort((a, b) => a.id - b.id), isFallback: true };
	}

	return { tips: [], isFallback: false };
}

/**
 * Load all tips with components for a language (client-side only)
 */
export async function loadTips(lang) {
	const modules = import.meta.glob('/src/lib/content/tips/**/*.svx');
	const tips = [];

	for (const [path, resolver] of Object.entries(modules)) {
		if (!path.includes(`/tips/${lang}/`)) continue;

		const tip = await resolver();
		tips.push({
			...tip.metadata,
			component: tip.default
		});
	}

	return tips.sort((a, b) => a.id - b.id);
}

/**
 * Load tips for a specific section
 */
export async function loadTipsForSection(sectionId, lang) {
	const section = sections.find(s => s.id === sectionId);
	if (!section) return [];

	const allTips = await loadTips(lang);
	return allTips.filter(tip => section.tips.includes(tip.id));
}

/**
 * Load a single tip component by ID (client-side)
 * Falls back to English if tip doesn't exist in requested language
 * Returns { component, isFallback }
 */
export async function loadTipComponent(id, lang) {
	const paddedId = String(id).padStart(2, '0');
	const modules = import.meta.glob('/src/lib/content/tips/**/*.svx');

	// Try requested language first
	for (const [path, resolver] of Object.entries(modules)) {
		if (path.includes(`/tips/${lang}/`) && path.includes(`${paddedId}-`)) {
			const tip = await resolver();
			return { component: tip.default, isFallback: false };
		}
	}

	// Fall back to English
	if (lang !== DEFAULT_LANG) {
		for (const [path, resolver] of Object.entries(modules)) {
			if (path.includes(`/tips/${DEFAULT_LANG}/`) && path.includes(`${paddedId}-`)) {
				const tip = await resolver();
				return { component: tip.default, isFallback: true };
			}
		}
	}

	return { component: null, isFallback: false };
}

/**
 * Check if a tip is free
 */
export function isTipFree(tipId) {
	return freeTipIds.includes(tipId);
}
