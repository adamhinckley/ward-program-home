<script>
  import PageHeader from '../lib/PageHeader.svelte';
  import CtaBand from '../lib/CtaBand.svelte';
  import Faq from '../lib/Faq.svelte';
  import Seo from '../lib/Seo.svelte';
  import { crumbsFor, organization, webApplication, webPage, website } from '../lib/schema.js';
  import { pricingFaq } from '../content/faq.js';
  import { LINKS, PRICE } from '../content/site.js';

  /** @type {{ meta: import('./meta.js').PageMeta }} */
  let { meta } = $props();

  const included = [
    'Unlimited weekly programs and edits',
    'A printable QR code for your chapel',
    'A private link members can open in any phone browser',
    'Drag-and-drop sections for callings, hymns, musical numbers, and images',
    'Announcements and ward contacts pages',
    'Invite other ward leaders to help edit',
    'Members and visitors view for free, with no login'
  ];

</script>

<Seo
  title={meta.title}
  description={meta.description}
  path={meta.path}
  schema={[organization, website, webApplication, webPage(meta, { faq: pricingFaq }), crumbsFor(meta)]}
/>

<PageHeader
  title="Simple pricing for your whole ward"
  intro={`Ward Program costs ${PRICE.display} per ${PRICE.period} per ward, after a ${PRICE.trialDays}-day free trial with no credit card required. One subscription covers every editor, and members never pay.`}
  crumb={meta.crumb}
  updated={meta.updated}
/>

<section class="px-4 py-14 md:px-8 md:py-20">
  <div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
    <div class="rounded-2xl border border-navy-strong/40 bg-white p-8 shadow-sm ring-1 ring-navy-strong/15">
      <h2 class="m-0 text-xl font-semibold text-ink">Ward subscription</h2>
      <p class="mt-4 mb-1 flex items-baseline gap-2">
        <span class="text-5xl font-bold tracking-tight text-ink">{PRICE.display}</span>
        <span class="text-lg text-muted">per {PRICE.period}</span>
      </p>
      <p class="m-0 text-sm text-muted">Per ward, not per person. {PRICE.trialDays}-day free trial, no credit card required. The subscription keeps your program online.</p>
      <ul class="mt-6 mb-8 space-y-3 p-0">
        {#each included as item (item)}
          <li class="flex list-none items-start gap-3 text-ink-soft">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 shrink-0 text-brass-ink"><path d="M20 6 9 17l-5-5"/></svg>
            {item}
          </li>
        {/each}
      </ul>
      <a href={LINKS.signUp} data-cta="start_free_trial" data-cta-location="pricing_card" class="inline-flex w-full items-center justify-center rounded-lg border-2 border-navy-strong bg-navy-strong px-8 py-3.5 text-base font-medium tracking-wide text-white no-underline shadow-sm transition-all hover:border-navy hover:bg-navy">Start Free Trial</a>
    </div>
    <div class="article">
      <h2 class="mt-0!">Why it isn't free</h2>
      <p>Free bulletin tools are funded somehow. Ward Program is paid for directly by the wards that use it, so it has no ads, never sells data, and has no reason to put your ward in a public directory to attract traffic.</p>
      <p>The cost is small enough that one member, the bishopric, or the ward council can cover it, and only one subscription is needed no matter how many people help edit.</p>
      <p><a href="/private-ward-program">Read how Ward Program keeps your program private</a>.</p>
    </div>
  </div>
</section>

<section class="bg-page px-4 py-14 md:px-8 md:py-20">
  <div class="mx-auto max-w-3xl">
    <h2 class="mb-8 text-center text-3xl font-bold tracking-tight text-ink">Pricing questions</h2>
    <Faq items={pricingFaq} />
  </div>
</section>

<CtaBand location="pricing_cta" heading={`Try it free for ${PRICE.trialDays} days`} />
