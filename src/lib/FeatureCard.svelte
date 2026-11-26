<script>
  let {
    title,
    body,
    icon
  } = $props();
</script>

<div class="group flex h-full flex-1 flex-col rounded-xl border border-line bg-white px-6 py-8 text-left shadow-sm transition-all duration-200 hover:border-brass hover:shadow-md">
  {#if icon}
    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-brass-ink transition-colors group-hover:bg-accent-strong">
      {@render icon()}
    </div>
  {/if}
  <h3 class="mb-3 text-lg font-semibold leading-snug tracking-tight text-ink md:text-xl">{title}</h3>
  <p class="m-0 text-sm leading-relaxed text-muted md:text-base">{body}</p>
</div>
