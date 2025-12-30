<script>
	import { onMount } from 'svelte';
	import { ChevronLeft, ChevronRight, Lock, Home } from 'lucide-svelte';
	import { loadTipComponent } from '$lib/content/tips.js';
	import PaywallBanner from '$lib/components/PaywallBanner.svelte';
	import TipImage from '$lib/components/TipImage.svelte';
	import TranslationDisclaimer from '$lib/components/TranslationDisclaimer.svelte';

	export let data;

	$: t = data.t;
	$: lang = data.lang;
	$: section = data.section;
	$: tip = data.tip;
	$: tipId = data.tipId;
	$: canAccess = data.canAccess;
	$: prevTipId = data.prevTipId;
	$: nextTipId = data.nextTipId;
	$: prevTip = data.prevTip;
	$: nextTip = data.nextTip;
	$: isFallback = data.isFallback;

	$: sectionTitle = t.sections[section.id]?.title || section.id;

	let component = null;
	let loading = true;
	let contentIsFallback = false;

	onMount(async () => {
		if (canAccess) {
			const result = await loadTipComponent(tipId, lang);
			component = result.component;
			contentIsFallback = result.isFallback;
		}
		loading = false;
	});
</script>

<svelte:head>
	<title>{t.common.tipPrefix} {tipId}: {tip.title} - {t.siteBrand}</title>
	<meta name="description" content={tip.summary} />
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
		<a href="/{lang}/guide/{section.id}" class="hover:text-red-600 transition-colors">
			{sectionTitle}
		</a>
		<span>/</span>
		<span class="text-slate-900 font-medium">{t.common.tipPrefix} {tipId}</span>
	</nav>

	<!-- Hero Image -->
	<div class="mb-8 rounded-lg overflow-hidden">
		<TipImage
			tipId={tipId}
			alt={tip.title}
			className="w-full"
			priority={true}
		/>
	</div>

	<!-- Tip Header -->
	<header class="mb-8">
		<div class="flex items-center gap-3 mb-4">
			<span class="px-3 py-1 bg-red-50 text-red-600 text-sm font-bold rounded">
				{t.common.tipPrefix} {tipId}
			</span>
			{#if tip.isFree}
				<span class="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
					{t.guide.freePreview}
				</span>
			{/if}
		</div>
		<h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
			{tip.title}
		</h1>
		<p class="text-lg text-slate-600">
			{tip.summary}
		</p>
	</header>

	<!-- Tip Content -->
	{#if canAccess}
		{#if contentIsFallback && !loading}
			<TranslationDisclaimer {t} />
		{/if}
		<article class="prose prose-slate max-w-none mb-12">
			{#if loading}
				<div class="animate-pulse space-y-4">
					<div class="h-4 bg-slate-200 rounded w-3/4"></div>
					<div class="h-4 bg-slate-200 rounded w-full"></div>
					<div class="h-4 bg-slate-200 rounded w-5/6"></div>
					<div class="h-4 bg-slate-200 rounded w-2/3"></div>
				</div>
			{:else if component}
				<svelte:component this={component} />
			{/if}
		</article>
	{:else}
		<!-- Locked Content -->
		<div class="bg-slate-50 rounded-lg border border-slate-200 p-8 text-center mb-12">
			<Lock class="w-12 h-12 text-slate-400 mx-auto mb-4" />
			<h2 class="text-xl font-bold text-slate-900 mb-2">
				{t.guide.lockedTitle}
			</h2>
			<p class="text-slate-600 mb-6">
				{t.guide.lockedDescription}
			</p>
			<a href="/{lang}#pricing" class="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:opacity-80 font-bold cursor-pointer">
				{t.guide.unlockCta}
			</a>
		</div>
	{/if}

	<!-- Navigation -->
	<nav class="grid grid-cols-2 gap-4 pt-8 border-t border-slate-200">
		{#if prevTip}
			<a
				href="/{lang}/guide/{section.id}/{prevTipId}"
				class="flex gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-red-300 hover:shadow-sm transition-all group"
			>
				<ChevronLeft class="w-5 h-5 text-slate-400 group-hover:text-red-600 flex-shrink-0 mt-1" />
				<div class="flex-1 min-w-0">
					<span class="text-xs text-slate-500">{t.common.previous}</span>
					<div class="flex gap-3 mt-1">
						<div class="w-16 flex-shrink-0 aspect-[1200/630] rounded overflow-hidden">
							<TipImage tipId={prevTipId} alt={prevTip.title} className="w-full h-full object-cover" />
						</div>
						<div class="flex-1 min-w-0">
							<span class="text-xs text-red-600 font-bold">{t.common.tipPrefix} {prevTipId}</span>
							<p class="text-sm font-medium text-slate-900 group-hover:text-red-600 line-clamp-2">{prevTip.title}</p>
						</div>
					</div>
				</div>
			</a>
		{:else}
			<a
				href="/{lang}/guide/{section.id}"
				class="flex items-center gap-2 p-3 text-slate-600 hover:text-red-600"
			>
				<ChevronLeft class="w-5 h-5" />
				<span>{sectionTitle}</span>
			</a>
		{/if}

		{#if nextTip}
			<a
				href="/{lang}/guide/{section.id}/{nextTipId}"
				class="flex gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-red-300 hover:shadow-sm transition-all group text-right"
			>
				<div class="flex-1 min-w-0">
					<span class="text-xs text-slate-500">{t.common.next}</span>
					<div class="flex gap-3 mt-1 justify-end">
						<div class="flex-1 min-w-0 text-right">
							<span class="text-xs text-red-600 font-bold">{t.common.tipPrefix} {nextTipId}</span>
							<p class="text-sm font-medium text-slate-900 group-hover:text-red-600 line-clamp-2">{nextTip.title}</p>
						</div>
						<div class="w-16 flex-shrink-0 aspect-[1200/630] rounded overflow-hidden">
							<TipImage tipId={nextTipId} alt={nextTip.title} className="w-full h-full object-cover" />
						</div>
					</div>
				</div>
				<ChevronRight class="w-5 h-5 text-slate-400 group-hover:text-red-600 flex-shrink-0 mt-1" />
			</a>
		{:else}
			<a
				href="/{lang}/guide/{section.id}"
				class="flex items-center justify-end gap-2 p-3 text-slate-600 hover:text-red-600"
			>
				<span>{sectionTitle}</span>
				<ChevronRight class="w-5 h-5" />
			</a>
		{/if}
	</nav>

	<!-- Paywall Banner for locked tips -->
	{#if !canAccess}
		<div class="mt-12">
			<PaywallBanner {t} {lang} />
		</div>
	{/if}
</div>
