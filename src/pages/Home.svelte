<script>
  import OutlineButton from '../lib/OutlineButton.svelte';
  import FeatureCard from '../lib/FeatureCard.svelte';
  import ComparisonTable from '../lib/ComparisonTable.svelte';
  import Faq from '../lib/Faq.svelte';
  import CtaBand from '../lib/CtaBand.svelte';
  import Seo from '../lib/Seo.svelte';
  import { organization, webApplication, webPage, website } from '../lib/schema.js';
  import { homeFaq } from '../content/faq.js';
  import { LINKS, PRICE } from '../content/site.js';

  /** @type {{ meta: import('./meta.js').PageMeta }} */
  let { meta } = $props();

  const programFeatures = [
    'Your ward name, the date, and an optional image',
    'Callings paired with names: presiding, conducting, prayers, speakers, and more',
    'Hymns with numbers, titles, and links, plus musical numbers with performers',
    'Ward announcements',
    'Ward contacts for the bishopric, clerks, and organization leaders',
    'Drag-and-drop sections you can rearrange for fast Sundays and special meetings',
    'Invite other ward leaders to help edit'
  ];
</script>

<Seo
  title={meta.title}
  description={meta.description}
  path={meta.path}
  schema={[organization, website, webApplication, webPage(meta, { faq: homeFaq })]}
/>

<!-- ── Hero ── -->
<section class="px-4 pb-16 pt-16 md:px-8 md:pb-20 md:pt-20 lg:pb-24 lg:pt-24">
  <div class="mx-auto max-w-3xl text-center">
    <p class="mb-6 inline-flex items-center gap-2 rounded-full border border-warm-line bg-warm px-4 py-1.5 text-sm font-medium text-ink">
      <svg aria-hidden="true" class="text-brass-ink" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
      Trusted by 50+ wards
    </p>
    <h1 class="mb-6 text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">The private sacrament meeting program your ward deserves</h1>
    <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">Ward Program lets you create, share, and manage your ward's weekly sacrament meeting program with complete privacy. Built for wards and branches of The Church of Jesus Christ of Latter-day Saints. No public listings. No app download required.</p>
    <div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
      <OutlineButton
        href={LINKS.signUp}
        text="Start Free Trial - No Card Required"
        variant="primary"
        size="lg"
        cta="start_free_trial"
        ctaLocation="hero"
      />
      <OutlineButton
        href={LINKS.programDemo}
        text="View Program Demo"
        variant="outline"
        size="lg"
        cta="view_program_demo"
        ctaLocation="hero"
      />
    </div>
    <p class="mt-4 text-sm font-medium text-link">No credit card required for your free {PRICE.trialDays}-day trial.</p>
  </div>
</section>

<!-- ── Trust Strip ── -->
<section aria-label="Highlights" class="border-y border-line bg-page px-4 py-5">
  <ul class="mx-auto m-0 flex max-w-3xl list-none flex-wrap items-center justify-center gap-x-8 gap-y-3 p-0 text-sm font-medium text-muted">
    <li class="flex items-center gap-2">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brass-ink"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      Private by default
    </li>
    <li class="flex items-center gap-2">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brass-ink"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
      Scan and view - no download
    </li>
    <li class="flex items-center gap-2">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brass-ink"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      Ready in 3 to 5 minutes
    </li>
  </ul>
</section>

