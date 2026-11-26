<script>
  import PageHeader from '../lib/PageHeader.svelte';
  import Seo from '../lib/Seo.svelte';
  import { crumbsFor, organization, webPage, website } from '../lib/schema.js';
  import { BRAND, LEGAL, PRICE } from '../content/site.js';

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
  title="Terms of Service"
  intro={`The agreement between you and ${LEGAL.entity} for using ${BRAND}.`}
  crumb={meta.crumb}
  updated={LEGAL.effective}
  dateLabel="Effective"
/>

<article class="article mx-auto box-content max-w-3xl px-4 py-12 md:px-8 md:py-16">
  <div class="rounded-xl border border-line bg-panel px-6 py-5">
    <h2 class="mt-0! mb-3! text-xl! md:text-2xl!">The short version</h2>
    <ul class="my-0!">
      <li>{BRAND} is {PRICE.display} per {PRICE.period} per ward after a {PRICE.trialDays}-day free trial. It renews monthly until you cancel.</li>
      <li>Cancel anytime; your ward keeps access until the end of the month you've paid for. We don't give refunds for partial months.</li>
      <li>Your ward's content belongs to your ward. Only publish what you have permission to share.</li>
      <li>These terms are governed by {LEGAL.state} law.</li>
    </ul>
  </div>

  <h2>1. Agreement</h2>
  <p>These Terms of Service ("Terms") are an agreement between you and {LEGAL.entity}, an {LEGAL.state} limited liability company ("we", "us"), for using {BRAND}, including the website at www.wardprogram.com and the app at app.wardprogram.com (the "Service"). By creating an account or using the Service, you agree to these Terms and to our <a href="/privacy-policy">Privacy Policy</a>. If you don't agree, don't use the Service.</p>
  <p>Members and visitors who only view a ward's program don't need an account. Sections 6, 7, and 9 through 12 apply to them too.</p>

  <h2>2. The Service</h2>
  <p>{BRAND} lets ward leaders create a weekly sacrament meeting program and share it through a link and QR code. {BRAND} is an independent product. It is not affiliated with, endorsed by, or an official service of The Church of Jesus Christ of Latter-day Saints, and you may not present it as one. We may improve, change, or discontinue features. If we discontinue the Service entirely, we'll give ward owners at least 30 days' notice by email and stop billing.</p>

  <h2>3. Accounts</h2>
  <ul>
    <li>You must be at least {LEGAL.minAge} years old to create an account.</li>
    <li>Give us an email address you control, keep your password secure, and tell us promptly at <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> if you think your account has been compromised. You're responsible for activity under your account.</li>
    <li>The person who creates a ward's account is its owner. The owner manages billing and can invite and remove other editors. Editors you invite must also follow these Terms.</li>
  </ul>

  <h2>4. Free trial, billing, and cancellation</h2>
  <ul>
    <li><strong>Free trial.</strong> Each new ward gets a {PRICE.trialDays}-day free trial. No payment method is required. If you don't subscribe before the trial ends, your ward's program goes offline until you do.</li>
    <li><strong>Price.</strong> After the trial, the Service costs {PRICE.display} per {PRICE.period} per ward, plus any applicable taxes. Payments are processed by Stripe, and you authorize us to charge your payment method each month.</li>
    <li><strong>Renewal.</strong> Subscriptions are billed monthly in advance and renew automatically until canceled.</li>
    <li><strong>Cancellation.</strong> You can cancel anytime from the billing settings in the app. Your ward keeps access until the end of the current paid month, and you won't be charged again.</li>
    <li><strong>Refunds.</strong> Payments are non-refundable, and we don't give refunds or credits for partial months, except where the law requires it.</li>
    <li><strong>Failed payments.</strong> If a payment fails, Stripe may retry it. Your ward's program stays available until the end of the current billing period; if payment still hasn't succeeded by then, the program goes offline until the payment method is updated.</li>
    <li><strong>Price changes.</strong> We'll email the ward's owner at least {LEGAL.priceNoticeDays} days before a price change takes effect. The new price applies from your next billing date after that notice period. If you don't agree, you can cancel before then.</li>
  </ul>

  <h2>5. Your content</h2>
  <p>"Your content" is everything your ward's editors enter into the Service, such as names, callings, hymns, announcements, contact details, images, and links. Your ward keeps all rights to it. You give us a limited license to store, copy, display, and transmit your content only as needed to provide the Service to your ward.</p>
  <p>You're responsible for your content. In particular:</p>
  <ul>
    <li>Only publish names, phone numbers, images, and other personal information you have permission to share, including any information about children.</li>
    <li>Programs aren't password-protected: anyone with the link or QR code can view them. Don't include sensitive information such as health details, home addresses, or anything you wouldn't print on a paper program.</li>
    <li>Only use images and text you have the right to use.</li>
  </ul>
  <p>We may remove content that violates these Terms or the law.</p>

  <h2>6. Acceptable use</h2>
  <p>You agree not to:</p>
  <ul>
    <li>use the Service for anything unlawful, harassing, hateful, or that infringes someone else's rights;</li>
    <li>upload malware, or try to access accounts, wards, or data that aren't yours;</li>
    <li>probe, scan, overload, or disrupt the Service, or scrape it with automated tools;</li>
    <li>copy, resell, or rebrand the Service, or use it to build a competing product; or</li>
    <li>use the Service to send spam or unsolicited messages.</li>
  </ul>

  <h2>7. Links and third-party content</h2>
  <p>Programs can link to other websites, such as hymns or lessons on churchofjesuschrist.org. We don't control those websites and aren't responsible for their content or practices.</p>

  <h2>8. Suspension and termination</h2>
  <p>You can stop using the Service at any time, and a ward's owner can delete the ward from the app. We may suspend or end access to the Service if you seriously or repeatedly violate these Terms, don't pay, or if we must do so by law. Where reasonable, we'll tell you first and give you a chance to fix the problem. After a ward's access ends, we handle its data as described in the <a href="/privacy-policy">Privacy Policy</a>, including deleting it after {LEGAL.inactiveRetentionMonths} months.</p>

  <h2>9. Disclaimers</h2>
  <p>We work to keep the Service available and accurate, but it is provided "as is" and "as available." To the fullest extent the law allows, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement, and we don't promise that the Service will be uninterrupted or error-free.</p>

  <h2>10. Limitation of liability</h2>
  <p>To the fullest extent the law allows, we won't be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost data, profits, or goodwill. Our total liability for any claim relating to the Service is limited to the amount your ward paid us in the 12 months before the claim arose. Some places don't allow these limits, so they may not fully apply to you.</p>

  <h2>11. Indemnity</h2>
  <p>If someone brings a claim against us because of your content or your violation of these Terms, you agree to cover our reasonable costs of that claim, including attorneys' fees, to the extent the law allows.</p>

  <h2>12. Governing law and disputes</h2>
  <p>These Terms are governed by the laws of the State of {LEGAL.state}, without regard to its conflict-of-laws rules. Any dispute relating to these Terms or the Service will be heard only in the state or federal courts located in {LEGAL.state}, and you and we consent to those courts' jurisdiction. Before filing a claim, please email us so we can try to resolve it informally.</p>

  <h2>13. Changes to these Terms</h2>
  <p>We may update these Terms. We'll post changes on this page and update the effective date, and for material changes we'll email ward owners at least 30 days before they take effect. If you keep using the Service after changes take effect, you accept them.</p>

  <h2>14. General</h2>
  <p>These Terms and the Privacy Policy are the entire agreement between you and us about the Service. If any part is found unenforceable, the rest stays in effect. If we don't enforce a provision right away, we haven't waived it. You may not transfer these Terms without our consent; we may transfer them as part of a merger or sale of the Service.</p>

  <h2>15. Contact</h2>
  <p>{LEGAL.entity}<br />Email: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></p>
  <p class="text-sm! text-muted">Effective {effective}.</p>
</article>
