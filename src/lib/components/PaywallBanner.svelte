<script>
	export let t;
	export let lang;
</script>

<div class="p-6 border border-border rounded-xl text-center space-y-4">
	<div class="space-y-2">
		<h3 class="text-xl font-semibold text-foreground">
			{t.paywall.title}
		</h3>
		<p class="text-foreground">
			{t.paywall.description}
		</p>
	</div>
	<a href="/{lang}/pricing" class="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-80 font-bold cursor-pointer transition-colors">
		{t.paywall.cta}
	</a>
	<p class="text-sm text-muted-foreground">
		{t.paywall.alreadyPurchased}
		<a href="/{lang}/restore" class="text-foreground underline hover:opacity-80 font-medium">{t.paywall.restoreAccess}</a>
	</p>
</div>
