<script>
  export let tipId;
  export let alt = "";
  export let className = "";
  export let priority = false;

  $: paddedId = String(tipId).padStart(2, "0");
  $: src = tipId === 51 ? "/images/tips/bonus.webp" : `/images/tips/tip-${paddedId}.webp`;
</script>

<img {src} {alt} class={className} loading={priority ? "eager" : "lazy"} fetchpriority={priority ? "high" : "auto"} />
