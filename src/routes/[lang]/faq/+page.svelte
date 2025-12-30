<script>
	import { ChevronDown } from 'lucide-svelte';

	export let data;
	$: t = data.t;
</script>

<svelte:head>
	<title>{t.faq.pageTitle}</title>
	<meta name="description" content={t.faq.pageDescription} />
</svelte:head>

<main class="min-h-screen bg-white">
	<div class="max-w-3xl mx-auto px-4 py-12">
		<div class="text-center mb-12">
			<h1 class="text-4xl sm:text-5xl font-bold mb-4">{t.faq.title}</h1>
		</div>

		<div class="space-y-3">
			{#each t.faq.items as item}
				<details class="group border border-slate-200 rounded-lg bg-white">
					<summary class="p-4 cursor-pointer flex justify-between items-center">
						<span class="font-medium text-slate-900">{item.q}</span>
						<ChevronDown class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
					</summary>
					<div class="px-4 pb-4 text-slate-600">{item.a}</div>
				</details>
			{/each}
		</div>
	</div>
</main>

<style>
	details summary {
		list-style: none;
	}

	details summary::-webkit-details-marker {
		display: none;
	}
</style>
