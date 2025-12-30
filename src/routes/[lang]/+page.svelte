<script>
	import { onMount } from 'svelte';
	import { Check, ChevronDown } from 'lucide-svelte';
	import { loadTipComponent, sectionFirstTip } from '$lib/content/tips.js';
	import TipImage from '$lib/components/TipImage.svelte';

	export let data;

	$: t = data.t;
	$: lang = data.lang;
	$: curriculum = data.curriculum || [];
	$: carouselTips = data.carouselTips || [];
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

<svelte:head>
	<title>{t.landing.hero.title}</title>
	<meta name="description" content={t.landing.hero.subtitle} />
</svelte:head>

<!-- Section 1: Hero -->
<section class="py-16 md:py-24">
	<div class="max-w-5xl mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- Left: Text -->
			<div>
				<p class="text-slate-500 mb-4">{t.landing.hero.eyebrow}</p>
				<h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
					{t.landing.hero.title}
				</h1>
				<p class="text-xl text-slate-600 mb-8">
					{t.landing.hero.subtitle}
				</p>
				<a
					id="hero-cta"
					href="#pricing"
					class="inline-block px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 font-bold text-lg transition-colors"
				>
					{t.landing.hero.cta}
				</a>
				<p class="mt-4 text-sm text-slate-500">{t.landing.hero.guarantee}</p>
			</div>

			<!-- Right: Tip Content Carousel -->
			<div class="hidden md:block">
				<div class="relative">
					{#each carouselTips as tip, i}
						<div
							class="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-500 {currentSlide === i ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}"
						>
							<!-- Tip Image -->
							<div class="aspect-[1200/630] overflow-hidden">
								<TipImage tipId={tip.id} alt={tip.title} className="w-full h-full object-cover" priority={true} />
							</div>
							<!-- Tip Content -->
							<div class="p-5">
								<div class="flex items-center gap-2 text-sm text-slate-500 mb-2">
									<span>{t.common.tipPrefix} #{tip.id}</span>
									<span>·</span>
									<span>{t.sections[tip.section].title}</span>
								</div>
								<h3 class="text-lg font-bold text-slate-900 mb-2">{tip.title}</h3>
								<p class="text-slate-600 text-sm line-clamp-2">{tip.summary}</p>
							</div>
						</div>
					{/each}
					<!-- Carousel dots -->
					<div class="flex justify-center gap-2 mt-4">
						{#each carouselTips as _, i}
							<button
								class="w-2 h-2 rounded-full transition-colors {currentSlide === i ? 'bg-red-600' : 'bg-slate-300'}"
								onclick={() => currentSlide = i}
								aria-label="Go to slide {i + 1}"
							/>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section 2: Social Proof -->
<section class="py-16 bg-slate-50">
	<div class="max-w-3xl mx-auto px-4 text-center">
		<blockquote class="text-xl text-slate-700 italic mb-4">
			"{t.landing.social.quote}"
		</blockquote>
		<p class="font-medium text-slate-900">{t.landing.social.author}</p>
		<p class="text-sm text-slate-500">{t.landing.social.role}</p>

		<div class="flex flex-wrap justify-center gap-6 md:gap-10 mt-10">
			{#each t.landing.social.benefits as benefit}
				<div class="flex items-center gap-2">
					<Check class="w-5 h-5 text-green-600 flex-shrink-0" />
					<span class="text-slate-700">{benefit}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Section 3: What's Inside (Grid with Images) -->
<section class="py-16">
	<div class="max-w-5xl mx-auto px-4">
		<h2 class="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
			{t.landing.curriculum.title}
		</h2>
		<p class="text-slate-600 text-center mb-10">{t.landing.curriculum.subtitle}</p>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each curriculum as section}
				{@const firstTipId = sectionFirstTip[section.id]}
				<details class="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
					<summary class="cursor-pointer">
						<!-- Section Image -->
						<div class="aspect-[1200/630] overflow-hidden">
							<TipImage
								tipId={firstTipId}
								alt={t.sections[section.id].title}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<!-- Section Info -->
						<div class="p-4 flex justify-between items-center">
							<div>
								<h3 class="font-bold text-slate-900 group-hover:text-red-600 transition-colors">
									{t.sections[section.id].title}
								</h3>
								<p class="text-sm text-slate-500">{section.tips.length} {section.tips.length === 1 ? t.common.tip : t.common.tips}</p>
							</div>
							<ChevronDown class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
						</div>
					</summary>
					<!-- Expanded: Tip List -->
					<div class="px-4 pb-4 border-t border-slate-100">
						<ol class="mt-3 space-y-2">
							{#each section.tips as tip, i}
								<li class="flex items-start gap-3 text-sm">
									<span class="text-slate-400 w-5 flex-shrink-0">{i + 1}.</span>
									<span class="text-slate-600">{tip.title}</span>
								</li>
							{/each}
						</ol>
					</div>
				</details>
			{/each}
		</div>
	</div>
</section>

<!-- Section 4: Sample Tip -->
<section class="py-16 bg-slate-50">
	<div class="max-w-3xl mx-auto px-4">
		<h2 class="text-2xl font-bold text-slate-900 text-center mb-2">
			{t.landing.sample.title}
		</h2>
		<p class="text-slate-600 text-center mb-8">{t.landing.sample.subtitle}</p>

		{#if sampleTip}
			<article class="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm">
				<div class="text-sm text-slate-500 mb-2">{t.common.tipPrefix} #{sampleTip.id}</div>
				<h3 class="text-xl font-bold text-slate-900 mb-4">{sampleTip.title}</h3>
				<div class="prose prose-slate prose-sm max-w-none line-clamp-[12] overflow-hidden">
					{#if sampleTipComponent}
						<svelte:component this={sampleTipComponent} />
					{:else}
						<p>{sampleTip.summary}</p>
					{/if}
				</div>
				<a
					href="/{lang}/guide/setup/2"
					class="inline-block mt-6 text-red-600 font-medium hover:text-red-700"
				>
					{t.landing.sample.readFull} →
				</a>
			</article>
		{/if}
	</div>
</section>

<!-- Section 5: Pricing -->
<section id="pricing" class="py-20">
	<div class="max-w-md mx-auto px-4">
		<div class="bg-white rounded-xl p-8 border border-slate-200 shadow-sm text-center">
			<h2 class="text-lg text-slate-600 mb-2">{t.landing.pricing.title}</h2>
			<div class="text-5xl font-bold text-slate-900 mb-2">{t.landing.pricing.price}</div>
			<p class="text-slate-600 mb-6">{t.landing.pricing.subtitle}</p>

			<ul class="text-left space-y-3 mb-8">
				{#each t.landing.pricing.features as feature}
					<li class="flex items-start gap-3">
						<Check class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-slate-700">{feature}</span>
					</li>
				{/each}
			</ul>

			<a
				href="/{lang}/guide"
				class="block w-full py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 font-bold text-lg transition-colors"
			>
				{t.landing.pricing.cta}
			</a>
		</div>
		<p class="text-center text-sm text-slate-500 mt-4">{t.landing.pricing.guarantee}</p>
	</div>
</section>

<!-- Sticky Mobile CTA -->
{#if showStickyCta}
	<div
		class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-lg md:hidden z-50 animate-slide-up"
	>
		<a
			href="#pricing"
			class="block w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-bold text-center transition-colors"
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

	/* Hide default browser disclosure triangle on details elements */
	details summary {
		list-style: none;
	}

	details summary::-webkit-details-marker {
		display: none;
	}
</style>
