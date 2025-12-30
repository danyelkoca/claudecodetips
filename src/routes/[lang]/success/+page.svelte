<script>
	import { Check } from 'lucide-svelte';

	export let data;

	$: t = data.t;
	$: lang = data.lang;
	$: email = data.email;
</script>

<svelte:head>
	<title>{t.success.title} - {t.siteBrand}</title>
</svelte:head>

<div class="max-w-5xl mx-auto px-4 py-12 text-center">
	<div class="mb-6">
		<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
			<Check class="w-8 h-8 text-green-600" />
		</div>
	</div>

	<h1 class="text-3xl font-bold text-slate-900 mb-4">
		{t.success.title}
	</h1>

	<p class="text-slate-600 mb-2">
		{t.success.description}
	</p>

	{#if email}
		<p class="text-sm text-slate-500 mb-8">
			{email}
		</p>
	{/if}

	<a href="/{lang}/guide" class="inline-block px-8 py-4 bg-red-600 text-white rounded-lg hover:opacity-80 font-bold text-lg">
		{t.success.cta}
	</a>
</div>
