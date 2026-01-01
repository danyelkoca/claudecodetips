<script>
	export let t;
	export let lang;
	export let hasAccess = false;
</script>

<footer class="border-t border-slate-200 bg-slate-50">
	<div class="max-w-5xl mx-auto px-4 py-12 space-y-8">
		<div class="flex flex-col lg:flex-row lg:justify-between gap-8">
			<!-- Left: Brand -->
			<div class="space-y-4">
				<a href="/{lang}" class="flex items-center gap-2 hover:opacity-80">
					<img src="/images/logo.webp" alt="{t.siteBrand} logo" class="h-10 w-auto" />
					<span class="text-lg font-semibold text-slate-900">{t.siteBrand}</span>
				</a>
				<p class="text-sm text-slate-500">
					{t.footer.builtWith}
				</p>
			</div>

			<!-- Right: Navigation Columns -->
			<div class="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
				<!-- Guide -->
				<div class="space-y-4">
					<h4 class="font-semibold text-slate-900">{t.footer.guide}</h4>
					<div class="space-y-2">
						<a href="/{lang}/guide" class="block text-slate-900 hover:opacity-80">{t.footer.allTips}</a>
						<a href="/{lang}/faq" class="block text-slate-900 hover:opacity-80">{t.footer.faq}</a>
						{#if !hasAccess}
							<a href="/{lang}/restore" class="block text-slate-900 hover:opacity-80">{t.footer.restoreAccess}</a>
							<a href="/{lang}/pricing" class="block text-slate-900 hover:opacity-80">{t.footer.pricing}</a>
						{/if}
					</div>
				</div>

				<!-- Company -->
				<div class="space-y-4">
					<h4 class="font-semibold text-slate-900">{t.footer.company}</h4>
					<div class="space-y-2">
						<a href="/{lang}/blog" class="block text-slate-900 hover:opacity-80">{t.footer.blog}</a>
						<a href="/{lang}/about" class="block text-slate-900 hover:opacity-80">{t.footer.about}</a>
						<a href="/{lang}/contact" class="block text-slate-900 hover:opacity-80">{t.footer.contact}</a>
					</div>
				</div>

				<!-- Legal -->
				<div class="space-y-4">
					<h4 class="font-semibold text-slate-900">{t.footer.legal}</h4>
					<div class="space-y-2">
						<a href="/{lang}/privacy" class="block text-slate-900 hover:opacity-80">{t.footer.privacy}</a>
						<a href="/{lang}/terms" class="block text-slate-900 hover:opacity-80">{t.footer.terms}</a>
						<a href="/{lang}/disclosure" class="block text-slate-900 hover:opacity-80">{t.footer.disclosure}</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div class="pt-8 border-t border-slate-200 text-sm text-slate-500 text-center">
			{new Date().getFullYear()} {t.siteBrand}
		</div>
	</div>
</footer>
