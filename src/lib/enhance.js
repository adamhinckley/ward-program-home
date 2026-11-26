/** @type {((name: string, location: string) => void) | null} */
let trackCtaClick = null;

/**
 * Behavior for the prerendered pages: analytics, CTA click tracking and the footer year.
 * Links opt in to tracking with data-cta="<name>" and data-cta-location="<where>".
 */
export function enhance() {
  // Content blockers refuse analytics scripts. Loading them on their own, and ignoring a
  // refusal, keeps a blocked script from stopping the rest of the page.
  import('./measure.js')
    .then((measure) => {
      measure.startAnalytics();
      trackCtaClick = measure.trackCtaClick;
    })
    .catch(() => {});

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('a[data-cta]') : null;
    if (!(target instanceof HTMLAnchorElement)) {
      return;
    }
    trackCtaClick?.(target.dataset.cta ?? '', target.dataset.ctaLocation ?? '');
  });

  // The page was rendered at build time, so the year can be stale until the next deploy.
  const year = String(new Date().getFullYear());
  document.querySelectorAll('[data-current-year]').forEach((el) => {
    el.textContent = year;
  });
}
