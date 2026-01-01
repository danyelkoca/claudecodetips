<script>
	import { Check } from 'lucide-svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;

	$: t = data.t;
	$: lang = data.lang;
	$: email = data.email;
</script>

<SeoHead
	title="{t.success.title} - {t.siteBrand}"
	description={t.success.description}
	path="/{lang}/success"
	{lang}
	noindex={true}
/>

<div class="max-w-5xl mx-auto px-4 py-12 text-center space-y-6">
	<div class="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mx-auto">
		<Check class="w-4 h-4 text-green-600" />
	</div>

	<div class="space-y-2">
		<h1 class="text-3xl font-bold text-slate-900">
			{t.success.title}
		</h1>

		<p class="text-slate-500">
			{t.success.description}
		</p>

		{#if email}
			<p class="text-sm text-slate-500">
				{email}
			</p>
		{/if}
	</div>

	<a href="/{lang}/guide" class="inline-block px-6 py-3 bg-primary text-white rounded-xl hover:opacity-80 font-bold text-lg cursor-pointer transition-colors">
		{t.success.cta}
	</a>
</div>
