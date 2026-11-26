import { PRICE } from '../content/site.js';

// Page metadata, kept apart from the components so the build scripts (sitemap, llms.txt)
// can read it without loading Svelte.
// `updated` is the date the page's content last changed in a meaningful way: it feeds the
// sitemap's <lastmod> and the "Last updated" line, so bump it when you edit a page's copy.

/**
 * @typedef {{
 *   path: string,
 *   title: string,
 *   description: string,
 *   crumb: string,
 *   updated: string,
 *   published?: string,
 *   llmsSummary: string
 * }} PageMeta
 */

/** @type {Record<string, PageMeta>} */
export const pages = {
  home: {
    path: '/',
    title: 'Ward Program — Private Sacrament Meeting Programs for LDS Wards',
    description:
      `Private weekly sacrament meeting programs for Latter-day Saint wards. No public listing, no app download, QR code sharing. ${PRICE.display}/month per ward, ${PRICE.trialDays}-day free trial.`,
    crumb: 'Home',
    updated: '2026-11-25',
    llmsSummary: 'What Ward Program is, features, comparison table, and FAQ.'
  },
  pricing: {
    path: '/pricing',
    title: `Ward Program Pricing — ${PRICE.display}/month per Ward`,
    description:
      `Ward Program costs ${PRICE.display}/month per ward after a ${PRICE.trialDays}-day free trial, no credit card needed. Members view free with no login, and one plan covers every editor.`,
    crumb: 'Pricing',
    updated: '2026-11-25',
    llmsSummary: 'Price, free trial, who pays, multiple editors, and what is included.'
  },
  privacy: {
    path: '/private-ward-program',
    title: 'How Ward Program Keeps Your Ward Program Private',
    description:
      "How Ward Program keeps your sacrament meeting program private: no public directory, unguessable links, no search engine indexing, and HTTPS throughout.",
    crumb: 'Privacy and security',
    updated: '2026-11-25',
    llmsSummary: 'How programs are kept out of public directories and search engines, and what to avoid publishing.'
  },
  alternatives: {
    path: '/ward-bulletin-alternatives',
    title: 'WardBullet and Ward Bulletin App Alternatives (Private)',
    description:
      'WardBullet, Ward Bulletin App, Canva, Google Docs, and Ward Program compared for sacrament meeting programs: privacy, QR codes, app downloads, and cost.',
    crumb: 'Alternatives',
    updated: '2026-11-25',
    llmsSummary: 'Side-by-side comparison with WardBullet, Ward Bulletin App, Canva, and Google Docs.'
  },
  guide: {
    path: '/how-to-make-a-sacrament-meeting-program',
    title: 'How to Make a Sacrament Meeting Program: Order and Contents',
    description:
      'A guide for ward clerks and executive secretaries: the order of sacrament meeting, what to include in the program, and how to share it with a QR code.',
    crumb: 'How to make a sacrament meeting program',
    published: '2026-11-25',
    updated: '2026-11-25',
    llmsSummary: 'Order of sacrament meeting, what a program includes, privacy tips, and digital sharing.'
  },
  privacyPolicy: {
    path: '/privacy-policy',
    title: 'Privacy Policy — Ward Program',
    description:
      'What information Ward Program collects, how it is used and shared, how long it is kept, and how to access or delete it.',
    crumb: 'Privacy Policy',
    updated: '2026-11-26',
    llmsSummary: 'Privacy Policy: data collected, service providers, retention, cookieless analytics, and privacy rights.'
  },
  terms: {
    path: '/terms',
    title: 'Terms of Service — Ward Program',
    description:
      'The terms for using Ward Program: accounts, the free trial, monthly billing and cancellation, your content, acceptable use, and liability.',
    crumb: 'Terms of Service',
    updated: '2026-11-26',
    llmsSummary: 'Terms of Service: accounts, trial, billing, cancellation and refunds, content, acceptable use.'
  },
  notFound: {
    path: '/404',
    title: 'Page not found — Ward Program',
    description: 'This page does not exist. Go back to the Ward Program home page.',
    crumb: 'Not found',
    updated: '2026-11-25',
    llmsSummary: ''
  }
};

/** Pages that belong in the sitemap and llms.txt, in display order. */
export const indexablePages = [pages.home, pages.pricing, pages.privacy, pages.alternatives, pages.guide, pages.privacyPolicy, pages.terms];
