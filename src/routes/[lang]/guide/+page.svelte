<script>
	import { ChevronRight } from 'lucide-svelte';
	import { sections, sectionFirstTip } from '$lib/content/tips.js';
	import TipImage from '$lib/components/TipImage.svelte';

	export let data;

	$: t = data.t;
	$: lang = data.lang;
</script>

<svelte:head>
	<title>{t.guide.overview} - {t.siteBrand}</title>
	<meta name="description" content={t.guide.overviewDescription} />
</svelte:head>

<div class="max-w-5xl mx-auto px-4 py-12">
	<header class="mb-12 text-center">
		<h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
			{t.guide.overview}
		</h1>
		<p class="text-lg text-slate-600 max-w-2xl mx-auto">
			{t.guide.overviewDescription}
		</p>
	</header>

	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each sections as section}
			{@const sectionData = t.sections[section.id]}
			{@const sectionDesc = sectionData?.long || ''}
			{@const firstTipId = sectionFirstTip[section.id]}
			<a
				href="/{lang}/guide/{section.id}"
				class="block bg-white rounded-lg border border-slate-200 hover:border-red-300 hover:shadow-sm transition-all group overflow-hidden"
			>
				<div class="aspect-[1200/630] overflow-hidden">
					<TipImage
						tipId={firstTipId}
						alt={sectionData.title}
						className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
				<div class="p-4">
					<div class="flex items-center justify-between mb-2">
						<h3 class="font-bold text-slate-900 group-hover:text-red-600 transition-colors">
							{sectionData.title}
						</h3>
						<ChevronRight class="w-5 h-5 text-slate-400 group-hover:text-red-600 transition-colors" />
					</div>
					<p class="text-sm text-slate-600 mb-2 line-clamp-2">{sectionDesc}</p>
					<span class="text-xs text-slate-500">
						{section.tips.length} {section.tips.length === 1 ? t.common.tip : t.common.tips}
					</span>
				</div>
			</a>
		{/each}
	</div>
</div>
