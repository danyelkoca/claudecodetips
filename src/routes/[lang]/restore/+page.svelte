<script>
	import { Mail, Loader2, Check, AlertCircle } from 'lucide-svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;

	$: t = data.t;
	$: lang = data.lang;

	let email = '';
	let loading = false;
	let success = false;
	let errorKey = '';

	async function handleSubmit() {
		if (!email || loading) return;

		loading = true;
		errorKey = '';

		try {
			const res = await fetch('/api/restore', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email })
			});

			const result = await res.json();

			if (result.success) {
				success = true;
				setTimeout(() => {
					window.location.href = `/${lang}/guide`;
				}, 1500);
			} else {
				errorKey = result.error;
			}
		} catch (err) {
			errorKey = 'restoreFailed';
		} finally {
			loading = false;
		}
	}
</script>

<SeoHead
	title={t.restore.pageTitle}
	description={t.restore.description}
	path="/{lang}/restore"
	{lang}
/>

<div class="max-w-md mx-auto px-4 py-12 space-y-8">
	<div class="text-center space-y-4">
		<div class="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
			<Mail class="w-4 h-4 text-slate-500" />
		</div>
		<div class="space-y-2">
			<h1 class="text-3xl font-bold text-slate-900">
				{t.restore.title}
			</h1>
			<p class="text-slate-500">
				{t.restore.description}
			</p>
		</div>
	</div>

	{#if success}
		<div class="bg-green-50 rounded-xl p-6 text-center space-y-2">
			<Check class="w-8 h-8 text-green-600 mx-auto" />
			<p class="text-green-600 font-medium">{t.restore.successMessage}</p>
			<p class="text-green-600 text-sm">{t.restore.redirecting}</p>
		</div>
	{:else}
		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div class="space-y-2">
				<label for="email" class="block text-sm font-medium text-slate-900">
					{t.restore.emailLabel}
				</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					disabled={loading}
					placeholder={t.restore.emailPlaceholder}
					class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50"
				/>
			</div>

			{#if errorKey}
				<div class="flex items-center gap-2 text-red-600 text-sm">
					<AlertCircle class="w-4 h-4 flex-shrink-0" />
					<span>{t.restore.errors[errorKey]}</span>
				</div>
			{/if}

			<button
				type="submit"
				disabled={loading || !email}
				class="w-full py-3 bg-primary text-white rounded-xl hover:opacity-80 font-bold cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
			>
				{#if loading}
					<Loader2 class="w-5 h-5 animate-spin" />
				{/if}
				{t.restore.cta}
			</button>
		</form>

		<p class="text-center text-sm text-slate-500">
			{t.restore.noAccount}
			<a href="/{lang}/pricing" class="text-primary hover:opacity-80 font-medium">
				{t.restore.buyNow}
			</a>
		</p>
	{/if}
</div>
