<script>
	import { loadBlogPost } from '$lib/content/blog.js';
	import TranslationDisclaimer from '$lib/components/TranslationDisclaimer.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import JsonLd from '$lib/components/JsonLd.svelte';
	import { PUBLIC_SITE_URL } from '$env/static/public';

	export let data;
	$: t = data.t;
	$: lang = data.lang;
	$: post = data.post;
	$: slug = data.slug;
	$: isFallback = data.isFallback;

	let PostComponent = null;
	let contentIsFallback = false;

	// Reactive statement to load content when slug or lang changes
	$: if (slug && lang) {
		PostComponent = null;
		loadBlogPost(slug, lang).then(result => {
			if (result) {
				PostComponent = result.component;
				contentIsFallback = result.isFallback;
			}
		});
	}

	// Article schema for blog posts
	$: articleSchema = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.summary,
		datePublished: post.date,
		author: {
			'@type': 'Person',
			name: 'Danyel Koca',
			url: 'https://danyelkoca.com'
		}
	};
</script>

<SeoHead
	title="{post.title} - {t.siteBrand}"
	description={post.summary}
	path="/{lang}/blog/{slug}"
	{lang}
	type="article"
	article={{ publishedTime: post.date }}
/>

<JsonLd schema={articleSchema} />

<main class="min-h-screen">
	<div class="max-w-5xl mx-auto px-4 py-12 space-y-8">
		<a href="/{lang}/blog" class="text-slate-900 hover:text-primary inline-block">
			{t.common.backArrow} {t.blog.backToBlog}
		</a>

		<article class="space-y-8">
			<header class="space-y-4">
				<h1 class="text-3xl font-bold">{post.title}</h1>
				<p class="text-slate-500">{t.blog.publishedOn} {post.date}</p>
			</header>

			{#if contentIsFallback && PostComponent}
				<TranslationDisclaimer {t} />
			{/if}

			<div class="prose prose-slate max-w-none">
				{#if PostComponent}
					<svelte:component this={PostComponent} />
				{:else}
					<p class="text-slate-900">{t.common.loading}</p>
				{/if}
			</div>
		</article>
	</div>
</main>
