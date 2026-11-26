// Build-time entry: renders each page to HTML. Used by scripts/prerender.mjs, never shipped to browsers.
import { render } from 'svelte/server';
import App from './App.svelte';

export { routes } from './routes.js';
export { indexablePages, pages } from './pages/meta.js';
export { homeFaq, pricingFaq, answerToMarkdown } from './content/faq.js';
export { guideFaq, meetingOrder, HANDBOOK_URL } from './content/guide.js';
export { SITE_URL, BRAND, CREATOR, SUMMARY, KEY_FACTS, LINKS, PRICE, TAGLINE, PRIVACY_POINTS } from './content/site.js';
export { comparisonRows } from './content/comparison.js';

/** @param {string} path */
export function renderPage(path) {
  return render(App, { props: { path } });
}
