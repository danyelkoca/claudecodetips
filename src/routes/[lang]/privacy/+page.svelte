<script>
	export let data;
	$: t = data.t;
</script>

<svelte:head>
	<title>{t.privacy.pageTitle}</title>
	<meta name="description" content={t.privacy.pageDescription} />
</svelte:head>

<main class="min-h-screen bg-white">
	<div class="max-w-5xl mx-auto px-4 py-12">
		<div class="text-center mb-12">
			<h1 class="text-4xl sm:text-5xl font-bold mb-4">{t.privacy.title}</h1>
			<p class="text-slate-500">{t.privacy.lastUpdated}</p>
		</div>

		<div class="space-y-10 leading-relaxed">
			<!-- Intro -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.privacy.introTitle}</h2>
				<p class="text-slate-700">{t.privacy.introPara}</p>
			</section>

			<!-- Data Collected -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.privacy.dataCollectedTitle}</h2>
				<p class="text-slate-700 mb-3">{t.privacy.dataCollectedPara}</p>
				<ul class="list-disc ml-6 space-y-2 text-slate-700">
					{#each t.privacy.dataCollectedList as item}
						<li>{item}</li>
					{/each}
				</ul>
			</section>

			<!-- No Tracking -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.privacy.noTrackingTitle}</h2>
				<ul class="list-disc ml-6 space-y-2 text-slate-700">
					{#each t.privacy.noTrackingList as item}
						<li>{item}</li>
					{/each}
				</ul>
			</section>

			<!-- Stripe -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.privacy.stripeTitle}</h2>
				<p class="text-slate-700">{t.privacy.stripePara}</p>
			</section>

			<!-- Retention -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.privacy.retentionTitle}</h2>
				<p class="text-slate-700">{t.privacy.retentionPara}</p>
			</section>

			<!-- Contact -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.privacy.contactTitle}</h2>
				<p class="text-slate-700">{t.privacy.contactPara}</p>
				<p class="text-slate-900 font-medium mt-2">{t.privacy.contactEmail}</p>
			</section>
		</div>
	</div>
</main>