<!-- ── Features ── -->
<section id="features" aria-labelledby="features-heading" class="scroll-mt-20 px-4 py-16 md:px-8 md:py-20 lg:py-24">
  <div class="mx-auto max-w-6xl">
    <div class="mb-12 text-center">
      <h2 id="features-heading" class="mb-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Everything your ward needs</h2>
      <p class="mx-auto max-w-2xl text-base text-muted md:text-lg">Simple tools built specifically for sacrament meeting programs — nothing more, nothing less.</p>
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
      <FeatureCard
        title="Private and secure"
        body="Your congregation information is not publicly listed or searchable. Share access with your private link and QR code."
      >
        {#snippet icon()}
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
        {/snippet}
      </FeatureCard>
      <FeatureCard
        title="QR code sharing"
        body="Generate a custom QR code for your church building. Members scan and view — no account, no app download, no friction."
      >
        {#snippet icon()}
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><path d="M14 14h2v2h-2z"/><path d="M20 14h2v2h-2z"/><path d="M14 20h2v2h-2z"/><path d="M20 20h2v2h-2z"/><path d="M17 17h2v2h-2z"/></svg>
        {/snippet}
      </FeatureCard>
      <FeatureCard
        title="Works on any phone"
        body="Members get instant access in any mobile browser. They can save it to their home screen for each Sunday."
      >
        {#snippet icon()}
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
        {/snippet}
      </FeatureCard>
    </div>
    <div class="mx-auto mt-12 max-w-4xl rounded-xl border border-line bg-white p-6 md:p-8">
      <h3 class="m-0 mb-4 text-lg font-semibold text-ink">What goes in your program</h3>
      <ul class="m-0 grid list-none grid-cols-1 gap-x-8 gap-y-3 p-0 text-ink-soft sm:grid-cols-2">
        {#each programFeatures as feature (feature)}
          <li class="flex items-start gap-3">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mt-1 shrink-0 text-brass-ink"><path d="M20 6 9 17l-5-5"/></svg>
            {feature}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- ── Comparison Table ── -->
<section id="compare" aria-labelledby="compare-heading" class="scroll-mt-20 bg-page px-4 py-16 md:px-8 md:py-20 lg:py-24">
  <div class="mx-auto max-w-5xl">
    <div class="mb-10 text-center">
      <h2 id="compare-heading" class="mb-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Compare your options</h2>
      <p class="mx-auto max-w-2xl text-base text-muted md:text-lg">See how Ward Program stacks up on privacy, features, and cost. <a href="/ward-bulletin-alternatives" class="font-medium text-link underline underline-offset-2 hover:text-navy-strong">Read the full comparison</a>.</p>
    </div>
    <ComparisonTable />
  </div>
</section>

<!-- ── How It Works ── -->
<section id="how-it-works" aria-labelledby="how-it-works-heading" class="scroll-mt-20 px-4 py-16 md:px-8 md:py-20 lg:py-24">
  <div class="mx-auto max-w-4xl">
    <div class="mb-12 text-center">
      <h2 id="how-it-works-heading" class="mb-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Create your first program in 3 to 5 minutes</h2>
      <p class="mx-auto max-w-2xl text-base text-muted md:text-lg">Three simple steps to a digital sacrament meeting program.</p>
    </div>
    <ol class="m-0 grid list-none grid-cols-1 gap-10 p-0 md:grid-cols-3 md:gap-8">
      <li class="flex flex-col items-center text-center">
        <div aria-hidden="true" class="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">1</div>
        <h3 class="mb-2 text-lg font-semibold text-ink">Create your program</h3>
        <p class="m-0 text-sm leading-relaxed text-muted">Log in to the editor and add your sacrament meeting details — speakers, hymns, announcements, and more.</p>
      </li>
      <li class="flex flex-col items-center text-center">
        <div aria-hidden="true" class="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">2</div>
        <h3 class="mb-2 text-lg font-semibold text-ink">Share with your ward</h3>
        <p class="m-0 text-sm leading-relaxed text-muted">Print the generated QR code and display it in your church building, or share the private link directly.</p>
      </li>
      <li class="flex flex-col items-center text-center">
        <div aria-hidden="true" class="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">3</div>
        <h3 class="mb-2 text-lg font-semibold text-ink">Members view on their phones</h3>
        <p class="m-0 text-sm leading-relaxed text-muted">Members scan the QR code — no app download needed. Save to home screen for instant access each week.</p>
      </li>
    </ol>
    <p class="mt-10 text-center text-base text-muted">New to putting the program together? Read <a href="/how-to-make-a-sacrament-meeting-program" class="font-medium text-link underline underline-offset-2 hover:text-navy-strong">how to make a sacrament meeting program</a>.</p>
  </div>
</section>

<CtaBand location="bottom_cta" />

<!-- ── FAQ ── -->
<section id="faq" aria-labelledby="faq-heading" class="scroll-mt-20 px-4 py-16 md:px-8 md:py-20 lg:py-24">
  <div class="mx-auto max-w-3xl">
    <div class="mb-10 text-center">
      <h2 id="faq-heading" class="mb-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Frequently asked questions</h2>
      <p class="mx-auto max-w-xl text-base text-muted md:text-lg">Everything you need to know about Ward Program.</p>
    </div>
    <Faq items={homeFaq} />
  </div>
</section>
