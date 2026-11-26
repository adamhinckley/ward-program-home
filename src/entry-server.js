// Build-time entry: renders each page to HTML. Used by scripts/prerender.mjs, never shipped to browsers.
import { render } from 'svelte/server';
import App from './App.svelte';

export { routes } from './routes.js';
export { indexablePages, pages } from './pages/meta.js';
export { homeFaq, answerToText } from './content/faq.js';
export { SITE_URL, BRAND, CREATOR, SUMMARY, KEY_FACTS, LINKS, PRICE, TAGLINE } from './content/site.js';
export { comparisonRows } from './content/comparison.js';

/** @param {string} path */
export function renderPage(path) {
  return render(App, { props: { path } });
}
