<script>
	import { Lock, ChevronRight, BookOpen, Layers, Gift } from 'lucide-svelte';
	import PaywallBanner from '$lib/components/PaywallBanner.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { onMount } from 'svelte';

	export let data;

	$: t = data.t;
	$: lang = data.lang;
	$: sectionsWithTips = data.sectionsWithTips;
	$: hasAccess = data.hasAccess;
	$: totalTips = data.totalTips;
	$: totalSections = data.totalSections;
	$: freeTipsCount = data.freeTipsCount;

	// Sticky mobile CTA visibility
	let showStickyCta = false;

	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const observer = new IntersectionObserver(
				([entry]) => {
					showStickyCta = !entry.isIntersecting;
				},
				{ threshold: 0 }
			);

			setTimeout(() => {
				const heroSection = document.getElementById('guide-hero');
				if (heroSection) observer.observe(heroSection);
			}, 100);

			return () => observer.disconnect();
		}
	});
</script>

<SeoHead
	title="{t.guide.overview} - {t.siteBrand}"
	description={t.guide.overviewDescription}
	path="/{lang}/guide"
	{lang}
/>

<div class="max-w-5xl mx-auto px-4 py-12">
	<!-- Hero Section -->
	<header id="guide-hero" class="text-center space-y-6">
		<div class="space-y-4">
			<h1 class="text-3xl font-bold text-foreground">
				{t.guide.overview}
			</h1>
			<p class="text-lg text-foreground max-w-3xl mx-auto">
				{t.guide.overviewDescription}
			</p>
		</div>

		<!-- Stats Row -->
		<div class="flex flex-wrap justify-center gap-6 text-sm">
			<div class="flex items-center gap-2 text-muted-foreground">
				<BookOpen class="w-4 h-4" />
				<span>{totalTips} {t.common.tips}</span>
			</div>
			<div class="flex items-center gap-2 text-muted-foreground">
				<Layers class="w-4 h-4" />
				<span>{totalSections} {t.guide.sections}</span>
			</div>
			{#if !hasAccess}
			<div class="flex items-center gap-2 text-muted-foreground">
				<Gift class="w-4 h-4" />
				<span>{freeTipsCount} {t.guide.freeLabel}</span>
			</div>
		{/if}
		</div>
	</header>

	<!-- Two-column layout -->
	<div class="lg:grid lg:grid-cols-[1fr_280px] lg:gap-8 pt-8">
		<!-- Main Content: Sections with Tips -->
		<div class="min-w-0 space-y-8">
			{#each sectionsWithTips as section}
				{@const sectionData = t.sections[section.id]}
				<section id={section.id} class="scroll-mt-4 space-y-4">
					<!-- Section Header -->
					<div class="space-y-2">
						<h2 class="text-2xl font-bold text-foreground">
							{sectionData.title}
						</h2>
						<p class="text-sm text-muted-foreground">
							{sectionData.short}
							<span class="text-muted-foreground">·</span>
							<span>{section.tips.length} {section.tips.length === 1 ? t.common.tip : t.common.tips}</span>
						</p>
					</div>

					<!-- Tips List -->
					<div class="space-y-2">
						{#each section.tips as tip}
							{@const canAccess = hasAccess || tip.isFree}
							<a
								href="/{lang}/guide/{section.id}/{tip.id}"
								class="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow group"
							>
								<!-- Tip Number -->
								<span class="flex-shrink-0 text-foreground text-sm font-bold">
									{tip.id}
								</span>

								<!-- Tip Content -->
								<div class="flex-1 min-w-0 space-y-2">
									<div class="flex items-center gap-2">
										<h3 class="font-medium text-foreground truncate">
											{tip.title}
										</h3>
										{#if !hasAccess && tip.isFree}
											<span class="flex-shrink-0 px-2 py-1 bg-success-foreground text-success text-xs font-medium rounded-full">
												{t.guide.free}
											</span>
										{/if}
									</div>
									<p class="text-sm text-muted-foreground truncate">
										{tip.summary}
									</p>
								</div>

								<!-- Status Icon -->
								<div class="flex-shrink-0">
									{#if !canAccess}
										<Lock class="w-4 h-4 text-muted-foreground" />
									{:else}
										<ChevronRight class="w-4 h-4 text-muted-foreground" />
									{/if}
								</div>
							</a>
						{/each}
					</div>
				</section>
			{/each}
		</div>

		<!-- Sidebar (Desktop) -->
		<aside class="hidden lg:block min-w-0 sticky top-4 self-start">
			<div class="space-y-6">
				<!-- Stats Card -->
				<div class="bg-card rounded-xl border border-border p-6 space-y-4">
					<h3 class="font-bold text-foreground">{t.guide.whatsIncluded}</h3>
					<ul class="space-y-4 text-sm">
						<li class="flex items-center gap-4">
							<BookOpen class="w-4 h-4 text-foreground flex-shrink-0" />
							<span class="text-muted-foreground">{totalTips} {t.guide.detailedTips}</span>
						</li>
						<li class="flex items-center gap-4">
							<Layers class="w-4 h-4 text-foreground flex-shrink-0" />
							<span class="text-muted-foreground">{totalSections} {t.guide.organizedSections}</span>
						</li>
						{#if !hasAccess}
						<li class="flex items-center gap-4">
							<Gift class="w-4 h-4 text-foreground flex-shrink-0" />
							<span class="text-muted-foreground">{freeTipsCount} {t.guide.freePreviews}</span>
						</li>
					{/if}
					</ul>

					{#if !hasAccess}
						<a
							href="/{lang}/pricing"
							class="block w-full py-3 bg-primary text-primary-foreground text-center rounded-xl hover:opacity-80 font-bold cursor-pointer transition-colors"
						>
							{t.guide.unlockCta}
						</a>
					{:else}
						<a
							href="/{lang}/guide/{sectionsWithTips[0]?.id}/{sectionsWithTips[0]?.tips[0]?.id}"
							class="block w-full py-3 bg-primary text-primary-foreground text-center rounded-xl hover:opacity-80 font-bold cursor-pointer transition-colors"
						>
							{t.guide.startReading}
						</a>
					{/if}
				</div>

				<!-- Section Quick Links -->
				<div class="bg-card rounded-xl border border-border p-6 space-y-4">
					<h3 class="font-bold text-foreground">{t.guide.jumpTo}</h3>
					<nav class="space-y-2">
						{#each sectionsWithTips as section}
							{@const sectionData = t.sections[section.id]}
							<a
								href="#{section.id}"
								class="block py-2 text-sm text-foreground hover:underline transition-colors"
							>
								{sectionData.title}
								<span class="text-muted-foreground">({section.tips.length})</span>
							</a>
						{/each}
					</nav>
				</div>

				<!-- Paywall Banner (if no access) -->
				{#if !hasAccess}
					<div class="text-sm">
						<p class="text-muted-foreground text-center">
							{t.paywall.alreadyPurchased}
							<a href="/{lang}/restore" class="text-foreground underline hover:opacity-80 font-medium">{t.paywall.restoreAccess}</a>
						</p>
					</div>
				{/if}
			</div>
		</aside>
	</div>

	<!-- Mobile Paywall Banner -->
	{#if !hasAccess}
		<div class="pt-12 lg:hidden">
			<PaywallBanner {t} {lang} />
		</div>
	{/if}
</div>

<!-- Sticky Mobile CTA -->
{#if showStickyCta && !hasAccess}
	<div
		class="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border shadow-lg lg:hidden z-50"
	>
		<a
			href="/{lang}/pricing"
			class="block w-full py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-80 font-bold text-center cursor-pointer transition-colors"
		>
			{t.guide.unlockCta}
		</a>
	</div>
{/if}
