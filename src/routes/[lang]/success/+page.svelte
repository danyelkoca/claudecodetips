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
	<div class="w-8 h-8 bg-success-foreground rounded-full flex items-center justify-center mx-auto">
		<Check class="w-4 h-4 text-success" />
	</div>

	<div class="space-y-2">
		<h1 class="text-3xl font-bold text-foreground">
			{t.success.title}
		</h1>

		<p class="text-muted-foreground">
			{t.success.description}
		</p>

		{#if email}
			<p class="text-sm text-muted-foreground">
				{email}
			</p>
		{/if}
	</div>

	<a href="/{lang}/guide" class="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-80 font-bold text-lg cursor-pointer transition-colors">
		{t.success.cta}
	</a>
</div>
