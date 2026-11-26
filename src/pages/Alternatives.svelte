<script>
  import PageHeader from '../lib/PageHeader.svelte';
  import ComparisonTable from '../lib/ComparisonTable.svelte';
  import CtaBand from '../lib/CtaBand.svelte';
  import Seo from '../lib/Seo.svelte';
  import { crumbsFor, organization, webApplication, webPage, website } from '../lib/schema.js';
  import { PRICE } from '../content/site.js';

  /** @type {{ meta: import('./meta.js').PageMeta }} */
  let { meta } = $props();
</script>

<Seo
  title={meta.title}
  description={meta.description}
  path={meta.path}
  schema={[organization, website, webApplication, webPage(meta), crumbsFor(meta)]}
/>

<PageHeader
  title="WardBullet and Ward Bulletin App alternatives"
  intro="If you're choosing a digital sacrament meeting program, the biggest difference between the options is whether your ward's program can be found by strangers. Here's how the common choices compare."
  crumb={meta.crumb}
  updated={meta.updated}
/>

<section class="px-4 py-12 md:px-8 md:py-16">
  <div class="mx-auto max-w-5xl">
    <h2 class="mb-6 text-2xl font-bold tracking-tight text-ink md:text-3xl">At a glance</h2>
    <ComparisonTable caption="WardBullet, Ward Bulletin App, Canva, Google Docs, and Ward Program compared" />
    <p class="mt-4 text-sm text-muted">Details about other products come from their own public websites as of the date above and may have changed since. Ward Program is not affiliated with any of them.</p>
  </div>
</section>

<article class="article mx-auto box-content max-w-3xl px-4 pb-16 md:px-8">
  <h2 class="mt-0!">WardBullet</h2>
  <p><a href="https://www.wardbullet.com/" rel="noopener nofollow">WardBullet</a> is a free tool for digital sacrament meeting programs. Members view programs in any browser without an app or login, and you can share by email, Facebook, or QR code. It has templates for common meetings and lets you make changes during the meeting.</p>
  <p>The trade-off is visibility: WardBullet has a public "Find Ward" search, so anyone can look up a ward and open its program. WardBullet does let you limit ward business (such as sustainings) to users you approve.</p>
  <p><strong>Choose Ward Program instead if</strong> you want the same no-app, scan-and-view experience but don't want your ward's program in a searchable directory.</p>

  <h2>Ward Bulletin App</h2>
  <p><a href="https://wardbulletin.app/home" rel="noopener nofollow">Ward Bulletin App</a> is a free, browser-based bulletin service for wards and stakes. Its editor can create a QR code for your building. Like WardBullet, it includes a public "Find Bulletin" search where anyone can look up a bulletin.</p>
  <p><strong>Choose Ward Program instead if</strong> you want a program that isn't listed publicly.</p>

  <h2>Canva</h2>
  <p>Canva is a general design tool. It can produce a beautiful printed program and can add a QR code, but it isn't built for weekly programs or for reading on a phone: someone redesigns the layout each week, and exported PDFs have to be re-shared every Sunday. Privacy depends on how you share the design.</p>

  <h2>Google Docs</h2>
  <p>A shared Google Doc is free and familiar. Privacy depends on your sharing settings, and "anyone with the link" documents can end up indexed or forwarded. Docs aren't designed for reading on phones and don't come with a chapel QR code.</p>

  <h2>Ward Program</h2>
  <p>Ward Program is built only for sacrament meeting programs. One editor (or several) updates the program in the browser, members scan a QR code in the chapel or tap a private link, and the page always shows the current week. There is no public directory, program pages are kept out of search engines, and members need no app or login.</p>
  <p>It costs {PRICE.display} per {PRICE.period} per ward after a {PRICE.trialDays}-day free trial, with no credit card required to start. One subscription covers every editor, and members never pay. See <a href="/pricing">pricing</a> and <a href="/private-ward-program">how privacy works</a>.</p>

  <h2>Which should you choose?</h2>
  <ul>
    <li><strong>You want free and don't mind a public listing:</strong> WardBullet or Ward Bulletin App.</li>
    <li><strong>You want a one-off printed program:</strong> Canva or Google Docs.</li>
    <li><strong>You want a private, phone-friendly program with a QR code that updates every week:</strong> Ward Program.</li>
  </ul>
</article>

<CtaBand location="alternatives_cta" heading={`Try the private option free for ${PRICE.trialDays} days`} />
