import { inject, track } from '@vercel/analytics';

// Vercel Web Analytics: cookieless and doesn't identify visitors, which is what the
// Privacy Policy promises. Page views work on every Vercel plan; custom events (the
// CTA clicks below) are recorded only on plans that include them.

/** Start page-view tracking. In `npm run dev` it only logs to the console. */
export function startAnalytics() {
  inject();
}

/**
 * Record a click on a call-to-action link.
 * @param {string} name
 * @param {string} location
 * @param {string} destination
 */
export function trackCtaClick(name, location, destination) {
  track('mkt_cta_click', {
    cta_name: name,
    cta_location: location,
    cta_destination: destination
  });
}
