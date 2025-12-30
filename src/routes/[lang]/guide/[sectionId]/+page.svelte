<script>
	import { Lock, ChevronRight, ChevronLeft, Home } from 'lucide-svelte';
	import { isTipFree } from '$lib/content/tips.js';
	import PaywallBanner from '$lib/components/PaywallBanner.svelte';
	import TipImage from '$lib/components/TipImage.svelte';

	export let data;

	$: t = data.t;
	$: lang = data.lang;
	$: section = data.section;
	$: sectionTips = data.sectionTips;
	$: hasAccess = data.hasAccess;
	$: prevSection = data.prevSection;
	$: nextSection = data.nextSection;

	$: sectionTitle = t.sections[section.id]?.title || section.id;
	$: sectionDescription = t.sections[section.id]?.long || '';
</script>

<svelte:head>
	<title>{sectionTitle} - {t.siteBrand}</title>
	<meta name="description" content={sectionDescription} />
</svelte:head>

<div class="max-w-5xl mx-auto px-4 py-12">
	<!-- Breadcrumb -->
	<nav class="flex items-center gap-2 text-sm text-slate-500 mb-8">
		<a href="/{lang}" class="hover:text-red-600 transition-colors">
			<Home class="w-4 h-4" />
		</a>
		<span>/</span>
		<a href="/{lang}/guide" class="hover:text-red-600 transition-colors">
			{t.guide.title}
		</a>
		<span>/</span>
		<span class="text-slate-900 font-medium">{sectionTitle}</span>
	</nav>

	<!-- Header -->
	<header class="mb-10">
		<h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
			{sectionTitle}
		</h1>
		<p class="text-lg text-slate-600">
			{sectionDescription}
		</p>
		<p class="text-sm text-slate-500 mt-2">
			{sectionTips.length} {sectionTips.length === 1 ? t.common.tip : t.common.tips}
		</p>
	</header>

	<!-- Tips List -->
	<div class="space-y-4 mb-12">
		{#each sectionTips as tip}
			{@const canAccess = hasAccess || isTipFree(tip.id)}
			<a
				href="/{lang}/guide/{section.id}/{tip.id}"
				class="flex gap-4 bg-white rounded-lg border border-slate-200 hover:border-red-300 hover:shadow-sm transition-all cursor-pointer group overflow-hidden"
			>
				<div class="w-32 md:w-48 flex-shrink-0 aspect-[1200/630]">
					<TipImage
						tipId={tip.id}
						alt={tip.title}
						className="w-full h-full object-cover"
					/>
				</div>
				<div class="flex-1 min-w-0 py-4 pr-4 flex flex-col justify-center">
					<div class="flex items-center gap-3 mb-1">
						<span class="px-2 py-0.5 bg-red-50 text-red-600 text-xs font-bold rounded flex-shrink-0">
							{tip.id}
						</span>
						{#if tip.isFree}
							<span class="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded flex-shrink-0">
								{t.guide.free}
							</span>
						{:else if !canAccess}
							<Lock class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
						{/if}
					</div>
					<h3 class="font-bold text-slate-900 group-hover:text-red-600 transition-colors">
						{tip.title}
					</h3>
					<p class="text-sm text-slate-600 line-clamp-2 mt-1">
						{tip.summary}
					</p>
				</div>
				<div class="flex items-center pr-4">
					<ChevronRight class="w-5 h-5 text-slate-400 group-hover:text-red-600 flex-shrink-0" />
				</div>
			</a>
		{/each}
	</div>

	<!-- Section Navigation -->
	<div class="flex justify-between items-center border-t border-slate-200 pt-8">
		{#if prevSection}
			<a
				href="/{lang}/guide/{prevSection.id}"
				class="flex items-center gap-2 text-slate-600 hover:text-red-600 transition-colors"
			>
				<ChevronLeft class="w-5 h-5" />
				<span>{t.sections[prevSection.id]?.title || prevSection.id}</span>
			</a>
		{:else}
			<div></div>
		{/if}

		{#if nextSection}
			<a
				href="/{lang}/guide/{nextSection.id}"
				class="flex items-center gap-2 text-slate-600 hover:text-red-600 transition-colors"
			>
				<span>{t.sections[nextSection.id]?.title || nextSection.id}</span>
				<ChevronRight class="w-5 h-5" />
			</a>
		{:else}
			<div></div>
		{/if}
	</div>

	{#if !hasAccess}
		<div class="mt-12">
			<PaywallBanner {t} {lang} />
		</div>
	{/if}
</div>
