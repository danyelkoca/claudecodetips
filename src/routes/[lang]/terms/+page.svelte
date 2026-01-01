<script>
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;
	$: t = data.t;
	$: lang = data.lang;
</script>

<SeoHead
	title={t.terms.pageTitle}
	description={t.terms.pageDescription}
	path="/{lang}/terms"
	{lang}
/>

<main class="min-h-screen">
	<div class="max-w-5xl mx-auto px-4 py-12">
		<div class="text-center space-y-2">
			<h1 class="text-3xl font-bold text-slate-900">{t.terms.title}</h1>
		</div>

		<div class="space-y-8 leading-relaxed pt-8">
			<section class="space-y-4">
				<h2 class="text-2xl font-bold text-slate-900">{t.terms.serviceTitle}</h2>
				<p>{t.terms.serviceDescription}</p>
			</section>

			<section class="space-y-4">
				<h2 class="text-2xl font-bold text-slate-900">{t.terms.paymentTitle}</h2>
				<p>{t.terms.paymentDescription}</p>
				<ul class="list-disc pl-6 space-y-2">
					<li>{t.terms.paymentOneTime}</li>
					<li>{t.terms.paymentStripe}</li>
				</ul>
			</section>

			<section class="space-y-4">
				<h2 class="text-2xl font-bold text-slate-900">{t.terms.refundTitle}</h2>
				<p>{t.terms.refundDescription}</p>
			</section>

			<section class="space-y-4">
				<h2 class="text-2xl font-bold text-slate-900">{t.terms.contactTitle}</h2>
				<p>{t.terms.contactLabel}: <strong>{t.terms.contactEmail}</strong></p>
			</section>
		</div>
	</div>
</main>
