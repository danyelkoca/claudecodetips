import { loadBlogPostsMeta } from '$lib/content/blog.js';

export async function load({ params }) {
	const { posts } = await loadBlogPostsMeta(params.lang);
	return { posts };
}
