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
			<h1 class="text-3xl font-bold text-slate-900">
				{t.guide.overview}
			</h1>
			<p class="text-lg text-slate-900 max-w-3xl mx-auto">
				{t.guide.overviewDescription}
			</p>
		</div>

		<!-- Stats Row -->
		<div class="flex flex-wrap justify-center gap-6 text-sm">
			<div class="flex items-center gap-2 text-slate-500">
				<BookOpen class="w-4 h-4 text-primary" />
				<span>{totalTips} {t.common.tips}</span>
			</div>
			<div class="flex items-center gap-2 text-slate-500">
				<Layers class="w-4 h-4 text-primary" />
				<span>{totalSections} {t.guide.sections}</span>
			</div>
			<div class="flex items-center gap-2 text-slate-500">
				<Gift class="w-4 h-4 text-primary" />
				<span>{freeTipsCount} {t.guide.freeLabel}</span>
			</div>
		</div>
	</header>

	<!-- Two-column layout -->
	<div class="lg:grid lg:grid-cols-[1fr_280px] lg:gap-8 pt-8">
		<!-- Main Content: Sections with Tips -->
		<div class="space-y-8">
			{#each sectionsWithTips as section}
				{@const sectionData = t.sections[section.id]}
				<section id={section.id} class="scroll-mt-24 space-y-4">
					<!-- Section Header -->
					<div class="space-y-2">
						<h2 class="text-2xl font-bold text-slate-900">
							{sectionData.title}
						</h2>
						<p class="text-sm text-slate-500">
							{sectionData.short}
							<span class="text-slate-500">·</span>
							<span>{section.tips.length} {section.tips.length === 1 ? t.common.tip : t.common.tips}</span>
						</p>
					</div>

					<!-- Tips List -->
					<div class="space-y-2">
						{#each section.tips as tip}
							{@const canAccess = hasAccess || tip.isFree}
							<a
								href="/{lang}/guide/{section.id}/{tip.id}"
								class="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-sm transition-colors group"
							>
								<!-- Tip Number -->
								<span class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 text-primary text-sm font-bold rounded-xl">
									{tip.id}
								</span>

								<!-- Tip Content -->
								<div class="flex-1 min-w-0 space-y-2">
									<div class="flex items-center gap-2">
										<h3 class="font-medium text-slate-900 group-hover:text-primary transition-colors truncate">
											{tip.title}
										</h3>
										{#if tip.isFree}
											<span class="flex-shrink-0 px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
												{t.guide.free}
											</span>
										{/if}
									</div>
									<p class="text-sm text-slate-500 truncate">
										{tip.summary}
									</p>
								</div>

								<!-- Status Icon -->
								<div class="flex-shrink-0">
									{#if !canAccess}
										<Lock class="w-4 h-4 text-slate-500" />
									{:else}
										<ChevronRight class="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
									{/if}
								</div>
							</a>
						{/each}
					</div>
				</section>
			{/each}
		</div>

		<!-- Sidebar (Desktop) -->
		<aside class="hidden lg:block">
			<div class="sticky top-24 space-y-6">
				<!-- Stats Card -->
				<div class="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
					<h3 class="font-bold text-slate-900">{t.guide.whatsIncluded}</h3>
					<ul class="space-y-4 text-sm">
						<li class="flex items-center gap-4">
							<BookOpen class="w-4 h-4 text-primary flex-shrink-0" />
							<span class="text-slate-500">{totalTips} {t.guide.detailedTips}</span>
						</li>
						<li class="flex items-center gap-4">
							<Layers class="w-4 h-4 text-primary flex-shrink-0" />
							<span class="text-slate-500">{totalSections} {t.guide.organizedSections}</span>
						</li>
						<li class="flex items-center gap-4">
							<Gift class="w-4 h-4 text-primary flex-shrink-0" />
							<span class="text-slate-500">{freeTipsCount} {t.guide.freePreviews}</span>
						</li>
					</ul>

					{#if !hasAccess}
						<a
							href="/{lang}/pricing"
							class="block w-full py-3 bg-primary text-white text-center rounded-xl hover:opacity-80 font-bold cursor-pointer transition-colors"
						>
							{t.guide.unlockCta}
						</a>
					{:else}
						<a
							href="/{lang}/guide/{sectionsWithTips[0]?.id}/{sectionsWithTips[0]?.tips[0]?.id}"
							class="block w-full py-3 bg-primary text-white text-center rounded-xl hover:opacity-80 font-bold cursor-pointer transition-colors"
						>
							{t.guide.startReading}
						</a>
					{/if}
				</div>

				<!-- Section Quick Links -->
				<div class="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
					<h3 class="font-bold text-slate-900">{t.guide.jumpTo}</h3>
					<nav class="space-y-2">
						{#each sectionsWithTips as section}
							{@const sectionData = t.sections[section.id]}
							<a
								href="#{section.id}"
								class="block py-2 text-sm text-slate-900 hover:text-primary transition-colors"
							>
								{sectionData.title}
								<span class="text-slate-500">({section.tips.length})</span>
							</a>
						{/each}
					</nav>
				</div>

				<!-- Paywall Banner (if no access) -->
				{#if !hasAccess}
					<div class="text-sm">
						<p class="text-slate-500 text-center">
							{t.paywall.alreadyPurchased}
							<a href="/{lang}/restore" class="text-primary hover:opacity-80 font-medium">{t.paywall.restoreAccess}</a>
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
		class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-lg lg:hidden z-50"
	>
		<a
			href="/{lang}/pricing"
			class="block w-full py-3 bg-primary text-white rounded-xl hover:opacity-80 font-bold text-center cursor-pointer transition-colors"
		>
			{t.guide.unlockCta}
		</a>
	</div>
{/if}
