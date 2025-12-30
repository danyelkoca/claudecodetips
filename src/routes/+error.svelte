<script>
	import { page } from '$app/stores';
	import { loadTranslations, supportedLangs, DEFAULT_LANG } from '$lib/i18n/loader.js';
	import Navbar from '$lib/components/Navbar.svelte';

	// Build regex dynamically from supported languages
	const langPattern = new RegExp(`^\\/(${supportedLangs.join('|')})`);
	let lang = $derived($page.url.pathname.match(langPattern)?.[1] || DEFAULT_LANG);

	let t = $state(null);
	$effect(async () => {
		t = await loadTranslations(lang);
	});
</script>

<svelte:head>
	<title>{$page.status} - {t?.error?.titleSuffix || 'Error'}</title>
</svelte:head>

{#if t}
	<Navbar {t} {lang} />

	<div class="flex items-center justify-center px-4 py-20">
		<div class="max-w-md w-full text-center">
			<h1 class="text-6xl font-bold text-slate-800 mb-4">{$page.status}</h1>

			{#if $page.status === 404}
				<h2 class="text-2xl font-semibold text-slate-900 mb-4">{t.error.notFoundTitle}</h2>
				<p class="text-slate-600 mb-8">{t.error.notFoundDescription}</p>
			{:else}
				<h2 class="text-2xl font-semibold text-slate-900 mb-4">{t.error.genericTitle}</h2>
				<p class="text-slate-600 mb-8">{t.error[$page.error?.message] || $page.error?.message || t.error.genericDescription}</p>
			{/if}

			<a href="/{lang}" class="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:opacity-80 font-bold">
				{t.error.goHome}
			</a>
		</div>
	</div>
{/if}
