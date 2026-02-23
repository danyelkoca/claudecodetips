<script>
	import { Lock, ChevronRight, ChevronLeft, Home } from 'lucide-svelte';
	import { isTipFree } from '$lib/content/tips.js';
	import PaywallBanner from '$lib/components/PaywallBanner.svelte';
	import TipImage from '$lib/components/TipImage.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import JsonLd from '$lib/components/JsonLd.svelte';
	import { SITE_URL as PUBLIC_SITE_URL } from '$lib/config.js';

	export let data;

	$: t = data.t;
	$: lang = data.lang;
	$: section = data.section;
	$: sectionTips = data.sectionTips;
	$: hasAccess = data.hasAccess;
	$: prevSection = data.prevSection;
	$: nextSection = data.nextSection;

	$: sectionTitle = t.sections[section.id].title;
	$: sectionDescription = t.sections[section.id].long;

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
			}
		]
	};
</script>

<SeoHead
	title="{sectionTitle} - {t.siteBrand}"
	description={sectionDescription}
	path="/{lang}/guide/{section.id}"
	{lang}
/>

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
		<span class="text-foreground font-medium">{sectionTitle}</span>
	</nav>

	<!-- Header -->
	<header class="space-y-4">
		<h1 class="text-3xl font-bold text-foreground">
			{sectionTitle}
		</h1>
		<p class="text-lg text-foreground">
			{sectionDescription}
		</p>
		<p class="text-sm text-muted-foreground">
			{sectionTips.length} {sectionTips.length === 1 ? t.common.tip : t.common.tips}
		</p>
	</header>

	<!-- Tips List -->
	<div class="space-y-4">
		{#each sectionTips as tip}
			{@const canAccess = hasAccess || isTipFree(tip.id)}
			<a
				href="/{lang}/guide/{section.id}/{tip.id}"
				class="flex gap-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow cursor-pointer group overflow-hidden"
			>
				<div class="w-32 md:w-48 flex-shrink-0 aspect-[1200/630]">
					<TipImage
						tipId={tip.id}
						alt={tip.title}
						className="w-full h-full object-cover"
					/>
				</div>
				<div class="flex-1 min-w-0 py-4 pr-4 flex flex-col justify-center space-y-2">
					<div class="flex items-center gap-2">
						<span class="text-foreground text-xs font-bold flex-shrink-0">
							{tip.id}
						</span>
						{#if !hasAccess && tip.isFree}
							<span class="px-2 py-1 bg-success-foreground text-success text-xs font-medium rounded-full flex-shrink-0">
								{t.guide.free}
							</span>
						{:else if !canAccess}
							<Lock class="w-4 h-4 text-muted-foreground flex-shrink-0" />
						{/if}
					</div>
					<h3 class="font-bold text-foreground group-hover:underline transition-colors">
						{tip.title}
					</h3>
					<p class="text-sm text-muted-foreground line-clamp-2">
						{tip.summary}
					</p>
				</div>
				<div class="flex items-center pr-4">
					<ChevronRight class="w-5 h-5 text-muted-foreground group-hover:underline flex-shrink-0" />
				</div>
			</a>
		{/each}
	</div>

	<!-- Section Navigation -->
	<div class="flex justify-between items-center border-t border-border pt-8">
		{#if prevSection}
			<a
				href="/{lang}/guide/{prevSection.id}"
				class="flex items-center gap-2 text-foreground hover:underline transition-colors"
			>
				<ChevronLeft class="w-5 h-5" />
				<span>{t.sections[prevSection.id].title}</span>
			</a>
		{:else}
			<div></div>
		{/if}

		{#if nextSection}
			<a
				href="/{lang}/guide/{nextSection.id}"
				class="flex items-center gap-2 text-foreground hover:underline transition-colors"
			>
				<span>{t.sections[nextSection.id].title}</span>
				<ChevronRight class="w-5 h-5" />
			</a>
		{:else}
			<div></div>
		{/if}
	</div>

	{#if !hasAccess}
		<PaywallBanner {t} {lang} />
	{/if}
</div>
