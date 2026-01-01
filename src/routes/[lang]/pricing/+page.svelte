<script>
	import { Check, Loader2, AlertCircle } from 'lucide-svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import JsonLd from '$lib/components/JsonLd.svelte';
	import { PUBLIC_SITE_URL } from '$env/static/public';

	export let data;

	$: t = data.t;
	$: lang = data.lang;

	$: productSchema = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: t.checkout.productName,
		description: t.checkout.productDescription,
		offers: {
			'@type': 'Offer',
			price: '29.00',
			priceCurrency: 'USD',
			availability: 'https://schema.org/InStock',
			url: `${PUBLIC_SITE_URL}/${lang}/pricing`
		}
	};

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	let email = '';
	let loading = false;
	let errorKey = '';

	async function handleSubmit() {
		if (loading) return;
		errorKey = '';

		if (!email.trim()) {
			errorKey = 'emailRequired';
			return;
		}
		if (!emailRegex.test(email.trim())) {
			errorKey = 'invalidEmail';
			return;
		}

		loading = true;

		try {
			const res = await fetch('/api/checkout', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ lang, email: email.trim() })
			});

			const result = await res.json();

			if (result.url) {
				window.location.href = result.url;
			} else {
				errorKey = result.error;
			}
		} catch (err) {
			errorKey = 'checkoutFailed';
		} finally {
			loading = false;
		}
	}
</script>

<SeoHead
	title={t.pricingPage.pageTitle}
	description={t.pricingPage.pageDescription}
	path="/{lang}/pricing"
	{lang}
/>

<JsonLd schema={productSchema} />

<div class="max-w-md mx-auto px-4 py-12 space-y-4">
	<div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-6">
		<div class="text-center space-y-2">
			<h1 class="text-3xl font-bold text-slate-900">{t.landing.pricing.title}</h1>
			<div class="text-3xl font-bold text-slate-900">{t.landing.pricing.price}</div>
			<p class="text-slate-500">{t.landing.pricing.subtitle}</p>
		</div>

		<ul class="space-y-4">
			{#each t.landing.pricing.features as feature}
				<li class="flex items-start gap-4">
					<Check class="w-5 h-5 text-green-600 flex-shrink-0" />
					<span class="text-slate-900">{feature}</span>
				</li>
			{/each}
		</ul>

		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div class="space-y-2">
				<label for="email" class="block text-sm font-medium text-slate-900">
					{t.pricingPage.emailLabel}
				</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					disabled={loading}
					placeholder={t.pricingPage.emailPlaceholder}
					class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50"
				/>
			</div>

			{#if errorKey}
				<div class="flex items-center gap-2 text-red-600 text-sm">
					<AlertCircle class="w-4 h-4 flex-shrink-0" />
					<span>{t.pricingPage.errors[errorKey]}</span>
				</div>
			{/if}

			<button
				type="submit"
				disabled={loading || !email}
				class="w-full py-3 bg-primary text-white rounded-xl hover:opacity-80 font-bold text-lg cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
			>
				{#if loading}
					<Loader2 class="w-5 h-5 animate-spin" />
					{t.pricingPage.processing}
				{:else}
					{t.pricingPage.cta}
				{/if}
			</button>
		</form>
	</div>

	<p class="text-center text-sm text-slate-500">{t.landing.pricing.guarantee}</p>

	<p class="text-center text-sm text-slate-500">
		{t.paywall.alreadyPurchased}
		<a href="/{lang}/restore" class="text-primary hover:opacity-80 font-medium">
			{t.paywall.restoreAccess}
		</a>
	</p>
</div>
