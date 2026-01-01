<script>
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;
	$: t = data.t;
	$: lang = data.lang;
	$: posts = data.posts;
</script>

<SeoHead
	title={t.blog.pageTitle}
	description={t.blog.pageDescription}
	path="/{lang}/blog"
	{lang}
/>

<main class="min-h-screen">
	<div class="max-w-5xl mx-auto px-4 py-12 space-y-8">
		<div class="text-center space-y-2">
			<h1 class="text-3xl font-bold text-slate-900">{t.blog.title}</h1>
			<p class="text-lg text-slate-500">{t.blog.subtitle}</p>
		</div>

		{#if posts && posts.length > 0}
			<div class="space-y-8">
				{#each posts as post}
					<article class="border-b border-slate-200 pb-8">
						<a href="/{lang}/blog/{post.slug}" class="group space-y-4">
							<div class="space-y-2">
								<h2 class="text-2xl font-bold group-hover:text-slate-900">
									{post.title}
								</h2>
								<p class="text-sm text-slate-500">
									{t.blog.publishedOn} {post.date}
								</p>
							</div>
							<p class="text-slate-900">{post.summary}</p>
							<span class="text-slate-900 font-medium group-hover:underline">
								{t.blog.readMore} {t.common.forwardArrow}
							</span>
						</a>
					</article>
				{/each}
			</div>
		{:else}
			<p class="text-center text-slate-900">{t.blog.noPosts}</p>
		{/if}
	</div>
</main>
