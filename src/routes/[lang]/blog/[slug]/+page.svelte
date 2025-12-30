<script>
	import { onMount } from 'svelte';
	import { loadBlogPost } from '$lib/content/blog.js';
	import TranslationDisclaimer from '$lib/components/TranslationDisclaimer.svelte';

	export let data;
	$: t = data.t;
	$: lang = data.lang;
	$: post = data.post;
	$: slug = data.slug;
	$: isFallback = data.isFallback;

	let PostComponent = null;
	let contentIsFallback = false;

	onMount(async () => {
		const result = await loadBlogPost(slug, lang);
		if (result) {
			PostComponent = result.component;
			contentIsFallback = result.isFallback;
		}
	});
</script>

<svelte:head>
	<title>{post.title} - {t.siteBrand}</title>
	<meta name="description" content={post.summary} />
</svelte:head>

<main class="min-h-screen bg-white">
	<div class="max-w-5xl mx-auto px-4 py-12">
		<a href="/{lang}/blog" class="text-slate-600 hover:text-slate-900 mb-8 inline-block">
			{t.common.backArrow} {t.blog.backToBlog}
		</a>

		<article>
			<header class="mb-8">
				<h1 class="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
				<p class="text-slate-500">{t.blog.publishedOn} {post.date}</p>
			</header>

			{#if contentIsFallback && PostComponent}
				<TranslationDisclaimer {t} />
			{/if}

			<div class="prose prose-slate max-w-none">
				{#if PostComponent}
					<svelte:component this={PostComponent} />
				{:else}
					<p class="text-slate-500">{t.common.loading}</p>
				{/if}
			</div>
		</article>
	</div>
</main>
