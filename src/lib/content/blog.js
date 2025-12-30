import { DEFAULT_LANG } from '$lib/i18n/loader.js';

/**
 * Load all blog posts metadata for a language (server-safe, no components)
 * Falls back to English if no posts exist for the requested language
 * Returns { posts, isFallback }
 */
export async function loadBlogPostsMeta(lang) {
	const modules = import.meta.glob('/src/lib/content/blog/**/*.svx');
	const posts = [];

	for (const [path, resolver] of Object.entries(modules)) {
		if (!path.includes(`/blog/${lang}/`)) continue;

		const post = await resolver();
		posts.push({
			...post.metadata
		});
	}

	if (posts.length > 0) {
		return { posts: posts.sort((a, b) => new Date(b.date) - new Date(a.date)), isFallback: false };
	}

	// Fall back to English
	if (lang !== DEFAULT_LANG) {
		const fallbackPosts = [];
		for (const [path, resolver] of Object.entries(modules)) {
			if (!path.includes(`/blog/${DEFAULT_LANG}/`)) continue;

			const post = await resolver();
			fallbackPosts.push({
				...post.metadata
			});
		}
		return { posts: fallbackPosts.sort((a, b) => new Date(b.date) - new Date(a.date)), isFallback: true };
	}

	return { posts: [], isFallback: false };
}

/**
 * Load all blog posts with components for a language (client-side only)
 */
export async function loadBlogPosts(lang) {
	const modules = import.meta.glob('/src/lib/content/blog/**/*.svx');
	const posts = [];

	for (const [path, resolver] of Object.entries(modules)) {
		if (!path.includes(`/blog/${lang}/`)) continue;

		const post = await resolver();
		posts.push({
			...post.metadata,
			component: post.default
		});
	}

	// Sort by date descending (newest first)
	return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Load a single blog post metadata by slug (server-safe, no component)
 * Falls back to English if post doesn't exist in requested language
 * Returns { post, isFallback } or null if not found
 */
export async function loadBlogPostMeta(slug, lang) {
	const modules = import.meta.glob('/src/lib/content/blog/**/*.svx');

	// Try requested language first
	for (const [path, resolver] of Object.entries(modules)) {
		if (path.includes(`/blog/${lang}/`) && path.includes(`${slug}.svx`)) {
			const post = await resolver();
			return {
				post: { ...post.metadata },
				isFallback: false
			};
		}
	}

	// Fall back to English
	if (lang !== DEFAULT_LANG) {
		for (const [path, resolver] of Object.entries(modules)) {
			if (path.includes(`/blog/${DEFAULT_LANG}/`) && path.includes(`${slug}.svx`)) {
				const post = await resolver();
				return {
					post: { ...post.metadata },
					isFallback: true
				};
			}
		}
	}

	return null;
}

/**
 * Load a single blog post with component by slug (client-side only)
 * Falls back to English if post doesn't exist in requested language
 * Returns { post, component, isFallback } or null if not found
 */
export async function loadBlogPost(slug, lang) {
	const modules = import.meta.glob('/src/lib/content/blog/**/*.svx');

	// Try requested language first
	for (const [path, resolver] of Object.entries(modules)) {
		if (path.includes(`/blog/${lang}/`) && path.includes(`${slug}.svx`)) {
			const post = await resolver();
			return {
				post: { ...post.metadata },
				component: post.default,
				isFallback: false
			};
		}
	}

	// Fall back to English
	if (lang !== DEFAULT_LANG) {
		for (const [path, resolver] of Object.entries(modules)) {
			if (path.includes(`/blog/${DEFAULT_LANG}/`) && path.includes(`${slug}.svx`)) {
				const post = await resolver();
				return {
					post: { ...post.metadata },
					component: post.default,
					isFallback: true
				};
			}
		}
	}

	return null;
}
