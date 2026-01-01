<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import JsonLd from '$lib/components/JsonLd.svelte';
	import { languages } from '$lib/i18n/loader.js';
	import { page } from '$app/stores';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { browser } from '$app/environment';

	export let data;

	$: t = data.t;
	$: lang = data.lang;
	$: pathAfterLang = $page.url.pathname.replace(/^\/[^/]+/, '') || '';

	// Update dir attribute on client-side navigation
	$: if (browser) {
		document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
	}

	// og:locale uses underscore format: language_TERRITORY
	const localeMap = {
		'en': 'en_US',
		'ja': 'ja_JP',
		'zh-CN': 'zh_CN',
		'zh-TW': 'zh_TW',
		'es': 'es_ES',
		'fr': 'fr_FR',
		'pt': 'pt_BR',
		'de': 'de_DE',
		'ko': 'ko_KR',
		'ar': 'ar_SA',
		'ru': 'ru_RU',
		'id': 'id_ID',
		'tr': 'tr_TR'
	};

	$: ogLocale = localeMap[lang];
	$: alternateLocales = Object.entries(localeMap).filter(([code]) => code !== lang).map(([, locale]) => locale);

	// Organization schema for site-wide structured data
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Claude Code Tips',
		url: PUBLIC_SITE_URL,
		logo: `${PUBLIC_SITE_URL}/images/logo.webp`
	};

	// WebSite schema
	$: websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: t.siteBrand,
		url: PUBLIC_SITE_URL
	};
</script>

<svelte:head>
	<title>{t.siteBrand}</title>
	<meta property="og:site_name" content={t.siteBrand} />
	<meta property="og:locale" content={ogLocale} />
	{#each alternateLocales as altLocale}
		<meta property="og:locale:alternate" content={altLocale} />
	{/each}
	{#each languages as language}
		<link rel="alternate" hreflang={language.code} href="{PUBLIC_SITE_URL}/{language.code}{pathAfterLang}" />
	{/each}
	<link rel="alternate" hreflang="x-default" href="{PUBLIC_SITE_URL}/en{pathAfterLang}" />
</svelte:head>

<JsonLd schema={organizationSchema} />
<JsonLd schema={websiteSchema} />

<div class="min-h-screen flex flex-col">
	<Navbar {lang} {t} hasAccess={data.hasAccess} />
	<main class="flex-1">
		<slot />
	</main>
	<Footer {lang} {t} hasAccess={data.hasAccess} />
</div>
