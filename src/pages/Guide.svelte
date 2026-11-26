<script>
  import PageHeader from '../lib/PageHeader.svelte';
  import CtaBand from '../lib/CtaBand.svelte';
  import Faq from '../lib/Faq.svelte';
  import Seo from '../lib/Seo.svelte';
  import { article, crumbsFor, organization, webPage, website } from '../lib/schema.js';
  import { HANDBOOK_URL, guideFaq, meetingOrder } from '../content/guide.js';

  /** @type {{ meta: import('./meta.js').PageMeta }} */
  let { meta } = $props();

</script>

<Seo
  title={meta.title}
  description={meta.description}
  path={meta.path}
  ogType="article"
  schema={[organization, website, webPage(meta, { faq: guideFaq, aboutApp: false }), article(meta), crumbsFor(meta)]}
/>

<PageHeader
  title="How to make a sacrament meeting program"
  intro="A practical guide for ward clerks, executive secretaries, and anyone asked to put together the weekly program: the usual order of the meeting, what to include, and how to share it with your ward."
  crumb={meta.crumb}
  updated={meta.updated}
/>

<article class="article mx-auto box-content max-w-3xl px-4 py-12 md:px-8 md:py-16">
  <h2 class="mt-0!">The usual order of sacrament meeting</h2>
  <p>The bishopric plans sacrament meeting and decides its details. Most wards follow this order, which reflects the guidance in <a href={HANDBOOK_URL} rel="noopener">chapter 29 of the General Handbook</a>. Always defer to your bishopric and the current handbook.</p>
  <ol>
    {#each meetingOrder as [step, detail] (step)}
      <li><strong>{step}.</strong> {detail}</li>
    {/each}
  </ol>

  <h2>What to include in the program</h2>
  <p>A typical program fits on one screen or one folded sheet and includes:</p>
  <ul>
    <li><strong>Ward name and date.</strong></li>
    <li><strong>Presiding and conducting:</strong> the names of the presiding authority and the person conducting.</li>
    <li><strong>Music:</strong> the chorister and organist or pianist, plus each hymn's number and title (opening, sacrament, rest, and closing hymns) and any musical numbers.</li>
    <li><strong>Prayers:</strong> who will give the invocation and the benediction.</li>
    <li><strong>Speakers:</strong> in the order they will speak.</li>
    <li><strong>Announcements:</strong> upcoming activities, meetings, and service opportunities.</li>
    <li><strong>Ward contacts (optional):</strong> bishopric, clerks, and organization leaders.</li>
  </ul>
  <p>Ward business such as releases and sustainings is read from the pulpit and usually isn't printed.</p>

  <h2>Step by step, each week</h2>
  <ol>
    <li><strong>Get the details from the bishopric</strong> early in the week: who is presiding and conducting, speakers, prayers, and hymns.</li>
    <li><strong>Confirm the music</strong> with the ward music coordinator or chorister.</li>
    <li><strong>Collect announcements</strong> from organization leaders by a set deadline.</li>
    <li><strong>Build the program</strong> from last week's as a starting point, updating names, hymns, and the date.</li>
    <li><strong>Review it</strong> with a member of the bishopric before Sunday.</li>
    <li><strong>Publish or print it.</strong> For a digital program, the QR code in the chapel always opens the current week, so there's nothing to hand out.</li>
    <li><strong>Make last-minute changes</strong> if a speaker or prayer changes. A digital program updates for everyone as soon as you save.</li>
  </ol>

  <h2>Paper or digital?</h2>
  <p>Paper programs are familiar and work for everyone, but they take time to print and fold each week and can't change after they're printed. A digital program saves that work and can be updated right up to the meeting. Members open it by scanning a QR code posted in the chapel or foyer, and it works on any phone without an app.</p>
  <p>If you go digital, check whether the tool lists your ward in a public directory. Some free tools do, which means anyone can look up who is speaking and who leads your ward. <a href="/private-ward-program">Ward Program keeps programs private</a>, and you can <a href="/ward-bulletin-alternatives">compare it with WardBullet and Ward Bulletin App</a>.</p>

</article>

<section aria-labelledby="guide-faq-heading" class="mx-auto box-content max-w-3xl px-4 pb-16 md:px-8">
  <h2 id="guide-faq-heading" class="mt-0 mb-6 text-2xl font-bold tracking-tight text-ink md:text-3xl">Frequently asked questions</h2>
  <Faq items={guideFaq} />
</section>

<CtaBand location="guide_cta" heading="Build this week's program in 5 minutes" />
