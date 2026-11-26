<script>
  import PageHeader from '../lib/PageHeader.svelte';
  import CtaBand from '../lib/CtaBand.svelte';
  import Faq from '../lib/Faq.svelte';
  import Seo from '../lib/Seo.svelte';
  import { breadcrumbs, faqPage, organization, webApplication, webPage, website } from '../lib/schema.js';
  import { text, link } from '../content/faq.js';
  import { LINKS, PRICE } from '../content/site.js';

  /** @type {{ meta: import('./meta.js').PageMeta }} */
  let { meta } = $props();

  const included = [
    'Unlimited weekly programs and edits',
    'A printable QR code for your chapel',
    'A private link members can open in any phone browser',
    'Hymns, prayers, speakers, musical numbers, announcements, and ward contacts',
    'Invite other ward leaders to help edit',
    'Free viewing for every member and visitor, with no login'
  ];

  /** @type {import('../content/faq.js').FaqItem[]} */
  const pricingFaq = [
    {
      question: 'Is there a free trial?',
      answer: [[text(`Yes. Every ward gets a ${PRICE.trialDays}-day free trial with no credit card required. If you decide not to continue, you don't need to cancel anything.`)]]
    },
    {
      question: 'Do members have to pay to see the program?',
      answer: [[text('No. Viewing is always free. Members and visitors scan the QR code or open the link in their browser, with no account, login, or app.')]]
    },
    {
      question: 'Is the price per editor or per ward?',
      answer: [[text(`Per ward. One subscription at ${PRICE.display} per ${PRICE.period} covers the ward, and the person who creates the account can invite other leaders to help edit at no extra cost.`)]]
    },
    {
      question: 'Who usually pays for it?',
      answer: [[text('Often a single member sponsors it for the ward, or a member of the bishopric or ward council covers it. The person who signs up manages billing and can invite the ward clerk, executive secretary, or others to edit.')]]
    },
    {
      question: 'How do I start?',
      answer: [[text('Create an account on the '), link(LINKS.signUp, 'sign-up page'), text('. Setup usually takes 3 to 5 minutes. You can also '), link(LINKS.editorDemo, 'try the editor demo'), text(' first.')]]
    }
  ];
</script>

<Seo
  title={meta.title}
  description={meta.description}
  path={meta.path}
  schema={[organization, website, webApplication, webPage(meta), breadcrumbs([{ name: 'Home', path: '/' }, { name: meta.crumb, path: meta.path }]), faqPage(pricingFaq)]}
/>

<PageHeader
  title="Simple pricing for your whole ward"
  intro={`Ward Program costs ${PRICE.display} per ${PRICE.period} per ward for editing and publishing, after a ${PRICE.trialDays}-day free trial with no credit card required. Members view the program for free.`}
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
      <p class="m-0 text-sm text-muted">Per ward, not per person. {PRICE.trialDays}-day free trial, no credit card required.</p>
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

<CtaBand location="pricing_cta" heading="Try it free for 30 days" />
