<script>
  let {
    title,
    body,
    icon
  } = $props();
</script>

<div class="group flex h-full flex-1 flex-col rounded-xl border border-slate-200 bg-white px-6 py-8 text-left shadow-sm transition-all duration-200 hover:border-teal-200 hover:shadow-md">
  {#if icon}
    <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-100">
      {@render icon()}
    </div>
  {/if}
  <h3 class="mb-3 text-lg font-semibold leading-snug tracking-tight text-blue-950 md:text-xl">{title}</h3>
  <p class="m-0 text-sm leading-relaxed text-slate-600 md:text-base">{body}</p>
</div>
