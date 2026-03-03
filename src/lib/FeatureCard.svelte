<script>
  let {
    title,
    body
  } = $props();
</script>

<div class="flex h-full flex-1 flex-col rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1">
  <h2 class="mb-4 text-2xl font-normal tracking-[0.02em] text-slate-900 md:text-[1.75rem] lg:text-2xl">{title}</h2>
  <p class="mx-auto m-0 max-w-150 text-base leading-relaxed text-slate-600 md:text-lg">{body}</p>
</div>
