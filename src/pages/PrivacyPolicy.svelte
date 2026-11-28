<script>
  import PageHeader from '../lib/PageHeader.svelte';
  import Seo from '../lib/Seo.svelte';
  import { crumbsFor, organization, webPage, website } from '../lib/schema.js';
  import { BRAND, LEGAL } from '../content/site.js';

  /** @type {{ meta: import('./meta.js').PageMeta }} */
  let { meta } = $props();

  const effective = new Date(`${LEGAL.effective}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  });
</script>

<Seo
  title={meta.title}
  description={meta.description}
  path={meta.path}
  schema={[organization, website, webPage(meta, { aboutApp: false }), crumbsFor(meta)]}
/>

<PageHeader
  title="Privacy Policy"
  intro={`How ${LEGAL.entity} collects, uses, shares, and protects information through ${BRAND}.`}
  crumb={meta.crumb}
  updated={LEGAL.effective}
  dateLabel="Effective"
/>

<article class="article mx-auto box-content max-w-3xl px-4 py-12 md:px-8 md:py-16">
  <div class="rounded-xl border border-line bg-panel px-6 py-5">
    <h2 class="mt-0! mb-3! text-xl! md:text-2xl!">The short version</h2>
    <ul class="my-0!">
      <li>We collect only what's needed to run {BRAND}: editors' email addresses, the program content your ward enters, billing status from Stripe, and messages you send us.</li>
      <li>We don't sell personal information, show ads, or use advertising or analytics cookies.</li>
      <li>Program pages aren't listed in any directory or search engine, but anyone with the link or QR code can view them, so only publish what you'd print on a paper program.</li>
      <li>You can delete your ward's data at any time, and we delete inactive wards' data after {LEGAL.inactiveRetentionMonths} months.</li>
    </ul>
  </div>

  <h2>1. Who we are</h2>
  <p>{BRAND} is operated by {LEGAL.entity}, an {LEGAL.state} limited liability company ("we", "us"). This policy covers the website at www.wardprogram.com and the app at app.wardprogram.com (together, the "Service"). {BRAND} is not affiliated with or endorsed by The Church of Jesus Christ of Latter-day Saints.</p>
  <p>Questions or requests about this policy: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.</p>
  <p>Ward leaders decide what goes into their ward's program. For that program content, we act on the ward's behalf and process it only to provide the Service. For editor accounts, billing, support, and usage measurement, we decide how information is used, as described below.</p>

  <h2>2. Information we collect</h2>
  <h3>Editor accounts</h3>
  <p>When you create an account, we collect your email address and password. Passwords are stored in hashed form by our authentication provider; we can't see them. We also keep which ward you belong to, your role (owner or editor), and when you signed in.</p>

  <h3>Program content</h3>
  <p>Editors enter the content of their ward's program, which can include the ward's name, meeting dates, the names of people with callings or assignments (such as presiding, conducting, speakers, people giving prayers, and musical performers), hymns, announcements, ward contacts (names, phone numbers, and any other details editors add), images, and links. Programs sometimes name children, for example in a Primary program or a baby blessing. Editors are responsible for having permission to publish this information.</p>

  <h3>Invitations</h3>
  <p>When an editor invites someone to help, we store the invited email address, who sent the invitation, and when it was sent, accepted, or canceled.</p>

  <h3>Billing</h3>
  <p>Payments are handled by Stripe. We never receive or store full card numbers. We keep the Stripe customer and subscription identifiers for your ward, your subscription status, and trial and billing dates. We also keep the billing notifications Stripe sends us, which can include the payer's name and email address.</p>

  <h3>Messages you send us</h3>
  <p>If you contact us through the app or by email, we keep your reply-to email address, your ward, the topic, and your message.</p>

  <h3>Technical and usage information</h3>
  <p>Our hosting and database providers automatically record technical information such as IP address, browser type, pages requested, and timestamps, which we use to operate and secure the Service.</p>
  <p>We measure visits to the website, the editor, and ward program pages with Vercel Web Analytics, which doesn't use cookies, doesn't identify individual visitors, and doesn't track you across other websites. In our database we keep only weekly totals for each ward: how many times its program was viewed, roughly how many devices viewed it, and how many times its editor was opened.</p>

  <h3>People who view a program</h3>
  <p>Members and visitors don't need an account to view a program, and we don't ask them for any information. Their visits are counted in the weekly totals described above, without identifying anyone, and appear in the technical logs.</p>

  <h2>3. Cookies and similar technologies</h2>
  <p>The app uses cookies only to keep editors signed in. Your browser's local storage remembers display preferences such as light or dark mode. We don't use advertising cookies or analytics cookies, so there is nothing to opt out of.</p>

  <h2>4. How we use information</h2>
  <ul>
    <li>To provide the Service: store and display your program, run the editor, and let you invite other editors.</li>
    <li>To send service emails: sign-in links, password resets, invitations, billing notices, and replies to your messages. We don't send marketing email.</li>
    <li>To manage your subscription with Stripe.</li>
    <li>To keep the Service secure, prevent abuse, and fix problems.</li>
    <li>To understand, in aggregate, how the website, editor, and program pages are used so we can improve them.</li>
    <li>To comply with law and enforce our <a href="/terms">Terms of Service</a>.</li>
  </ul>

  <h2>5. Who can see a ward's program</h2>
  <p>Each program lives at an address built from a long random ID. It isn't listed in any directory on {BRAND}, and program pages tell search engines not to index them. Programs are not password-protected: anyone who has the link or scans the QR code can view them, the same way anyone in the chapel can pick up a paper program. Your ward decides who receives the link. Editors of your ward can see and change your ward's program, and the ward's owner can see the list of editors.</p>

  <h2>6. How we share information</h2>
  <p>We don't sell personal information, and we don't share it for targeted advertising. We share it only:</p>
  <ul>
    <li><strong>With service providers</strong> that run parts of the Service for us, under contracts that limit their use of it: Supabase (database and sign-in), Vercel (hosting and cookieless analytics), Stripe (payments), and Resend (email delivery).</li>
    <li><strong>When required by law</strong>, such as a valid subpoena or court order, or to protect the rights, safety, or property of our users or others.</li>
    <li><strong>In a business transfer</strong>, such as a merger or sale of the Service, in which case this policy continues to apply to your information and we'll tell you before it's covered by a different policy.</li>
  </ul>

  <h2>7. How long we keep information</h2>
  <ul>
    <li><strong>Editor accounts:</strong> while the account is active. When an owner removes an editor, that editor's account is deleted.</li>
    <li><strong>Ward program data:</strong> while the ward's trial or subscription is active. If a ward cancels or its subscription lapses, we keep its data for {LEGAL.inactiveRetentionMonths} months so it can be restored, then delete it. An owner can delete the ward sooner at any time.</li>
    <li><strong>Billing records:</strong> as long as needed for tax and accounting obligations. Stripe keeps its own records under its privacy policy.</li>
    <li><strong>Weekly usage totals:</strong> as long as the ward's program data, and deleted with it. Vercel keeps its own aggregate analytics data for a limited time under its retention policy.</li>
    <li><strong>Messages you send us:</strong> up to {LEGAL.supportRetentionMonths} months.</li>
    <li><strong>Backups:</strong> deleted data can remain in encrypted backups for up to {LEGAL.backupDays} days before it is overwritten.</li>
  </ul>

  <h2>8. Your choices and rights</h2>
  <p>You can ask to access, correct, export, or delete your personal information. Much of this you can do yourself: editors can change program content at any time, a ward's owner can remove editors, and an owner who is the ward's only remaining editor can delete the ward and its data. For anything else, email <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>. We'll respond within {LEGAL.responseDays} days and may need to confirm your identity first.</p>
  <p>If you're named in a ward's program but aren't an editor, please ask your ward's leaders to change it first. If that doesn't resolve it, contact us and we'll help.</p>
  <p><strong>United States:</strong> depending on your state, you may have the right to know what personal information we hold about you, to correct or delete it, and to not be treated differently for using these rights. We don't sell or share personal information as those laws define it.</p>
  <p><strong>European Economic Area, United Kingdom, and Switzerland:</strong> we process account and billing information to perform our contract with you; technical, security, and aggregate usage information under our legitimate interest in running, securing, and improving the Service and showing wards how often their programs are viewed; and records we must keep under legal obligations. You also have the right to object to or restrict processing, to data portability, and to complain to your local data protection authority. Our service providers store data primarily in the United States, and transfers rely on safeguards such as the European Commission's Standard Contractual Clauses.</p>

  <h2>9. Security</h2>
  <p>We encrypt all traffic with HTTPS, restrict database access so each ward's editors can reach only their own ward, store passwords and invitation codes in hashed form, and limit administrative access. No system is perfectly secure, but we work to protect your information and will notify affected users of a breach as required by law.</p>

  <h2>10. Children</h2>
  <p>Editor accounts are for people {LEGAL.minAge} and older, and the Service isn't directed to children. Programs may include children's names entered by ward leaders; we handle that content only to display it for the ward. If you believe a child under 13 has given us personal information directly, contact us and we'll delete it.</p>

  <h2>11. Changes to this policy</h2>
  <p>We'll post any changes on this page and update the effective date. If a change is material, we'll also email ward owners before it takes effect.</p>

  <h2>12. Contact</h2>
  <p>{LEGAL.entity}<br />Email: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></p>
  <p class="text-sm! text-muted">Effective {effective}.</p>
</article>
