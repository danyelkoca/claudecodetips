import { supportedLangs } from '$lib/i18n/loader.js';
import { sections } from '$lib/content/tips.js';
import { loadBlogPostsMeta } from '$lib/content/blog.js';
import { PUBLIC_SITE_URL } from '$env/static/public';

export async function GET() {
	const { posts: blogPosts } = await loadBlogPostsMeta('en');

	const staticUrls = [];
	const blogUrls = [];

	for (const lang of supportedLangs) {
		// Static pages (no lastmod - they don't change regularly)
		staticUrls.push(`${PUBLIC_SITE_URL}/${lang}`);
		staticUrls.push(`${PUBLIC_SITE_URL}/${lang}/guide`);
		staticUrls.push(`${PUBLIC_SITE_URL}/${lang}/pricing`);
		staticUrls.push(`${PUBLIC_SITE_URL}/${lang}/about`);
		staticUrls.push(`${PUBLIC_SITE_URL}/${lang}/faq`);
		staticUrls.push(`${PUBLIC_SITE_URL}/${lang}/blog`);
		staticUrls.push(`${PUBLIC_SITE_URL}/${lang}/privacy`);
		staticUrls.push(`${PUBLIC_SITE_URL}/${lang}/terms`);
		staticUrls.push(`${PUBLIC_SITE_URL}/${lang}/disclosure`);
		staticUrls.push(`${PUBLIC_SITE_URL}/${lang}/restore`);
		// NOTE: /success excluded (post-checkout confirmation)

		// Sections
		for (const section of sections) {
			staticUrls.push(`${PUBLIC_SITE_URL}/${lang}/guide/${section.id}`);

			// Tips within section
			for (const tipId of section.tips) {
				staticUrls.push(`${PUBLIC_SITE_URL}/${lang}/guide/${section.id}/${tipId}`);
			}
		}

		// Blog posts (with lastmod from post.date)
		for (const post of blogPosts) {
			blogUrls.push({
				url: `${PUBLIC_SITE_URL}/${lang}/blog/${post.slug}`,
				lastmod: post.date
			});
		}
	}

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
${blogUrls.map((entry) => `  <url><loc>${entry.url}</loc><lastmod>${entry.lastmod}</lastmod></url>`).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
