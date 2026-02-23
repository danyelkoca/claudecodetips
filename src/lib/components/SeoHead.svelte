<script>
	import { SITE_URL as PUBLIC_SITE_URL } from '$lib/config.js';

	export let title;
	export let description;
	export let path;
	export let lang;
	export let image = '/images/logo-og.webp';
	export let type = 'website';
	export let noindex = false;
	export let article = null;

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

	$: canonicalUrl = `${PUBLIC_SITE_URL}${path}`;
	$: imageUrl = image.startsWith('http') ? image : `${PUBLIC_SITE_URL}${image}`;
	$: ogLocale = localeMap[lang];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content={ogLocale} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	{#if type === 'article' && article}
		<meta property="og:type" content="article" />
		{#if article.publishedTime}
			<meta property="article:published_time" content={article.publishedTime} />
		{/if}
		{#if article.modifiedTime}
			<meta property="article:modified_time" content={article.modifiedTime} />
		{/if}
	{/if}

	{#if noindex}
		<meta name="robots" content="noindex, follow" />
	{/if}
</svelte:head>
