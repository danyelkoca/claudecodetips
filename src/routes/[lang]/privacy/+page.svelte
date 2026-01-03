<script>
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;
	$: t = data.t;
	$: lang = data.lang;
</script>

<SeoHead
	title={t.privacy.pageTitle}
	description={t.privacy.pageDescription}
	path="/{lang}/privacy"
	{lang}
/>

<main class="min-h-screen">
	<div class="max-w-5xl mx-auto px-4 py-12">
		<div class="text-center space-y-2">
			<h1 class="text-3xl font-bold text-foreground">{t.privacy.title}</h1>
		</div>

		<div class="space-y-8 leading-relaxed pt-8">
			<section class="space-y-4">
				<h2 class="text-2xl font-bold text-foreground">{t.privacy.dataCollectedTitle}</h2>
				<p>{t.privacy.dataCollectedDescription}</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>{t.privacy.dataEmail}</li>
				</ul>
			</section>

			<section class="space-y-4">
				<h2 class="text-2xl font-bold text-foreground">{t.privacy.paymentTitle}</h2>
				<p>{t.privacy.paymentDescription}</p>
			</section>

			<section class="space-y-4">
				<h2 class="text-2xl font-bold text-foreground">{t.privacy.contactTitle}</h2>
				<p>{t.privacy.contactLabel}: <strong>{t.privacy.contactEmail}</strong></p>
			</section>
		</div>
	</div>
</main>
