<script>
	export let t;
	export let lang;
</script>

<div class="p-6 bg-red-50 rounded-lg border border-red-200 text-center">
	<h3 class="text-xl font-bold text-slate-900 mb-2">
		{t.paywall.title}
	</h3>
	<p class="text-slate-600 mb-4">
		{t.paywall.description}
	</p>
	<a href="/{lang}#pricing" class="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:opacity-80 font-bold">
		{t.paywall.cta}
	</a>
</div>
