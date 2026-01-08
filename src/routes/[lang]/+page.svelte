<script>
	import { onMount } from 'svelte';
	import { Check, X, ChevronDown, ChevronRight, Lock, Layers, Shuffle, AlertCircle } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { freeTipIds } from '$lib/content/tips.js';
	import TipImage from '$lib/components/TipImage.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;

	$: t = data.t;
	$: lang = data.lang;
	$: hasAccess = data.hasAccess;

	// Canceled checkout handling
	let showCanceledBanner = false;

	$: if ($page.url.searchParams.get('canceled') === 'true') {
		showCanceledBanner = true;
		if (typeof window !== 'undefined') {
			goto(`/${lang}`, { replaceState: true });
		}
	}

	function dismissCanceledBanner() {
		showCanceledBanner = false;
	}
	$: curriculum = data.curriculum;
	$: freeTips = data.freeTips;
	$: allTipTitles = data.allTipTitles;

	// Sticky CTA visibility
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
				const heroCta = document.getElementById('hero-cta');
				if (heroCta) observer.observe(heroCta);
			}, 100);

			return () => observer.disconnect();
		}
	});
</script>

<SeoHead
	title={t.landing.hero.title}
	description={t.landing.hero.subtitle}
	path="/{lang}"
	{lang}
/>

