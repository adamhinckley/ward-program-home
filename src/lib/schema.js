import { BRAND, CREATOR, PRICE, SITE_URL, SUMMARY } from '../content/site.js';
import { answerToText } from '../content/faq.js';

const ORG_ID = CREATOR.schemaId;
const SITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

/** @param {string} path */
export const absoluteUrl = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

export const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: CREATOR.schemaName,
  alternateName: CREATOR.name,
  url: `${CREATOR.url}/`
};

export const website = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: BRAND,
  url: `${SITE_URL}/`,
  inLanguage: 'en-US',
  publisher: { '@id': ORG_ID }
};

export const webApplication = {
  '@type': 'WebApplication',
  '@id': APP_ID,
  name: BRAND,
  url: `${SITE_URL}/`,
  description: SUMMARY,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any (web browser)',
  browserRequirements: 'Requires a modern web browser. No app download.',
  audience: {
    '@type': 'Audience',
    audienceType: 'Bishoprics, ward clerks, executive secretaries, and program editors in wards and branches of The Church of Jesus Christ of Latter-day Saints'
  },
  image: `${SITE_URL}/og-image.png`,
  creator: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
  isAccessibleForFree: false,
  offers: {
    '@type': 'Offer',
    price: PRICE.amount,
    priceCurrency: PRICE.currency,
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/pricing`,
    description: `${PRICE.display} per ${PRICE.period} per ward, after a ${PRICE.trialDays}-day free trial with no credit card required. One subscription covers every editor; members view for free with no login.`,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: PRICE.amount,
      priceCurrency: PRICE.currency,
      billingDuration: 'P1M',
      referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
      unitText: 'per month per ward'
    }
  },
  featureList: [
    'Private weekly sacrament meeting programs, never listed in a public directory',
    'Printable QR code for the chapel',
    'No app download or login for members; works in any mobile browser',
    'Browser-based editor with drag-and-drop sections for callings and names, hymns, musical numbers, images, announcements, and ward contacts',
    'Invite other ward leaders to help edit'
  ]
};

/** @param {import('../content/faq.js').FaqItem[]} items */
const questions = (items) =>
  items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: answerToText(item.answer) }
  }));

/**
 * The page node. With `faq`, it is also an FAQPage carrying the questions, so each URL has
 * one page entity. Set `aboutApp` only on pages whose graph includes `webApplication`.
 * @param {{ path: string, title: string, description: string, crumbs?: boolean }} page
 * @param {{ faq?: import('../content/faq.js').FaqItem[], aboutApp?: boolean }} [options]
 */
export function webPage({ path, title, description, crumbs = path !== '/' }, { faq, aboutApp = true } = {}) {
  const url = absoluteUrl(path);
  return {
    '@type': faq ? ['WebPage', 'FAQPage'] : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: 'en-US',
    isPartOf: { '@id': SITE_ID },
    ...(aboutApp ? { about: { '@id': APP_ID } } : {}),
    ...(crumbs ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    publisher: { '@id': ORG_ID },
    ...(faq ? { mainEntity: questions(faq) } : {})
  };
}

/** @param {{ path: string, title: string, description: string, updated: string }} page */
export function article({ path, title, description, updated }) {
  const url = absoluteUrl(path);
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    headline: title,
    description,
    image: absoluteUrl('/og-image.png'),
    datePublished: updated,
    dateModified: updated,
    inLanguage: 'en-US',
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID }
  };
}

/**
 * @param {string} path the current page
 * @param {{ name: string, path: string }[]} trail
 */
export function breadcrumbs(path, trail) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path)
    }))
  };
}

/** Home > this page. @param {{ path: string, crumb: string }} page */
export const crumbsFor = (page) => breadcrumbs(page.path, [{ name: 'Home', path: '/' }, { name: page.crumb, path: page.path }]);

/**
 * Serialize a JSON-LD graph for a <script> tag. Escapes `<` so content can't close the tag.
 * @param {object[]} nodes
 */
export function jsonLdScript(nodes) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}
