<script>
  let {
    href,
    rel = undefined,
    text
  } = $props();
</script>

<a
  {href}
  {rel}
  class="inline-block cursor-pointer rounded-xl border-2 border-indigo-500 bg-white px-8 py-3.5 text-base font-normal tracking-[0.05em] text-indigo-700 no-underline transition-colors duration-200 ease-in-out hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-800"
>
  {text}
</a>
