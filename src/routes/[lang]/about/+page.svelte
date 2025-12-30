<script>
	export let data;
	$: t = data.t;
	$: lang = data.lang;
</script>

<svelte:head>
	<title>{t.about.pageTitle}</title>
	<meta name="description" content={t.about.pageDescription} />
</svelte:head>

<main class="min-h-screen bg-white">
	<div class="max-w-5xl mx-auto px-4 py-12">
		<!-- Hero -->
		<div class="text-center mb-12">
			<h1 class="text-4xl sm:text-5xl font-bold mb-6">{t.about.heroTitle}</h1>
			<p class="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
				{t.about.heroSubtitle}
			</p>
		</div>

		<!-- Story -->
		<section class="mb-12 border-t border-slate-200 pt-12">
			<h2 class="text-2xl font-bold mb-6">{t.about.storyTitle}</h2>
			<div class="space-y-4 text-slate-700 leading-relaxed">
				<p>{t.about.storyPara1}</p>
				<p>{t.about.storyPara2}</p>
				<p>{t.about.storyPara3}</p>
			</div>
		</section>

		<!-- Why -->
		<section class="mb-12 border-t border-slate-200 pt-12">
			<h2 class="text-2xl font-bold mb-6">{t.about.whyTitle}</h2>
			<div class="space-y-4 text-slate-700 leading-relaxed">
				<p>{t.about.whyPara1}</p>
				<p>{t.about.whyPara2}</p>
			</div>
		</section>

		<!-- Credentials -->
		<section class="mb-12 border-t border-slate-200 pt-12">
			<h2 class="text-2xl font-bold mb-6">{t.about.credentialsTitle}</h2>
			<ul class="space-y-2 text-slate-700">
				{#each t.about.credentialsList as credential}
					<li class="flex items-start gap-2">
						<span class="text-slate-400 mt-1">-</span>
						<span>{credential}</span>
					</li>
				{/each}
			</ul>
		</section>

		<!-- Contact -->
		<section class="mb-12 border-t border-slate-200 pt-12">
			<h2 class="text-2xl font-bold mb-6">{t.about.contactTitle}</h2>
			<p class="text-slate-700 mb-6">{t.about.contactPara}</p>
			<div class="flex flex-wrap gap-4">
				<a
					href="https://linkedin.com/in/danyelkoca"
					target="_blank"
					rel="noopener noreferrer"
					class="px-4 py-2 bg-slate-900 text-white rounded-lg hover:opacity-80"
				>
					{t.about.contactLinks.linkedin}
				</a>
				<a
					href="https://github.com/danyelkoca"
					target="_blank"
					rel="noopener noreferrer"
					class="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
				>
					{t.about.contactLinks.github}
				</a>
				<a
					href="https://danyelkoca.com"
					target="_blank"
					rel="noopener noreferrer"
					class="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
				>
					{t.about.contactLinks.website}
				</a>
			</div>
		</section>
	</div>
</main>
