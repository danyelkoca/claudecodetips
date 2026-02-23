<script>
	import { ChevronLeft, ChevronRight, Lock, Home } from 'lucide-svelte';
	import { loadTipComponent } from '$lib/content/tips.js';
	import PaywallBanner from '$lib/components/PaywallBanner.svelte';
	import TipImage from '$lib/components/TipImage.svelte';
	import TranslationDisclaimer from '$lib/components/TranslationDisclaimer.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import JsonLd from '$lib/components/JsonLd.svelte';
	import { SITE_URL as PUBLIC_SITE_URL } from '$lib/config.js';

	export let data;

	$: t = data.t;
	$: lang = data.lang;
	$: section = data.section;
	$: tip = data.tip;
	$: tipId = data.tipId;
	$: canAccess = data.canAccess;
	$: hasAccess = data.hasAccess;
	$: prevTipId = data.prevTipId;
	$: nextTipId = data.nextTipId;
	$: prevTip = data.prevTip;
	$: nextTip = data.nextTip;
	$: prevSection = data.prevSection;
	$: nextSection = data.nextSection;
	$: isFallback = data.isFallback;

	$: sectionTitle = t.sections[section.id].title;

	// Tip image path
	$: paddedId = String(tipId).padStart(2, '0');
	$: tipImagePath = tipId === 51
		? '/images/tips/bonus.webp'
		: `/images/tips/tip-${paddedId}.webp`;

	let component = null;
	let loading = true;
	let contentIsFallback = false;

	// Reactive statement to load content when tipId or lang changes
	$: if (tipId && lang) {
		if (canAccess) {
			loading = true;
			component = null;
			loadTipComponent(tipId, lang).then(result => {
				component = result.component;
				contentIsFallback = result.isFallback;
				loading = false;
			}).catch(err => {
				console.error('Failed to load tip:', err);
				loading = false;
			});
		} else {
			loading = false;
		}
	}

	// Article schema
	$: articleSchema = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: `${t.common.tipPrefix} ${tipId}: ${tip.title}`,
		description: tip.summary,
		image: `${PUBLIC_SITE_URL}${tipImagePath}`,
		author: {
			'@type': 'Person',
			name: 'Danyel Koca',
			url: 'https://danyelkoca.com'
		}
	};

	// BreadcrumbList schema
	$: breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: t.siteBrand,
				item: `${PUBLIC_SITE_URL}/${lang}`
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: t.guide.title,
				item: `${PUBLIC_SITE_URL}/${lang}/guide`
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: sectionTitle,
				item: `${PUBLIC_SITE_URL}/${lang}/guide/${section.id}`
			},
			{
				'@type': 'ListItem',
				position: 4,
				name: `${t.common.tipPrefix} ${tipId}`,
				item: `${PUBLIC_SITE_URL}/${lang}/guide/${section.id}/${tipId}`
			}
		]
	};
</script>

<SeoHead
	title="{t.common.tipPrefix} {tipId}: {tip.title} - {t.siteBrand}"
	description={tip.summary}
	path="/{lang}/guide/{section.id}/{tipId}"
	{lang}
	image={tipImagePath}
	type="article"
/>

<JsonLd schema={articleSchema} />
<JsonLd schema={breadcrumbSchema} />

