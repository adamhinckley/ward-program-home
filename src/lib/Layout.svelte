<script>
  import { onMount } from 'svelte';
  import OutlineButton from './OutlineButton.svelte';
  import { BRAND, CREATOR, FOOTER_LINKS, LINKS, NAV_LINKS, PRICE } from '../content/site.js';
  import { injectSpeedInsights } from '@vercel/speed-insights';

  /** @type {{ children: import('svelte').Snippet }} */
  let { children } = $props();

  // Rendered at build time; enhance() refreshes [data-current-year] in the browser.
  const year = new Date().getFullYear();

  // Initialize Speed Insights
  onMount(() => {
    injectSpeedInsights({ framework: 'svelte' });
  });
</script>

<div class="min-h-screen bg-white">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-ink focus:shadow">Skip to content</a>

  <!-- ── Top Banner ── -->
  <div class="bg-navy text-white">
    <div class="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2.5 text-center text-sm tracking-wide">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 opacity-70"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      <p class="m-0 opacity-90">Privacy-first sacrament meeting programs — <strong class="font-semibold">{PRICE.display}/mo</strong> for your entire ward</p>
    </div>
  </div>

  <!-- ── Navigation ── -->
  <header class="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
    <nav aria-label="Main">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
      <a href="/" class="flex items-center gap-2.5 no-underline">
        <img src="/logo.svg" alt="" width="28" height="28" class="block h-7 w-7" />
        <span class="text-lg font-semibold tracking-tight text-ink">{BRAND}</span>
      </a>
      <div class="flex items-center gap-5">
        {#each NAV_LINKS as navLink (navLink.href)}
          <a href={navLink.href} class="hidden text-sm font-medium text-muted no-underline transition-colors hover:text-ink md:inline">{navLink.label}</a>
        {/each}
        <a href={LINKS.programDemo} data-cta="view_program_demo" data-cta-location="nav" class="hidden text-sm font-medium text-muted no-underline transition-colors hover:text-ink md:inline">View Demo</a>
        <OutlineButton
          href={LINKS.login}
          text="Admin Login"
          size="sm"
          cta="admin_login"
          ctaLocation="nav"
        />
      </div>
    </div>
    <!-- Phones: the same links in a second row, so every page is reachable without a menu script. -->
    <ul class="m-0 flex list-none justify-center gap-x-6 border-t border-line-soft px-4 text-sm md:hidden">
      {#each NAV_LINKS as navLink (navLink.href)}
        <li><a href={navLink.href} class="inline-block py-2.5 font-medium text-muted no-underline hover:text-ink">{navLink.label}</a></li>
      {/each}
      <li><a href={LINKS.programDemo} data-cta="view_program_demo" data-cta-location="nav_mobile" class="inline-block py-2.5 font-medium text-muted no-underline hover:text-ink">Demo</a></li>
    </ul>
    </nav>
  </header>

  <main id="main" class="flex w-full flex-col text-ink">
    {@render children()}
  </main>

  <!-- ── Footer ── -->
  <footer class="border-t border-line bg-page px-4 py-8 text-center text-sm text-muted">
    <nav aria-label="Footer" class="mx-auto mb-5 max-w-4xl">
      <ul class="m-0 flex list-none flex-wrap justify-center gap-x-5 gap-y-2 p-0">
        {#each FOOTER_LINKS as footerLink (footerLink.href)}
          <li><a href={footerLink.href} class="text-muted no-underline transition-colors hover:text-link hover:underline">{footerLink.label}</a></li>
        {/each}
      </ul>
    </nav>
    <p class="m-0">{BRAND}. All rights reserved. <a href={CREATOR.url} target="_blank" rel="noopener" class="text-muted underline decoration-faint underline-offset-2 transition-colors hover:text-link">&copy; <span data-current-year>{year}</span> {CREATOR.name}{' '}<span class="sr-only">(opens in a new tab)</span></a></p>
    <p class="m-0 mt-1">Not an official website of <span class="italic">The Church of Jesus Christ of Latter-day Saints</span>.</p>
  </footer>
</div>
