<script>
	import { onMount } from 'svelte';
	import { Check, X, ChevronDown, ChevronRight, Lock } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { loadTipComponent } from '$lib/content/tips.js';
	import TipImage from '$lib/components/TipImage.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;

	$: t = data.t;
	$: lang = data.lang;

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
	$: carouselTips = data.carouselTips;
	$: sampleTip = data.sampleTip;

	// Carousel state
	let currentSlide = 0;

	// Auto-rotate carousel
	onMount(() => {
		const interval = setInterval(() => {
			currentSlide = (currentSlide + 1) % carouselTips.length;
		}, 4000);
		return () => clearInterval(interval);
	});

	// Load sample tip component
	let sampleTipComponent = null;

	onMount(async () => {
		if (sampleTip) {
			const result = await loadTipComponent(sampleTip.id, lang);
			sampleTipComponent = result.component;
		}
	});

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
	<div class="bg-slate-50">
		<div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
			<p class="text-slate-900 text-sm">{t.landing.checkoutCanceled}</p>
			<button onclick={dismissCanceledBanner} class="text-slate-900 hover:opacity-80 cursor-pointer">
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
					<p class="text-slate-500">{t.landing.hero.eyebrow}</p>
					<h1 class="text-3xl font-bold text-slate-900 leading-tight">
						{t.landing.hero.title}
					</h1>
					<p class="text-xl text-slate-900">
						{t.landing.hero.subtitle}
					</p>
				</div>
				<div class="space-y-4">
					<a
						id="hero-cta"
						href="/{lang}/pricing"
						class="inline-block px-6 py-3 bg-primary text-white rounded-xl hover:opacity-80 font-bold text-lg cursor-pointer transition-colors"
					>
						{t.landing.hero.cta}
					</a>
					<p class="text-sm text-slate-500">{t.landing.hero.guarantee}</p>
				</div>
			</div>

			<!-- Right: Tip Content Carousel -->
			<div class="hidden md:block">
				<div class="relative">
					{#each carouselTips as tip, i}
						<div
							class="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-opacity duration-500 {currentSlide === i ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}"
						>
							<!-- Tip Image -->
							<div class="aspect-[1200/630] overflow-hidden">
								<TipImage tipId={tip.id} alt={tip.title} className="w-full h-full object-cover" priority={true} />
							</div>
							<!-- Tip Content -->
							<div class="p-6 space-y-2">
								<div class="flex items-center gap-2 text-sm text-slate-500">
									<span>{t.common.tipPrefix} #{tip.id}</span>
									<span>·</span>
									<span>{t.sections[tip.section].title}</span>
								</div>
								<h3 class="text-lg font-bold text-slate-900">{tip.title}</h3>
								<p class="text-slate-900 text-sm line-clamp-2">{tip.summary}</p>
							</div>
						</div>
					{/each}
					<!-- Carousel dots -->
					<div class="flex justify-center gap-2 pt-4">
						{#each carouselTips as _, i}
							<button
								class="w-4 h-4 rounded-full transition-colors cursor-pointer {currentSlide === i ? 'bg-primary' : 'bg-slate-200'}"
								onclick={() => currentSlide = i}
								aria-label="{t.common.goToSlide} {i + 1}"
							></button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section 2: Social Proof -->
<section class="py-12 bg-slate-50">
	<div class="max-w-5xl mx-auto px-4">
		<div class="grid md:grid-cols-[auto_1fr] gap-8 items-center">
			<!-- Left: Profile Image -->
			<img
				src="/images/profile.webp"
				alt={t.landing.social.author}
				class="w-48 h-48 rounded-xl mx-auto md:mx-0 object-cover"
			/>
			<!-- Right: Quote + Info -->
			<div class="text-center md:text-left space-y-4">
				<blockquote class="text-xl text-slate-900 italic">
					"{t.landing.social.quote}"
				</blockquote>
				<div>
					<p class="font-medium text-slate-900">{t.landing.social.author}</p>
					<p class="text-sm text-slate-500">{t.landing.social.role}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section 2.5: Case Study -->
<section class="py-12">
	<div class="max-w-3xl mx-auto px-4 space-y-8">
		<!-- Title -->
		<h2 class="text-2xl font-bold text-slate-900 text-center">{t.landing.caseStudy.title}</h2>

		<!-- Stats Grid - Wall of Impact -->
		<div class="grid grid-cols-3 gap-4 text-center">
			<div class="space-y-1">
				<div class="text-3xl font-bold text-primary">{t.landing.caseStudy.stats.views.value}</div>
				<div class="text-sm text-slate-500">{t.landing.caseStudy.stats.views.label}</div>
			</div>
			<div class="space-y-1">
				<div class="text-3xl font-bold text-primary">{t.landing.caseStudy.stats.users.value}</div>
				<div class="text-sm text-slate-500">{t.landing.caseStudy.stats.users.label}</div>
			</div>
			<div class="space-y-1">
				<div class="text-3xl font-bold text-primary">{t.landing.caseStudy.stats.time.value}</div>
				<div class="text-sm text-slate-500">{t.landing.caseStudy.stats.time.label}</div>
			</div>
		</div>

		<!-- Description -->
		<p class="text-slate-900 text-center text-lg">{t.landing.caseStudy.description}</p>

		<!-- Image -->
		<img
			src="/images/kumamap.webp"
			alt="Kumamap"
			class="w-full max-w-md mx-auto rounded-xl shadow-sm"
		/>

		<!-- CTA -->
		<div class="text-center">
			<a
				href="https://kumamap.com"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block text-primary font-medium hover:opacity-80 transition-colors"
			>
				{t.landing.caseStudy.cta} →
			</a>
		</div>
	</div>
</section>

<!-- Section 3: What's Inside -->
<section class="py-12">
	<div class="max-w-5xl mx-auto px-4 space-y-8">
		<div class="text-center space-y-2">
			<h2 class="text-2xl font-bold text-slate-900">
				{t.landing.curriculum.title}
			</h2>
			<p class="text-slate-500">{t.landing.curriculum.subtitle}</p>
		</div>

		<div class="space-y-4 md:space-y-8">
			{#each curriculum as section}
				{@const previewTips = section.tips.slice(0, 2)}
				{@const hasMore = section.tips.length > 2}

				<!-- Mobile: Accordion -->
				<div class="md:hidden">
					<details class="group border border-slate-200 rounded-xl bg-white">
						<summary class="p-4 cursor-pointer flex justify-between items-center">
							<div class="flex-1 min-w-0 space-y-1">
								<h3 class="font-bold text-slate-900">{t.sections[section.id].title}</h3>
								<p class="text-sm text-slate-500 truncate">
									{t.sections[section.id].short} · {section.tips.length} {t.common.tips}
								</p>
							</div>
							<ChevronDown class="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0" />
						</summary>
						<div class="px-4 pb-4 space-y-2">
							{#each previewTips as tip}
								<a
									href="/{lang}/guide/{section.id}/{tip.id}"
									class="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-primary/5 transition-colors group/tip"
								>
									<span class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 text-primary text-sm font-bold rounded-xl">
										{tip.id}
									</span>
									<div class="flex-1 min-w-0 space-y-1">
										<div class="flex items-center gap-2">
											<h4 class="font-medium text-slate-900 group-hover/tip:text-primary transition-colors truncate">
												{tip.title}
											</h4>
											{#if tip.isFree}
												<span class="flex-shrink-0 px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
													{t.guide.free}
												</span>
											{:else}
												<Lock class="w-4 h-4 text-slate-400 flex-shrink-0" />
											{/if}
										</div>
										<p class="text-sm text-slate-500 truncate">{tip.summary}</p>
									</div>
									<ChevronRight class="w-4 h-4 text-slate-500 group-hover/tip:text-primary transition-colors flex-shrink-0" />
								</a>
							{/each}
							{#if hasMore}
								<a
									href="/{lang}/guide/{section.id}"
									class="block pt-2 text-sm text-primary font-medium hover:opacity-80 text-center"
								>
									{t.landing.curriculum.viewAll.replace('{count}', section.tips.length)} →
								</a>
							{/if}
						</div>
					</details>
				</div>

				<!-- Desktop: Always visible -->
				<div class="hidden md:block space-y-4">
					<div class="flex items-center justify-between">
						<div class="space-y-1">
							<h3 class="font-bold text-slate-900">{t.sections[section.id].title}</h3>
							<p class="text-sm text-slate-500">{t.sections[section.id].short}</p>
						</div>
						<span class="text-sm text-slate-500">{section.tips.length} {t.common.tips}</span>
					</div>
					<div class="space-y-2">
						{#each previewTips as tip}
							<a
								href="/{lang}/guide/{section.id}/{tip.id}"
								class="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-sm transition-colors group/tip"
							>
								<span class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 text-primary text-sm font-bold rounded-xl">
									{tip.id}
								</span>
								<div class="flex-1 min-w-0 space-y-1">
									<div class="flex items-center gap-2">
										<h4 class="font-medium text-slate-900 group-hover/tip:text-primary transition-colors truncate">
											{tip.title}
										</h4>
										{#if tip.isFree}
											<span class="flex-shrink-0 px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
												{t.guide.free}
											</span>
										{:else}
											<Lock class="w-4 h-4 text-slate-400 flex-shrink-0" />
										{/if}
									</div>
									<p class="text-sm text-slate-500 truncate">{tip.summary}</p>
								</div>
								<ChevronRight class="w-4 h-4 text-slate-500 group-hover/tip:text-primary transition-colors flex-shrink-0" />
							</a>
						{/each}
						{#if hasMore}
							<a
								href="/{lang}/guide/{section.id}"
								class="flex items-center justify-center gap-2 p-4 border border-dashed border-slate-300 rounded-xl text-primary font-medium hover:border-primary hover:bg-primary/5 transition-colors"
							>
								{t.landing.curriculum.viewAll.replace('{count}', section.tips.length)} →
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Section 4: Sample Tip -->
<section class="py-12 bg-slate-50">
	<div class="max-w-3xl mx-auto px-4 space-y-6">
		<div class="text-center space-y-2">
			<h2 class="text-2xl font-bold text-slate-900">
				{t.landing.sample.title}
			</h2>
			<p class="text-slate-500">{t.landing.sample.subtitle}</p>
		</div>

		{#if sampleTip}
			<article class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
				<div class="space-y-2">
					<div class="text-sm text-slate-500">{t.common.tipPrefix} #{sampleTip.id}</div>
					<h3 class="text-xl font-bold text-slate-900">{sampleTip.title}</h3>
				</div>
				<div class="prose prose-slate prose-sm max-w-none line-clamp-[12] overflow-hidden">
					{#if sampleTipComponent}
						<svelte:component this={sampleTipComponent} />
					{:else}
						<p>{sampleTip.summary}</p>
					{/if}
				</div>
				<a
					href="/{lang}/guide/setup/2"
					class="inline-block text-primary font-medium hover:opacity-80"
				>
					{t.landing.sample.readFull} →
				</a>
			</article>
		{/if}
	</div>
</section>

<!-- Section 5: Pricing -->
<section id="pricing" class="py-12">
	<div class="max-w-md mx-auto px-4 space-y-4">
		<div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center space-y-6">
			<div class="space-y-2">
				<h2 class="text-lg text-slate-900">{t.landing.pricing.title}</h2>
				<div class="text-3xl font-bold text-slate-900">{t.landing.pricing.price}</div>
				<p class="text-slate-500">{t.landing.pricing.subtitle}</p>
			</div>

			<ul class="text-left space-y-4">
				{#each t.landing.pricing.features as feature}
					<li class="flex items-start gap-4">
						<Check class="w-5 h-5 text-green-600 flex-shrink-0" />
						<span class="text-slate-900">{feature}</span>
					</li>
				{/each}
			</ul>

			<a
				href="/{lang}/pricing"
				class="block w-full py-3 bg-primary text-white rounded-xl hover:opacity-80 font-bold text-lg cursor-pointer transition-colors"
			>
				{t.landing.pricing.cta}
			</a>
		</div>
		<p class="text-center text-sm text-slate-500">{t.landing.pricing.guarantee}</p>
	</div>
</section>

<!-- Sticky Mobile CTA -->
{#if showStickyCta}
	<div
		class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-lg md:hidden z-50 animate-slide-up"
	>
		<a
			href="/{lang}/pricing"
			class="block w-full py-3 bg-primary text-white rounded-xl hover:opacity-80 font-bold text-center cursor-pointer transition-colors"
		>
			{t.landing.hero.cta}
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