<div class="max-w-5xl mx-auto px-4 py-12 space-y-8">
	<!-- Breadcrumb -->
	<nav class="flex items-center gap-2 text-sm text-muted-foreground">
		<a href="/{lang}" class="hover:underline transition-colors">
			<Home class="w-4 h-4" />
		</a>
		<span>/</span>
		<a href="/{lang}/guide" class="hover:underline transition-colors">
			{t.guide.title}
		</a>
		<span>/</span>
		<a href="/{lang}/guide/{section.id}" class="hover:underline transition-colors">
			{sectionTitle}
		</a>
		<span>/</span>
		<span class="text-foreground font-medium">{t.common.tipPrefix} {tipId}</span>
	</nav>

	<!-- Hero Image -->
	<div class="rounded-xl overflow-hidden">
		<TipImage
			tipId={tipId}
			alt={tip.title}
			className="w-full"
			priority={true}
		/>
	</div>

	<!-- Tip Header -->
	<header class="space-y-4">
		<div class="flex items-center gap-4">
			<span class="text-foreground text-sm font-bold">
				{t.common.tipPrefix} {tipId}
			</span>
			{#if !hasAccess && tip.isFree}
				<span class="px-2 py-1 bg-success-foreground text-success text-xs font-medium rounded-full">
					{t.guide.freePreview}
				</span>
			{/if}
		</div>
		<h1 class="text-3xl font-bold text-foreground">
			{tip.title}
		</h1>
		<p class="text-lg text-foreground">
			{tip.summary}
		</p>
	</header>

	<!-- Tip Content -->
	{#if canAccess}
		{#if contentIsFallback && !loading}
			<TranslationDisclaimer {t} />
		{/if}
		<article class="prose max-w-none">
			{#if loading}
				<div class="animate-pulse space-y-4">
					<div class="h-4 bg-border rounded-xl w-3/4"></div>
					<div class="h-4 bg-border rounded-xl w-full"></div>
					<div class="h-4 bg-border rounded-xl w-5/6"></div>
					<div class="h-4 bg-border rounded-xl w-2/3"></div>
				</div>
			{:else if component}
				<svelte:component this={component} />
			{/if}
		</article>
	{:else}
		<!-- Locked Content -->
		<div class="bg-card rounded-xl border border-border p-6 text-center space-y-4">
			<Lock class="w-8 h-8 text-muted-foreground mx-auto" />
			<h2 class="text-2xl font-bold text-foreground">
				{t.guide.lockedTitle}
			</h2>
			<p class="text-foreground">
				{t.guide.lockedDescription}
			</p>
			<a href="/{lang}/pricing" class="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-80 font-bold cursor-pointer transition-colors">
				{t.guide.unlockCta}
			</a>
		</div>
	{/if}

	<!-- Navigation -->
	<nav class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-border">
		{#if prevTip && prevSection}
			<a
				href="/{lang}/guide/{prevSection.id}/{prevTipId}"
				class="group block p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow cursor-pointer space-y-2"
			>
				<div class="flex items-center gap-1 text-xs text-muted-foreground">
					<ChevronLeft class="w-4 h-4" />
					<span>{t.common.previous}</span>
				</div>
				<div class="flex flex-col md:flex-row gap-4">
					<div class="w-full md:w-24 aspect-[1200/630] rounded-xl overflow-hidden flex-shrink-0">
						<TipImage tipId={prevTipId} alt={prevTip.title} className="w-full h-full object-cover" />
					</div>
					<div class="min-w-0 space-y-2">
						<span class="text-xs text-foreground font-bold block">{t.common.tipPrefix} {prevTipId}</span>
						<p class="text-sm font-medium text-foreground group-hover:underline transition-colors line-clamp-2">{prevTip.title}</p>
					</div>
				</div>
			</a>
		{:else}
			<div class="hidden md:block"></div>
		{/if}

		{#if nextTip && nextSection}
			<a
				href="/{lang}/guide/{nextSection.id}/{nextTipId}"
				class="group block p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow cursor-pointer space-y-2"
			>
				<div class="flex items-center gap-1 text-xs text-muted-foreground md:justify-end">
					<span>{t.common.next}</span>
					<ChevronRight class="w-4 h-4" />
				</div>
				<div class="flex flex-col md:flex-row-reverse gap-4">
					<div class="w-full md:w-24 aspect-[1200/630] rounded-xl overflow-hidden flex-shrink-0">
						<TipImage tipId={nextTipId} alt={nextTip.title} className="w-full h-full object-cover" />
					</div>
					<div class="min-w-0 md:text-right space-y-2">
						<span class="text-xs text-foreground font-bold block">{t.common.tipPrefix} {nextTipId}</span>
						<p class="text-sm font-medium text-foreground group-hover:underline transition-colors line-clamp-2">{nextTip.title}</p>
					</div>
				</div>
			</a>
		{/if}
	</nav>

	<!-- Paywall Banner for locked tips -->
	{#if !canAccess}
		<PaywallBanner {t} {lang} />
	{/if}
</div>
