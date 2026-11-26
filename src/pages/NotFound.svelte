<script>
  import Seo from '../lib/Seo.svelte';

  /** @type {{ meta: import('./meta.js').PageMeta }} */
  let { meta } = $props();
</script>

<Seo title={meta.title} description={meta.description} path={meta.path} noindex />

<section class="px-4 py-24 text-center md:px-8">
  <div class="mx-auto max-w-xl">
    <p class="m-0 text-sm font-semibold uppercase tracking-wider text-link">404</p>
    <h1 class="mt-3 mb-4 text-4xl font-bold tracking-tight text-ink">Page not found</h1>
    <p class="mb-8 text-lg text-muted">This page doesn't exist. If you were looking for your ward's program, open the link or QR code your ward shared.</p>
    <a href="/" class="inline-flex items-center justify-center rounded-lg border-2 border-navy-strong bg-navy-strong px-7 py-3 text-base font-medium text-white no-underline transition-all hover:bg-navy">Go to the home page</a>
  </div>
</section>
