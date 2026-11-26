<script>
  /** @type {{ title: string, intro: string, crumb: string, updated?: string }} */
  let { title, intro, crumb, updated } = $props();
</script>

<section class="border-b border-line px-4 pb-12 pt-10 md:px-8 md:pb-16 md:pt-14">
  <div class="mx-auto max-w-3xl">
    <nav aria-label="Breadcrumb" class="mb-6 text-sm text-muted">
      <ol class="m-0 flex list-none flex-wrap items-center gap-2 p-0">
        <li><a href="/" class="text-muted underline decoration-faint underline-offset-2 hover:text-link">Home</a></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" class="text-ink-soft">{crumb}</li>
      </ol>
    </nav>
    <h1 class="mb-5 text-3xl font-bold leading-tight tracking-tight text-ink md:text-5xl">{title}</h1>
    <p class="m-0 text-lg leading-relaxed text-muted md:text-xl">{intro}</p>
    {#if updated}
      <p class="mt-4 mb-0 text-sm text-muted">Last updated <time datetime={updated}>{new Date(`${updated}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time></p>
    {/if}
  </div>
</section>
