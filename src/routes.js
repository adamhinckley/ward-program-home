import Home from './pages/Home.svelte';
import Pricing from './pages/Pricing.svelte';
import Privacy from './pages/Privacy.svelte';
import Alternatives from './pages/Alternatives.svelte';
import Guide from './pages/Guide.svelte';
import PrivacyPolicy from './pages/PrivacyPolicy.svelte';
import Terms from './pages/Terms.svelte';
import NotFound from './pages/NotFound.svelte';
import { pages } from './pages/meta.js';

/** @typedef {{ meta: import('./pages/meta.js').PageMeta, component: import('svelte').Component<any>, file: string }} Route */

/** Every page the build writes. `file` is its path inside dist/ (Vercel serves `pricing.html` at `/pricing`). */
/** @type {Route[]} */
export const routes = [
  { meta: pages.home, component: Home, file: 'index.html' },
  { meta: pages.pricing, component: Pricing, file: 'pricing.html' },
  { meta: pages.privacy, component: Privacy, file: 'private-ward-program.html' },
  { meta: pages.alternatives, component: Alternatives, file: 'ward-bulletin-alternatives.html' },
  { meta: pages.guide, component: Guide, file: 'how-to-make-a-sacrament-meeting-program.html' },
  { meta: pages.privacyPolicy, component: PrivacyPolicy, file: 'privacy-policy.html' },
  { meta: pages.terms, component: Terms, file: 'terms.html' },
  { meta: pages.notFound, component: NotFound, file: '404.html' }
];

const notFound = /** @type {Route} */ (routes.find((r) => r.meta === pages.notFound));

/** @param {string} path */
export function routeFor(path) {
  const normalized = path.length > 1 ? path.replace(/\/+$/, '') : path;
  return routes.find((r) => r.meta.path === normalized && r !== notFound) ?? notFound;
}
