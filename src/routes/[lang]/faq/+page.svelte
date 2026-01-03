<script>
	import { ChevronDown } from 'lucide-svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import JsonLd from '$lib/components/JsonLd.svelte';

	export let data;
	$: t = data.t;
	$: lang = data.lang;

	// FAQPage schema for semantic structure
	$: faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: t.faq.items.map(item => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a
			}
		}))
	};
</script>

<SeoHead
	title={t.faq.pageTitle}
	description={t.faq.pageDescription}
	path="/{lang}/faq"
	{lang}
/>

<JsonLd schema={faqSchema} />

<main class="min-h-screen">
	<div class="max-w-3xl mx-auto px-4 py-12 space-y-8">
		<div class="text-center">
			<h1 class="text-3xl font-bold text-foreground">{t.faq.title}</h1>
		</div>

		<div class="space-y-4">
			{#each t.faq.items as item}
				<details class="group border border-border rounded-xl">
					<summary class="p-4 cursor-pointer flex justify-between items-center">
						<span class="font-medium text-foreground">{item.q}</span>
						<ChevronDown class="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0" />
					</summary>
					<div class="px-4 pb-4 text-foreground">{item.a}</div>
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
