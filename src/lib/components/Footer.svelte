<script>
	import Logo from '$lib/components/Logo.svelte';

	export let t;
	export let lang;
	export let hasAccess = false;
</script>

<footer class="border-t border-border bg-card">
	<div class="max-w-5xl mx-auto px-4 py-12 space-y-8">
		<div class="flex flex-col lg:flex-row lg:justify-between gap-8">
			<!-- Left: Brand -->
			<div class="space-y-4">
				<a href="/{lang}" class="flex items-center gap-2 hover:opacity-80">
					<Logo size={40} />
					<span class="text-lg font-semibold text-foreground">{t.siteBrand}</span>
				</a>
				<p class="text-sm text-muted-foreground">
					{t.footer.builtWith}
				</p>
			</div>

			<!-- Right: Navigation Columns -->
			<div class="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
				<!-- Guide -->
				<div class="space-y-4">
					<h4 class="font-semibold text-foreground">{t.footer.product}</h4>
					<div class="space-y-2">
						<a href="/{lang}/guide" class="block text-foreground hover:opacity-80">{t.nav.guide}</a>
						<a href="/{lang}/faq" class="block text-foreground hover:opacity-80">{t.footer.faq}</a>
						{#if !hasAccess}
							<a href="/{lang}/restore" class="block text-foreground hover:opacity-80">{t.footer.restoreAccess}</a>
							<a href="/{lang}/pricing" class="block text-foreground hover:opacity-80">{t.footer.pricing}</a>
						{/if}
					</div>
				</div>

				<!-- Company -->
				<div class="space-y-4">
					<h4 class="font-semibold text-foreground">{t.footer.company}</h4>
					<div class="space-y-2">
						<a href="/{lang}/blog" class="block text-foreground hover:opacity-80">{t.footer.blog}</a>
						<a href="/{lang}/about" class="block text-foreground hover:opacity-80">{t.footer.about}</a>
						<a href="/{lang}/contact" class="block text-foreground hover:opacity-80">{t.footer.contact}</a>
					</div>
				</div>

				<!-- Legal -->
				<div class="space-y-4">
					<h4 class="font-semibold text-foreground">{t.footer.legal}</h4>
					<div class="space-y-2">
						<a href="/{lang}/privacy" class="block text-foreground hover:opacity-80">{t.footer.privacy}</a>
						<a href="/{lang}/terms" class="block text-foreground hover:opacity-80">{t.footer.terms}</a>
						<a href="/{lang}/disclosure" class="block text-foreground hover:opacity-80">{t.footer.disclosure}</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div class="pt-8 border-t border-border text-sm text-muted-foreground text-center">
			{new Date().getFullYear()} {t.siteBrand}
		</div>
	</div>
</footer>
