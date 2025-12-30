<script>
	export let tipId;
	export let alt = '';
	export let className = '';
	export let priority = false;

	// Import all tip images with enhanced processing
	const tipImages = import.meta.glob('$lib/images/tips/tip-*.png', {
		eager: true,
		query: { enhanced: true }
	});

	// Import bonus image separately (tip 51 uses bonus.png, not tip-51.png)
	const bonusImage = import.meta.glob('$lib/images/tips/bonus.png', {
		eager: true,
		query: { enhanced: true }
	});

	// Get the image for this tip
	$: paddedId = String(tipId).padStart(2, '0');
	$: imageModule = tipId === 51
		? bonusImage['/src/lib/images/tips/bonus.png']
		: tipImages[`/src/lib/images/tips/tip-${paddedId}.png`];
</script>

{#if imageModule}
	<enhanced:img
		src={imageModule.default}
		{alt}
		class={className}
		loading={priority ? 'eager' : 'lazy'}
		fetchpriority={priority ? 'high' : 'auto'}
	/>
{/if}
