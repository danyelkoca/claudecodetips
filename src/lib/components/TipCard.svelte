<script>
	import { onMount } from 'svelte';
	import { loadTipComponent } from '$lib/content/tips.js';

	export let tip;
	export let t;
	export let lang;

	let component = null;
	let loading = true;

	onMount(async () => {
		const result = await loadTipComponent(tip.id, lang);
		component = result.component;
		loading = false;
	});
</script>

<article class="p-6 bg-white rounded-lg border border-slate-200">
	<div class="flex items-center gap-3 mb-4">
		<span class="px-2 py-1 bg-red-50 text-red-600 text-sm font-bold rounded">
			{t.common.tipPrefix} {tip.id}
		</span>
		{#if tip.isFree}
			<span class="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
				{t.guide.freePreview}
			</span>
		{/if}
	</div>

	<h3 class="text-xl font-bold text-slate-900 mb-3">
		{tip.title}
	</h3>

	<div class="prose prose-slate max-w-none">
		{#if loading}
			<div class="animate-pulse">
				<div class="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
				<div class="h-4 bg-slate-200 rounded w-1/2"></div>
			</div>
		{:else if component}
			<svelte:component this={component} />
		{/if}
	</div>
</article>
