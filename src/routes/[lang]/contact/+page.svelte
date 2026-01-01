<script>
	import { Loader2, Check, AlertCircle } from 'lucide-svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;
	$: t = data.t;
	$: lang = data.lang;

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	let name = '';
	let email = '';
	let message = '';
	let loading = false;
	let success = false;
	let errorKey = '';

	async function handleSubmit() {
		if (loading) return;
		errorKey = '';

		if (!name.trim()) {
			errorKey = 'nameRequired';
			return;
		}
		if (!email.trim()) {
			errorKey = 'emailRequired';
			return;
		}
		if (!emailRegex.test(email.trim())) {
			errorKey = 'invalidEmail';
			return;
		}
		if (message.trim().length < 10) {
			errorKey = 'messageRequired';
			return;
		}

		loading = true;

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim(), lang })
			});
			const result = await res.json();
			if (result.success) {
				success = true;
				name = '';
				email = '';
				message = '';
			} else {
				errorKey = result.error;
			}
		} catch (err) {
			errorKey = 'submitFailed';
		} finally {
			loading = false;
		}
	}
</script>

<SeoHead
	title={t.contact.pageTitle}
	description={t.contact.pageDescription}
	path="/{lang}/contact"
	{lang}
/>

<div class="max-w-md mx-auto px-4 py-12 space-y-8">
	<div class="text-center space-y-2">
		<h1 class="text-3xl font-bold text-slate-900">{t.contact.title}</h1>
		<p class="text-slate-500">{t.contact.description}</p>
	</div>

	<form on:submit|preventDefault={handleSubmit} class="space-y-4">
		<div class="space-y-2">
			<label for="name" class="block text-sm font-medium text-slate-900">
				{t.contact.nameLabel}
			</label>
			<input
				type="text"
				id="name"
				bind:value={name}
				required
				disabled={loading || success}
				placeholder={t.contact.namePlaceholder}
				class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50"
			/>
		</div>

		<div class="space-y-2">
			<label for="email" class="block text-sm font-medium text-slate-900">
				{t.contact.emailLabel}
			</label>
			<input
				type="email"
				id="email"
				bind:value={email}
				required
				disabled={loading || success}
				placeholder={t.contact.emailPlaceholder}
				class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50"
			/>
		</div>

		<div class="space-y-2">
			<label for="message" class="block text-sm font-medium text-slate-900">
				{t.contact.messageLabel}
			</label>
			<textarea
				id="message"
				bind:value={message}
				required
				rows="5"
				disabled={loading || success}
				placeholder={t.contact.messagePlaceholder}
				class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50 resize-none"
			></textarea>
		</div>

		{#if errorKey}
			<div class="flex items-center gap-2 text-red-600 text-sm">
				<AlertCircle class="w-4 h-4 flex-shrink-0" />
				<span>{t.contact.errors[errorKey]}</span>
			</div>
		{/if}

		{#if success}
			<div class="flex items-center justify-center gap-2 text-green-600 text-sm">
				<Check class="w-4 h-4 flex-shrink-0" />
				<span>{t.contact.successMessage}</span>
			</div>
		{/if}

		<button
			type="submit"
			disabled={loading || success}
			class="w-full py-3 bg-primary text-white rounded-xl hover:opacity-80 font-bold cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
		>
			{#if loading}
				<Loader2 class="w-5 h-5 animate-spin" />
			{:else if success}
				<Check class="w-5 h-5" />
			{/if}
			{success ? t.contact.sent : t.contact.cta}
		</button>
	</form>
</div>
