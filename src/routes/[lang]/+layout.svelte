<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;

	$: t = data.t;
	$: lang = data.lang;
</script>

<svelte:head>
	<title>{t.siteBrand}</title>
	<meta property="og:site_name" content={t.siteBrand} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navbar {lang} {t} />
	<main class="flex-1">
		<slot />
	</main>
	<Footer {lang} {t} />
</div>
