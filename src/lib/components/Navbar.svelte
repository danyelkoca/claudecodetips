<script>
	import { Check, ChevronDown, Menu, X } from 'lucide-svelte';
	import { languages } from '$lib/i18n/loader.js';
	import { page } from '$app/stores';

	export let t;
	export let lang;
	export let hasAccess = false;

	let mobileMenuOpen = false;
	let langMenuOpen = false;
	let langMenuRef;
	let mobileMenuRef;

	$: currentLanguage = languages.find((l) => l.code === lang);
	$: currentLanguageName = currentLanguage.nativeName;
	$: pathAfterLang = $page.url.pathname.replace(/^\/[^/]+/, '');

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function toggleLangMenu() {
		langMenuOpen = !langMenuOpen;
	}

	function handleClickOutside(event) {
		if (langMenuOpen && langMenuRef && !langMenuRef.contains(event.target)) {
			langMenuOpen = false;
		}
		if (mobileMenuOpen && mobileMenuRef && !mobileMenuRef.contains(event.target)) {
			mobileMenuOpen = false;
		}
	}
</script>

<svelte:window on:click={handleClickOutside} />

<nav class="border-b border-slate-200 relative z-[9999]">
	<div class="max-w-5xl mx-auto px-4">
		<div class="flex justify-between items-center py-4">
			<a href="/{lang}" class="flex items-center gap-2 hover:opacity-80">
				<img src="/images/logo.webp" alt="{t.siteBrand} logo" class="h-12 w-auto" />
				<span class="hidden md:inline text-2xl font-semibold text-slate-900">{t.siteBrand}</span>
				<span class="md:hidden text-sm font-semibold text-slate-900">{t.siteBrand}</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center gap-6">
				<a href="/{lang}/guide" class="text-slate-900 hover:opacity-80">
					{t.nav.guide}
				</a>

				<!-- Language Switcher -->
				<div class="relative" bind:this={langMenuRef}>
					<button
						on:click={toggleLangMenu}
						class="flex items-center gap-1 text-sm text-slate-900 hover:opacity-80 cursor-pointer"
					>
						{currentLanguageName}
						<ChevronDown class="w-4 h-4" />
					</button>

					{#if langMenuOpen}
						<div class="absolute top-full right-0 pt-1 w-40 bg-white border border-slate-200 rounded-xl shadow-sm z-50">
							{#each languages as language}
								<a
									href="/{language.code}{pathAfterLang}"
									on:click={() => (langMenuOpen = false)}
									class="flex items-center justify-between px-4 py-2 text-sm hover:bg-slate-50"
								>
									{language.nativeName}
									{#if language.code === lang}
										<Check class="w-4 h-4 text-primary" />
									{/if}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				{#if hasAccess}
					<a href="/{lang}/guide" class="px-4 py-2 bg-primary text-white rounded-xl hover:opacity-80 font-bold cursor-pointer transition-colors">
						{t.guide.startReading}
					</a>
				{:else}
					<a href="/{lang}/pricing" class="px-4 py-2 bg-primary text-white rounded-xl hover:opacity-80 font-bold cursor-pointer transition-colors">
						{t.landing.pricing.cta}
					</a>
				{/if}
			</div>

			<!-- Mobile Navigation -->
			<div class="flex md:hidden items-center gap-2">
				<button
					on:click|stopPropagation={toggleMobileMenu}
					class="p-2 hover:opacity-80 rounded-xl cursor-pointer transition-colors"
					aria-label={t.nav.toggleMenu}
				>
					{#if mobileMenuOpen}
						<X class="w-6 h-6" />
					{:else}
						<Menu class="w-6 h-6" />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu Dropdown -->
	{#if mobileMenuOpen}
		<div bind:this={mobileMenuRef} class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-sm z-[9999]">
			<div class="max-w-5xl mx-auto px-4 py-4 space-y-4">
				<a href="/{lang}/guide" on:click={() => (mobileMenuOpen = false)} class="block px-2 py-1 hover:opacity-80">
					{t.nav.guide}
				</a>

				{#if hasAccess}
					<a href="/{lang}/guide" on:click={() => (mobileMenuOpen = false)} class="block px-4 py-2 bg-primary text-white rounded-xl hover:opacity-80 font-bold text-center transition-colors">
						{t.guide.startReading}
					</a>
				{:else}
					<a href="/{lang}/pricing" on:click={() => (mobileMenuOpen = false)} class="block px-4 py-2 bg-primary text-white rounded-xl hover:opacity-80 font-bold text-center transition-colors">
						{t.landing.pricing.cta}
					</a>
				{/if}

				<!-- Language Switcher (Mobile) -->
				<div class="border-t border-slate-200 pt-4 space-y-2">
					{#each languages as language}
						<a
							href="/{language.code}{pathAfterLang}"
							on:click={() => (mobileMenuOpen = false)}
							class="flex items-center justify-between px-2 py-1 hover:opacity-80 text-sm"
						>
							{language.nativeName}
							{#if language.code === lang}
								<Check class="w-4 h-4 text-primary" />
							{/if}
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</nav>
