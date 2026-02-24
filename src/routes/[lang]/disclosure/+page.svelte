<script>
	import SeoHead from '$lib/components/SeoHead.svelte';

	export let data;
	$: t = data.t;
	$: lang = data.lang;
</script>

<SeoHead
	title={t.disclosure.pageTitle}
	description={t.disclosure.pageDescription}
	path="/{lang}/disclosure"
	{lang}
/>

<main class="min-h-screen">
	<div class="max-w-5xl mx-auto px-4 py-12">
		<div class="text-center space-y-2">
			<h1 class="text-3xl font-bold text-foreground">{t.disclosure.title}</h1>
		</div>

		<div class="space-y-6 leading-relaxed pt-8">
			<table class="w-full border-collapse">
				<tbody>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-border w-1/3 font-semibold">{t.disclosure.sellerName}</th>
						<td class="py-3 px-4">{t.disclosure.sellerNameValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-border font-semibold">{t.disclosure.address}</th>
						<td class="py-3 px-4">{t.disclosure.addressValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-border font-semibold">{t.disclosure.phone}</th>
						<td class="py-3 px-4">{t.disclosure.phoneValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-border font-semibold">{t.disclosure.email}</th>
						<td class="py-3 px-4">{t.disclosure.emailValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-border font-semibold">{t.disclosure.headOfOperations}</th>
						<td class="py-3 px-4">{t.disclosure.headOfOperationsValue}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</main>
