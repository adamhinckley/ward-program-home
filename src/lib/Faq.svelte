<script>
  /** @type {{ items: import('../content/faq.js').FaqItem[] }} */
  let { items } = $props();
</script>

<div class="space-y-3">
  {#each items as item (item.question)}
    <details class="group rounded-xl border border-line bg-white transition-shadow hover:shadow-sm" open={item.open}>
      <summary class="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5">
        <h3 class="m-0 text-base font-semibold text-ink md:text-lg">{item.question}</h3>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-chevron shrink-0 text-faint"><path d="m6 9 6 6 6-6"/></svg>
      </summary>
      <div class="space-y-3 px-5 pb-5 md:px-6 md:pb-6">
        {#each item.answer as paragraph, p (p)}
          <p class="m-0 text-base leading-relaxed text-muted">
            {#each paragraph as fragment, f (f)}
              {#if fragment.type === 'strong'}
                <strong>{fragment.value}</strong>
              {:else if fragment.type === 'link'}
                <a href={fragment.href} class="font-medium text-link underline underline-offset-2 hover:text-navy-strong">{fragment.label}</a>
              {:else}
                {fragment.value}
              {/if}
            {/each}
          </p>
        {/each}
      </div>
    </details>
  {/each}
</div>
