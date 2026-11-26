import { inject, track } from '@vercel/analytics';

// Vercel Web Analytics: cookieless and doesn't identify visitors, which is what the
// Privacy Policy promises. Page views work on every Vercel plan; custom events (the
// CTA clicks below) need Pro or above, which allows 2 properties per event.

/** Start page-view tracking. In `npm run dev` it only logs to the console. */
export function startAnalytics() {
  inject();
}

/**
 * Record a click on a call-to-action link. The name already says where it goes
 * (start_free_trial, view_program_demo, ...), so only two properties are sent.
 * @param {string} name
 * @param {string} location
 */
export function trackCtaClick(name, location) {
  track('mkt_cta_click', { cta_name: name, cta_location: location });
}
