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
			<h1 class="text-3xl font-bold text-slate-900">{t.disclosure.title}</h1>
		</div>

		<div class="space-y-6 leading-relaxed pt-8">
			<table class="w-full border-collapse">
				<tbody>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-slate-50 w-1/3 font-semibold">{t.disclosure.sellerName}</th>
						<td class="py-3 px-4">{t.disclosure.sellerNameValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-slate-50 font-semibold">{t.disclosure.address}</th>
						<td class="py-3 px-4">{t.disclosure.addressValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-slate-50 font-semibold">{t.disclosure.phone}</th>
						<td class="py-3 px-4">{t.disclosure.phoneValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-slate-50 font-semibold">{t.disclosure.email}</th>
						<td class="py-3 px-4">{t.disclosure.emailValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-slate-50 font-semibold">{t.disclosure.headOfOperations}</th>
						<td class="py-3 px-4">{t.disclosure.headOfOperationsValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-slate-50 font-semibold">{t.disclosure.additionalFees}</th>
						<td class="py-3 px-4">{t.disclosure.additionalFeesValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-slate-50 font-semibold align-top">{t.disclosure.refundPolicy}</th>
						<td class="py-3 px-4">
							<div class="space-y-4">
								<div>
									<p class="font-medium">{t.disclosure.refundServiceIssues}</p>
									<p>{t.disclosure.refundServiceIssuesValue}</p>
								</div>
								<div>
									<p class="font-medium">{t.disclosure.refundCustomer}</p>
									<p>{t.disclosure.refundCustomerValue}</p>
								</div>
							</div>
						</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-slate-50 font-semibold">{t.disclosure.deliveryTime}</th>
						<td class="py-3 px-4">{t.disclosure.deliveryTimeValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-slate-50 font-semibold">{t.disclosure.paymentMethods}</th>
						<td class="py-3 px-4">{t.disclosure.paymentMethodsValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-slate-50 font-semibold">{t.disclosure.paymentPeriod}</th>
						<td class="py-3 px-4">{t.disclosure.paymentPeriodValue}</td>
					</tr>
					<tr class="border-b">
						<th class="py-3 px-4 text-left bg-slate-50 font-semibold align-top">{t.disclosure.price}</th>
						<td class="py-3 px-4 space-y-2">
							<p>{t.disclosure.priceValue}</p>
							<p class="text-sm text-slate-500">{t.disclosure.priceTaxNote}</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</main>
