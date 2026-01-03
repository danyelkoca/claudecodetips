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
	<meta name="robots" content="noindex, follow" />
</svelte:head>

{#if t}
	<Navbar {t} {lang} />

	<div class="flex items-center justify-center px-4 py-12">
		<div class="max-w-md w-full text-center space-y-6">
			<div class="space-y-4">
				<h1 class="text-3xl font-bold text-foreground">{$page.status}</h1>

				{#if $page.status === 404}
					<h2 class="text-2xl font-semibold text-foreground">{t.error.notFoundTitle}</h2>
					<p class="text-foreground">{t.error.notFoundDescription}</p>
				{:else}
					<h2 class="text-2xl font-semibold text-foreground">{t.error.genericTitle}</h2>
					<p class="text-foreground">{t.error[$page.error?.message] || $page.error?.message || t.error.genericDescription}</p>
				{/if}
			</div>

			<a href="/{lang}" class="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-80 font-bold cursor-pointer transition-colors">
				{t.error.goHome}
			</a>
		</div>
	</div>
{/if}
