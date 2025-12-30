<script>
	export let data;
	$: t = data.t;
</script>

<svelte:head>
	<title>{t.terms.pageTitle}</title>
	<meta name="description" content={t.terms.pageDescription} />
</svelte:head>

<main class="min-h-screen bg-white">
	<div class="max-w-5xl mx-auto px-4 py-12">
		<div class="text-center mb-12">
			<h1 class="text-4xl sm:text-5xl font-bold mb-4">{t.terms.title}</h1>
			<p class="text-slate-500">{t.terms.lastUpdated}</p>
		</div>

		<div class="space-y-10 leading-relaxed">
			<!-- Service -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.terms.serviceTitle}</h2>
				<p class="text-slate-700">{t.terms.servicePara}</p>
			</section>

			<!-- Payment -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.terms.paymentTitle}</h2>
				<ul class="list-disc ml-6 space-y-2 text-slate-700">
					{#each t.terms.paymentList as item}
						<li>{item}</li>
					{/each}
				</ul>
			</section>

			<!-- Refund -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.terms.refundTitle}</h2>
				<p class="text-slate-700">{t.terms.refundPara}</p>
			</section>

			<!-- License -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.terms.licenseTitle}</h2>
				<p class="text-slate-700 mb-3">{t.terms.licensePara}</p>
				<ul class="list-disc ml-6 space-y-2 text-slate-700">
					{#each t.terms.licenseList as item}
						<li>{item}</li>
					{/each}
				</ul>
			</section>

			<!-- Disclaimer -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.terms.disclaimerTitle}</h2>
				<p class="text-slate-700">{t.terms.disclaimerPara}</p>
			</section>

			<!-- Contact -->
			<section>
				<h2 class="text-2xl font-bold mb-4">{t.terms.contactTitle}</h2>
				<p class="text-slate-700">{t.terms.contactPara}</p>
				<p class="text-slate-900 font-medium mt-2">{t.terms.contactEmail}</p>
			</section>
		</div>
	</div>
</main>
