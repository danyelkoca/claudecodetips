import { loadBlogPostMeta } from '$lib/content/blog.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const result = await loadBlogPostMeta(params.slug, params.lang);

	if (!result) {
		throw error(404, 'blogNotFound');
	}

	return { post: result.post, slug: params.slug, isFallback: result.isFallback };
}
