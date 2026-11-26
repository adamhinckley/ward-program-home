<script>
  import PageHeader from '../lib/PageHeader.svelte';
  import CtaBand from '../lib/CtaBand.svelte';
  import Seo from '../lib/Seo.svelte';
  import { crumbsFor, organization, webApplication, webPage, website } from '../lib/schema.js';
  import { PRICE, PRIVACY_POINTS } from '../content/site.js';

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
  title="How Ward Program keeps your ward's program private"
  intro="A sacrament meeting program lists names: speakers, people giving prayers, people being sustained or released, and ward leaders. Ward Program is built so that list reaches your ward without being posted to the open internet."
  crumb={meta.crumb}
  updated={meta.updated}
/>

<article class="article mx-auto w-full max-w-3xl px-4 py-12 md:px-8 md:py-16">
  <h2 class="mt-0!">The short version</h2>
  <ul>
    {#each PRIVACY_POINTS.slice(0, 5) as [lead, detail] (lead)}
      <li><strong>{lead}.</strong> {detail}</li>
    {/each}
  </ul>

  <h2>Why public directories are a problem for wards</h2>
  <p>Some free bulletin tools include a public search where anyone can type a ward or city and open that ward's bulletin. That's convenient for visitors, but it also means a stranger can see who is speaking and praying, meeting times, announcements, and sometimes leaders' names and phone numbers, week after week.</p>
  <p>Ward Program takes the opposite approach: the people in your chapel get the program by scanning your QR code, and members you send the link to can open it from home. Nobody else is pointed to it.</p>

  <h2>What "private" does and doesn't mean</h2>
  <p>The program is meant to be easy for members and visitors to open without logging in, so anyone who has the link or scans the QR code can read it, just like anyone in the chapel could pick up a paper program. Ward Program keeps it from being listed, searched, or indexed. It doesn't put a password on it.</p>
  <p>That's why it's still worth being thoughtful about what you include. A few practical tips:</p>
  <ul>
    <li>List leaders' phone numbers only if they're comfortable sharing them with anyone who might see the program.</li>
    <li>Leave out sensitive details such as health updates, addresses, or anything you wouldn't print on a paper program.</li>
    <li>Share the link with your ward through ward channels rather than posting it on public social media.</li>
  </ul>

  <h2>Who runs Ward Program</h2>
  <p>Ward Program is made by <a href="https://pullclear.com" rel="noopener">Pull Clear Software</a>. It is paid for by the wards that use it, at {PRICE.display} per {PRICE.period} per ward, so it doesn't rely on ads or on attracting traffic to ward pages. It is not an official website or product of The Church of Jesus Christ of Latter-day Saints.</p>
  <p>See <a href="/pricing">pricing</a> or <a href="/ward-bulletin-alternatives">how Ward Program compares to other bulletin tools</a>.</p>
</article>

<CtaBand location="privacy_cta" heading="Keep your ward's program private" />
