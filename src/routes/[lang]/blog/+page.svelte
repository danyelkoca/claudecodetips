<script>
	export let data;
	$: t = data.t;
	$: lang = data.lang;
	$: posts = data.posts;
</script>

<svelte:head>
	<title>{t.blog.pageTitle}</title>
	<meta name="description" content={t.blog.pageDescription} />
</svelte:head>

<main class="min-h-screen bg-white">
	<div class="max-w-5xl mx-auto px-4 py-12">
		<div class="text-center mb-12">
			<h1 class="text-4xl sm:text-5xl font-bold mb-4">{t.blog.title}</h1>
			<p class="text-lg text-slate-600">{t.blog.subtitle}</p>
		</div>

		{#if posts && posts.length > 0}
			<div class="space-y-8">
				{#each posts as post}
					<article class="border-b border-slate-200 pb-8">
						<a href="/{lang}/blog/{post.slug}" class="group">
							<h2 class="text-2xl font-bold mb-2 group-hover:text-slate-600">
								{post.title}
							</h2>
							<p class="text-sm text-slate-500 mb-3">
								{t.blog.publishedOn} {post.date}
							</p>
							<p class="text-slate-700 mb-4">{post.summary}</p>
							<span class="text-slate-900 font-medium group-hover:underline">
								{t.blog.readMore} {t.common.forwardArrow}
							</span>
						</a>
					</article>
				{/each}
			</div>
		{:else}
			<p class="text-center text-slate-500">{t.blog.noPosts}</p>
		{/if}
	</div>
</main>