<!-- Canceled Checkout Banner -->
{#if showCanceledBanner}
	<div class="bg-card border-b border-border">
		<div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
			<p class="text-foreground text-sm">{t.landing.checkoutCanceled}</p>
			<button onclick={dismissCanceledBanner} class="text-foreground hover:opacity-80 cursor-pointer">
				<X class="w-5 h-5" />
			</button>
		</div>
	</div>
{/if}

<!-- Section 1: Hero -->
<section class="py-12">
	<div class="max-w-5xl mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-8 items-center">
			<!-- Left: Text -->
			<div class="space-y-6">
				<div class="space-y-4">
					<p class="text-muted-foreground">{t.landing.hero.eyebrow}</p>
					<h1 class="text-4xl md:text-5xl font-bold text-foreground leading-tight">
						{t.landing.hero.title}
					</h1>
					<p class="text-lg text-muted-foreground">
						{t.landing.hero.subtitle}
					</p>
				</div>
				<div class="space-y-4">
					<a
						id="hero-cta"
						href={hasAccess ? `/${lang}/guide` : `/${lang}/pricing`}
						class="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-80 font-bold text-lg cursor-pointer transition-colors"
					>
						{hasAccess ? t.guide.startReading : t.landing.hero.cta}
					</a>
					<p class="text-sm text-muted-foreground">{t.landing.hero.guarantee}</p>
				</div>
			</div>

			<!-- Right: Flowing Tip Titles -->
			<div class="hidden md:block relative">
				<p class="text-sm leading-relaxed line-clamp-[10]">{#each allTipTitles as tip, i}<span class="text-muted-foreground/50">{String(tip.id).padStart(2, '0')}</span> <span class="text-muted-foreground">{tip.title}</span>{#if i < allTipTitles.length - 1}<span class="mx-2"> </span>{/if}{/each}</p>
				<a href="/{lang}/guide" class="absolute bottom-0 right-0 text-foreground font-bold hover:underline text-sm pl-12 bg-gradient-to-l from-background from-80% to-transparent">{t.landing.hero.seeAll.replace('{count}', allTipTitles.length)} →</a>
			</div>
		</div>
	</div>
</section>

<!-- Section 2: Why Trust This Guide -->
<section class="py-12">
	<div class="max-w-5xl mx-auto px-4 space-y-8">
		<div class="text-center space-y-2">
			<h2 class="text-2xl font-bold text-foreground">{t.landing.author.sectionTitle}</h2>
		</div>

		<div class="grid md:grid-cols-[auto_1fr] gap-8 items-center">
			<!-- Left: Profile Image -->
			<img
				src="/images/profile.webp"
				alt={t.landing.social.author}
				class="w-48 h-48 rounded-xl mx-auto md:mx-0 object-cover"
			/>
			<!-- Right: Content -->
			<div class="space-y-4">
				<blockquote class="text-xl text-foreground italic">
					"{t.landing.author.quote}"
				</blockquote>
				<div>
					<p class="font-bold text-foreground">{t.landing.social.author}</p>
					<p class="text-sm text-muted-foreground">{t.landing.social.roleTitle}</p>
					<p class="text-sm text-muted-foreground">{t.landing.social.roleSubtitle}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section 3: Sound Familiar -->
<section class="py-12">
	<div class="max-w-5xl mx-auto px-4 space-y-8">
		<div class="text-center space-y-2">
			<h2 class="text-2xl font-bold text-foreground">{t.landing.problem.title}</h2>
			<p class="text-muted-foreground">{t.landing.problem.subtitle}</p>
		</div>

		<div class="grid md:grid-cols-2 gap-4">
			{#each t.landing.problem.cards as card, i}
				<div class="bg-card rounded-xl border border-border p-6 text-center space-y-3">
					<div class="flex justify-center text-muted-foreground">
						{#if i === 0}
							<X class="w-6 h-6" />
						{:else if i === 1}
							<Layers class="w-6 h-6" />
						{:else if i === 2}
							<Shuffle class="w-6 h-6" />
						{:else}
							<AlertCircle class="w-6 h-6" />
						{/if}
					</div>
					<h3 class="font-bold text-foreground">{card.title}</h3>
					<p class="text-sm text-muted-foreground">{card.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Section 4: The Experience Behind This Guide -->
<section class="py-12">
	<div class="max-w-5xl mx-auto px-4 space-y-8">
		<div class="text-center space-y-2">
			<h2 class="text-2xl font-bold text-foreground">{t.landing.experience.title}</h2>
			<p class="text-muted-foreground">{t.landing.experience.subtitle}</p>
		</div>

		<div class="max-w-xl mx-auto space-y-4">
			<!-- Terminal with macOS-style window chrome -->
			<div class="bg-card rounded-xl border border-border overflow-hidden">
				<!-- Title bar -->
				<div class="flex items-center gap-2 px-4 py-3 border-b border-border">
					<div class="flex gap-1.5">
						<div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
						<div class="w-3 h-3 rounded-full bg-[#febc2e]"></div>
						<div class="w-3 h-3 rounded-full bg-[#28c840]"></div>
					</div>
					<span class="text-xs text-muted-foreground flex-1 text-center">Terminal</span>
				</div>
				<!-- Terminal content -->
				<div class="p-4 font-mono text-sm">
					<div class="flex items-center gap-2 text-muted-foreground">
						<span>$</span>
						<span>ccusage --total</span>
					</div>
					<div class="space-y-1 pt-3">
						<div class="flex justify-between">
							<span class="text-muted-foreground">Total Tokens:</span>
							<span class="text-foreground font-bold">{t.landing.experience.stats.tokens}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-muted-foreground">Total Cost:</span>
							<span class="text-foreground font-bold">{t.landing.experience.stats.cost}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-muted-foreground">Period:</span>
							<span class="text-foreground">{t.landing.experience.stats.period}</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Conclusion -->
			<p class="text-center text-muted-foreground">{t.landing.experience.conclusion}</p>
		</div>
	</div>
</section>

<!-- Section 5: Case Study -->
<section class="py-12">
	<div class="max-w-5xl mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-8 items-center">
			<!-- Left: Content -->
			<div class="space-y-6">
				<h2 class="text-2xl font-bold text-foreground">{t.landing.caseStudy.title}</h2>
				<p class="text-lg text-muted-foreground">{t.landing.caseStudy.description}</p>

				<div class="flex flex-wrap gap-6">
					<div>
						<div class="text-2xl font-bold text-foreground">{t.landing.caseStudy.stats.users.value}</div>
						<div class="text-sm text-muted-foreground">{t.landing.caseStudy.stats.users.label}</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-foreground">{t.landing.caseStudy.stats.views.value}</div>
						<div class="text-sm text-muted-foreground">{t.landing.caseStudy.stats.views.label}</div>
					</div>
					<div>
						<div class="text-2xl font-bold text-foreground">{t.landing.caseStudy.stats.time.value}</div>
						<div class="text-sm text-muted-foreground">{t.landing.caseStudy.stats.time.label}</div>
					</div>
				</div>

				<a
					href="https://kumamap.com"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block text-foreground underline font-medium hover:opacity-80 transition-colors cursor-pointer"
				>
					{t.landing.caseStudy.cta} →
				</a>
			</div>

			<!-- Right: Image -->
			<div class="order-first md:order-last">
				<img src="/images/kumamap.webp" alt="Kumamap" class="w-full rounded-xl" />
			</div>
		</div>
	</div>
</section>

<!-- Section 6: Curriculum -->
<section class="py-12">
	<div class="max-w-5xl mx-auto px-4 space-y-8">
		<div class="text-center space-y-2">
			<h2 class="text-2xl font-bold text-foreground">
				{t.landing.curriculum.title}
			</h2>
			<p class="text-muted-foreground">{t.landing.curriculum.subtitle}</p>
		</div>

		<div class="space-y-3">
			{#each curriculum as section}
				<details class="group border border-border rounded-xl bg-card">
					<summary class="p-4 cursor-pointer flex items-center gap-4">
						<div class="flex-1 min-w-0 space-y-1">
							<h3 class="font-bold text-foreground">{t.sections[section.id].title}</h3>
							<p class="text-sm text-muted-foreground truncate">
								{t.sections[section.id].short}
							</p>
						</div>
						<span class="text-sm text-muted-foreground flex-shrink-0">{section.tips.length} {t.common.tips}</span>
						<ChevronDown class="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0" />
					</summary>
					<div class="px-4 pb-4">
						<div class="divide-y divide-border">
							{#each section.tips as tip}
								<a
									href="/{lang}/guide/{section.id}/{tip.id}"
									class="flex items-start gap-3 py-3 hover:opacity-80 transition-colors"
								>
									<span class="text-foreground text-sm font-bold flex-shrink-0 w-6">{tip.id}</span>
									<div class="flex-1 min-w-0">
										<div class="flex items-center gap-2">
											<h4 class="text-sm font-medium text-foreground truncate">{tip.title}</h4>
											{#if !hasAccess}
												{#if tip.isFree}
													<span class="px-2 py-0.5 bg-success-foreground text-success text-xs font-medium rounded-full flex-shrink-0">
														{t.guide.free}
													</span>
												{/if}
											{/if}
										</div>
										<p class="text-xs text-muted-foreground truncate">{tip.summary}</p>
									</div>
									{#if !hasAccess && !tip.isFree}
										<Lock class="w-4 h-4 text-muted-foreground flex-shrink-0" />
									{:else}
										<ChevronRight class="w-4 h-4 text-muted-foreground flex-shrink-0" />
									{/if}
								</a>
							{/each}
						</div>
					</div>
				</details>
			{/each}
		</div>
	</div>
</section>

<!-- Section 7: Free Tips -->
<section class="py-12">
	<div class="max-w-5xl mx-auto px-4 space-y-6">
		<div class="text-center space-y-2">
			<h2 class="text-2xl font-bold text-foreground">
				{t.landing.sample.title}
			</h2>
			<p class="text-muted-foreground">{t.landing.sample.subtitle}</p>
		</div>

		<div class="grid md:grid-cols-2 gap-4">
			{#each freeTips as tip}
				<a
					href="/{lang}/guide/{tip.section}/{tip.id}"
					class="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow cursor-pointer group"
				>
					<div class="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
						<TipImage tipId={tip.id} alt={tip.title} className="w-full h-full object-cover" />
					</div>
					<div class="flex-1 min-w-0 space-y-1">
						<div class="flex items-center gap-2">
							<span class="px-2 py-1 bg-success-foreground text-success text-xs font-medium rounded-full">{t.guide.free}</span>
							<span class="text-sm text-muted-foreground">#{tip.id}</span>
						</div>
						<h3 class="font-bold text-foreground">{tip.title}</h3>
						<p class="text-sm text-muted-foreground line-clamp-2">{tip.summary}</p>
					</div>
					<ChevronRight class="w-5 h-5 text-muted-foreground flex-shrink-0" />
				</a>
			{/each}
		</div>
	</div>
</section>

{#if !hasAccess}
<!-- Section 8: Pricing -->
<section id="pricing" class="py-12">
	<div class="max-w-5xl mx-auto px-4">
		<div class="max-w-md mx-auto space-y-4">
			<div class="bg-card rounded-xl p-6 border border-border text-center space-y-6">
				<div class="space-y-2">
					<h2 class="text-lg text-foreground">{t.landing.pricing.title}</h2>
					<div class="text-3xl font-bold text-foreground">{t.landing.pricing.price}</div>
					<p class="text-muted-foreground">{t.landing.pricing.subtitle}</p>
				</div>

				<ul class="text-left space-y-4">
					{#each t.landing.pricing.features as feature}
						<li class="flex items-start gap-4">
							<Check class="w-5 h-5 text-success flex-shrink-0" />
							<span class="text-foreground">{feature}</span>
						</li>
					{/each}
				</ul>

				<a
					href="/{lang}/pricing"
					class="block w-full py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-80 font-bold text-lg cursor-pointer transition-colors"
				>
					{t.landing.pricing.cta}
				</a>
			</div>
			<p class="text-center text-sm text-muted-foreground">{t.landing.pricing.guarantee}</p>
		</div>
	</div>
</section>
{/if}

<!-- Sticky Mobile CTA -->
{#if showStickyCta}
	<div
		class="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border shadow-lg md:hidden z-50 animate-slide-up"
	>
		<a
			href={hasAccess ? `/${lang}/guide` : `/${lang}/pricing`}
			class="block w-full py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-80 font-bold text-center cursor-pointer transition-colors"
		>
			{hasAccess ? t.guide.startReading : t.landing.hero.cta}
		</a>
	</div>
{/if}

<style>
	@keyframes slide-up {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}

	.animate-slide-up {
		animation: slide-up 0.3s ease-out;
	}

	/* Accordion summary styling */
	details summary {
		list-style: none;
	}
	details summary::-webkit-details-marker {
		display: none;
	}
</style>
