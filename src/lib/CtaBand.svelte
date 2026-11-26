<script>
  import OutlineButton from './OutlineButton.svelte';
  import { LINKS, PRICE } from '../content/site.js';

  /** @type {{ location: string, heading?: string }} */
  let { location, heading = 'Make Sunday morning simpler for your ward' } = $props();
</script>

<section class="bg-navy px-4 py-16 md:px-8 md:py-20">
  <div class="mx-auto max-w-3xl text-center">
    <h2 class="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{heading}</h2>
    <p class="mx-auto mb-8 max-w-xl text-lg text-nav-muted">Join 50+ wards using a private, simple way to share each sacrament meeting program.</p>
    <p class="mt-2 mb-12 text-center text-sm text-nav-muted">Free {PRICE.trialDays}-day trial with no credit card required. Then {PRICE.display}/{PRICE.period} to continue.</p>
    <div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
      <OutlineButton
        href={LINKS.signUp}
        text="Start Free Trial - No Card Required"
        variant="light"
        size="lg"
        cta="start_free_trial"
        ctaLocation={location}
      />
      <OutlineButton
        href={LINKS.editorDemo}
        text="See Editor Demo"
        variant="outline-white"
        size="lg"
        cta="see_editor_demo"
        ctaLocation={location}
      />
    </div>
  </div>
</section>
