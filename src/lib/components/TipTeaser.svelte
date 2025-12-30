<script>
	import { Lock } from 'lucide-svelte';

	export let tip;
	export let t;
</script>

<article class="p-6 bg-slate-50 rounded-lg border border-slate-200">
	<div class="flex items-center gap-3 mb-3">
		<span class="px-2 py-1 bg-slate-200 text-slate-600 text-sm font-bold rounded">
			{t.common.tipPrefix} {tip.id}
		</span>
		<Lock class="w-4 h-4 text-slate-400" />
	</div>

	<h3 class="text-lg font-bold text-slate-900 mb-2">
		{tip.title}
	</h3>

	<p class="text-sm text-slate-600 mb-3">
		{tip.summary}
	</p>

	<span class="text-sm text-slate-400">
		{t.guide.locked}
	</span>
</article>
