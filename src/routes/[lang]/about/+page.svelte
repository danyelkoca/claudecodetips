<script>
	import SeoHead from '$lib/components/SeoHead.svelte';
	import JsonLd from '$lib/components/JsonLd.svelte';
	import { PUBLIC_SITE_URL } from '$env/static/public';

	export let data;
	$: t = data.t;
	$: lang = data.lang;

	$: aboutSchema = {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		name: t.about.pageTitle,
		description: t.about.pageDescription,
		url: `${PUBLIC_SITE_URL}/${lang}/about`,
		inLanguage: lang
	};
</script>

<SeoHead
	title={t.about.pageTitle}
	description={t.about.pageDescription}
	path="/{lang}/about"
	{lang}
/>

<JsonLd schema={aboutSchema} />

<main class="min-h-screen">
	<div class="max-w-5xl mx-auto px-4 py-12 space-y-8">
		<!-- Hero -->
		<div class="text-center space-y-6">
			<img src="/images/profile.webp" alt={t.landing.social.author} width="192" height="192" class="w-48 h-48 rounded-xl mx-auto object-cover" />
			<h1 class="text-3xl font-bold text-foreground">{t.about.heroTitle}</h1>
			<p class="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
				{t.about.heroSubtitle}
			</p>
		</div>

		<!-- Story -->
		<section class="border-t border-border pt-12 space-y-6">
			<h2 class="text-2xl font-bold text-foreground">{t.about.storyTitle}</h2>
			<div class="space-y-4 text-foreground leading-relaxed">
				<p>{t.about.storyPara1}</p>
				<p>{t.about.storyPara2}</p>
				<p>{t.about.storyPara3}</p>
			</div>
		</section>

		<!-- Why -->
		<section class="border-t border-border pt-12 space-y-6">
			<h2 class="text-2xl font-bold text-foreground">{t.about.whyTitle}</h2>
			<div class="space-y-4 text-foreground leading-relaxed">
				<p>{t.about.whyPara1}</p>
				<p>{t.about.whyPara2}</p>
			</div>
		</section>

		<!-- Credentials -->
		<section class="border-t border-border pt-12 space-y-6">
			<h2 class="text-2xl font-bold text-foreground">{t.about.credentialsTitle}</h2>
			<ul class="space-y-2 text-foreground">
				{#each t.about.credentialsList as credential}
					<li class="flex items-start gap-2">
						<span class="text-foreground">-</span>
						<span>{credential}</span>
					</li>
				{/each}
			</ul>
		</section>

		<!-- Contact -->
		<section class="border-t border-border pt-12 space-y-6">
			<h2 class="text-2xl font-bold text-foreground">{t.about.contactTitle}</h2>
			<p class="text-foreground">{t.about.contactPara}</p>
			<div class="flex flex-wrap gap-4">
				<a
					href="https://linkedin.com/in/danyelkoca"
					target="_blank"
					rel="noopener noreferrer"
					class="cursor-pointer px-4 py-2 border border-border text-foreground rounded-xl font-semibold hover:opacity-80 transition-colors"
				>
					{t.about.contactLinks.linkedin}
				</a>
				<a
					href="https://github.com/danyelkoca"
					target="_blank"
					rel="noopener noreferrer"
					class="cursor-pointer px-4 py-2 border border-border text-foreground rounded-xl font-semibold hover:opacity-80 transition-colors"
				>
					{t.about.contactLinks.github}
				</a>
				<a
					href="https://danyelkoca.com"
					target="_blank"
					rel="noopener noreferrer"
					class="cursor-pointer px-4 py-2 border border-border text-foreground rounded-xl font-semibold hover:opacity-80 transition-colors"
				>
					{t.about.contactLinks.website}
				</a>
			</div>
		</section>
	</div>
</main>
