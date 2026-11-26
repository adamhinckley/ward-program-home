<script>
  import PageHeader from '../lib/PageHeader.svelte';
  import CtaBand from '../lib/CtaBand.svelte';
  import Faq from '../lib/Faq.svelte';
  import Seo from '../lib/Seo.svelte';
  import { breadcrumbs, faqPage, organization, webPage, website } from '../lib/schema.js';
  import { text } from '../content/faq.js';

  /** @type {{ meta: import('./meta.js').PageMeta }} */
  let { meta } = $props();

  const handbookUrl = 'https://www.churchofjesuschrist.org/study/manual/general-handbook/29-meetings-in-the-church?lang=eng';

  const order = [
    ['Prelude music', 'Played while members arrive and sit reverently.'],
    ['Welcome and recognition', 'The person conducting welcomes everyone and acknowledges who is presiding and any visiting leaders.'],
    ['Announcements', 'Brief ward announcements, if any.'],
    ['Opening hymn and invocation', 'A congregational hymn followed by the opening prayer.'],
    ['Ward and stake business', 'Releases and sustainings of callings, and other business such as welcoming new members or recognizing priesthood ordinations.'],
    ['Sacrament hymn and administration of the sacrament', 'The central part of the meeting. Nothing else is scheduled during it.'],
    ['Messages and music', 'Talks by assigned speakers, often with a congregational rest hymn or a musical number between them.'],
    ['Closing hymn and benediction', 'A final hymn and the closing prayer.'],
    ['Postlude music', 'Played as members leave.']
  ];

  /** @type {import('../content/faq.js').FaqItem[]} */
  const guideFaq = [
    {
      question: 'Who usually prepares the sacrament meeting program?',
      answer: [[text('It varies by ward. The bishopric plans the meeting, and the program is commonly prepared by the ward executive secretary, a ward clerk, or a member called to produce the program, using details the bishopric provides.')]]
    },
    {
      question: 'What is the order of a fast and testimony meeting program?',
      answer: [[text('On fast Sunday the order is the same through the sacrament. After the sacrament, the bishopric member conducting usually bears a brief testimony and then invites members to share theirs, in place of assigned speakers. The program then lists the closing hymn and benediction as usual.')]]
    },
    {
      question: 'Should the program include phone numbers?',
      answer: [[text("Many wards list bishopric and clerk contact numbers. Only include them if those leaders are comfortable sharing them with anyone who might see the program, and be especially careful if your program tool lists your ward in a public directory.")]]
    },
    {
      question: 'Can I make a sacrament meeting program without printing it?',
      answer: [[text('Yes. A digital program can be opened on phones by scanning a QR code displayed in the chapel. Many wards keep a small number of printed copies for members who prefer paper.')]]
    }
  ];
</script>

<Seo
  title={meta.title}
  description={meta.description}
  path={meta.path}
  schema={[organization, website, { ...webPage({ ...meta, type: 'Article' }), headline: meta.title, dateModified: meta.updated, author: { '@id': organization['@id'] } }, breadcrumbs([{ name: 'Home', path: '/' }, { name: meta.crumb, path: meta.path }]), faqPage(guideFaq)]}
/>

<PageHeader
  title="How to make a sacrament meeting program"
  intro="A practical guide for ward clerks, executive secretaries, and anyone asked to put together the weekly program: the usual order of the meeting, what to include, and how to share it with your ward."
  crumb={meta.crumb}
  updated={meta.updated}
/>

<article class="article mx-auto w-full max-w-3xl px-4 py-12 md:px-8 md:py-16">
  <h2 class="mt-0!">The usual order of sacrament meeting</h2>
  <p>The bishopric plans sacrament meeting and decides its details. Most wards follow this order, which reflects the guidance in <a href={handbookUrl} rel="noopener">chapter 29 of the General Handbook</a>. Always defer to your bishopric and the current handbook.</p>
  <ol>
    {#each order as [step, detail] (step)}
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

  <h2>Frequently asked questions</h2>
</article>

<section class="mx-auto -mt-6 w-full max-w-3xl px-4 pb-16 md:px-8">
  <Faq items={guideFaq} />
</section>

<CtaBand location="guide_cta" heading="Build this week's program in 5 minutes" />
