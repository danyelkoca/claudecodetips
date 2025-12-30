<script>
	import logo from '$lib/images/logo.png?enhanced';
	import { ChevronDown } from 'lucide-svelte';

	export let t;
	export let lang;
</script>

<footer class="border-t border-slate-200 bg-slate-50">
	<div class="max-w-5xl mx-auto px-4 py-12">
		<!-- FAQ Section -->
		{#if t.landing?.faq?.items}
			<div class="mb-12">
				<h3 class="text-lg font-semibold text-slate-900 mb-4">{t.landing.faq.title}</h3>
				<div class="space-y-2">
					{#each t.landing.faq.items as item}
						<details class="group border border-slate-200 rounded-lg bg-white">
							<summary class="p-4 cursor-pointer flex justify-between items-center">
								<span class="font-medium text-slate-900">{item.q}</span>
								<ChevronDown class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
							</summary>
							<div class="px-4 pb-4 text-slate-600">{item.a}</div>
						</details>
					{/each}
				</div>
			</div>
		{/if}

		<div class="flex flex-col lg:flex-row lg:justify-between gap-10">
			<!-- Left: Brand -->
			<div class="lg:max-w-sm">
				<a href="/{lang}" class="flex items-center gap-2 hover:opacity-80">
					<enhanced:img src={logo} alt="{t.siteBrand} logo" class="h-10 w-auto" />
					<span class="text-lg font-semibold text-slate-900">{t.siteBrand}</span>
				</a>
				<p class="mt-3 text-sm text-slate-600">
					{t.footer.builtWith}
				</p>
			</div>

			<!-- Right: Navigation Columns -->
			<div class="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
				<!-- Guide -->
				<div>
					<h4 class="font-semibold text-slate-900 mb-3">{t.footer.guide}</h4>
					<div class="space-y-2">
						<a href="/{lang}/guide" class="block text-slate-600 hover:opacity-80">{t.footer.allTips}</a>
						<a href="/{lang}/faq" class="block text-slate-600 hover:opacity-80">{t.footer.faq}</a>
					</div>
				</div>

				<!-- Company -->
				<div>
					<h4 class="font-semibold text-slate-900 mb-3">{t.footer.company}</h4>
					<div class="space-y-2">
						<a href="/{lang}/blog" class="block text-slate-600 hover:opacity-80">{t.footer.blog}</a>
						<a href="/{lang}/about" class="block text-slate-600 hover:opacity-80">{t.footer.about}</a>
					</div>
				</div>

				<!-- Legal -->
				<div>
					<h4 class="font-semibold text-slate-900 mb-3">{t.footer.legal}</h4>
					<div class="space-y-2">
						<a href="/{lang}/privacy" class="block text-slate-600 hover:opacity-80">{t.footer.privacy}</a>
						<a href="/{lang}/terms" class="block text-slate-600 hover:opacity-80">{t.footer.terms}</a>
						<a href="/{lang}/disclosure" class="block text-slate-600 hover:opacity-80">{t.footer.disclosure}</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div class="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-500 text-center">
			{new Date().getFullYear()} {t.siteBrand}
		</div>
	</div>
</footer>
