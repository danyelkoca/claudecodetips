<script>
	export let data;
	$: t = data.t;
</script>

<svelte:head>
	<title>{t.disclosure.pageTitle}</title>
	<meta name="description" content={t.disclosure.pageDescription} />
</svelte:head>

<main class="min-h-screen bg-white">
	<div class="max-w-5xl mx-auto px-4 py-12">
		<div class="text-center mb-12">
			<h1 class="text-4xl sm:text-5xl font-bold mb-4">{t.disclosure.title}</h1>
			<p class="text-slate-500">{t.disclosure.lastUpdated}</p>
		</div>

		<div class="space-y-10 leading-relaxed">
			<!-- No Affiliation -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.disclosure.affiliationTitle}</h2>
				<p class="text-slate-700">{t.disclosure.affiliationPara}</p>
			</section>

			<!-- Editorial Independence -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.disclosure.independenceTitle}</h2>
				<p class="text-slate-700">{t.disclosure.independencePara}</p>
			</section>

			<!-- AI-Assisted -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.disclosure.aiAssistedTitle}</h2>
				<p class="text-slate-700">{t.disclosure.aiAssistedPara}</p>
			</section>

			<!-- No Sponsored Content -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.disclosure.noSponsoredTitle}</h2>
				<p class="text-slate-700">{t.disclosure.noSponsoredPara}</p>
			</section>

			<!-- Contact -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.disclosure.contactTitle}</h2>
				<p class="text-slate-700">{t.disclosure.contactPara}</p>
				<p class="text-slate-900 font-medium mt-2">{t.disclosure.contactEmail}</p>
			</section>
		</div>
	</div>
</main>
