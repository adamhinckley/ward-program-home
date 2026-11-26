import './app.css';
import { enhance } from './lib/enhance.js';
import { startAnalytics } from './lib/analytics.js';

startAnalytics();

const target = document.getElementById('app');

// Production pages are rendered to HTML at build time, and the only behavior they need is
// in enhance(), so browsers don't download Svelte at all. In `npm run dev` nothing is
// prerendered, so render the page in the browser instead.
if (import.meta.env.DEV && target && !target.firstElementChild) {
  import('./mount.js').then(({ mountApp }) => {
    mountApp(target);
    enhance();
  });
} else {
  enhance();
}
