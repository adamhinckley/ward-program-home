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
  logo: `${SITE_URL}/logo-512.png`,
  creator: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
  isAccessibleForFree: false,
  offers: {
    '@type': 'Offer',
    price: PRICE.amount,
    priceCurrency: PRICE.currency,
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/pricing`,
    description: `${PRICE.display} per ${PRICE.period} per ward for editing and publishing, after a ${PRICE.trialDays}-day free trial with no credit card required. Viewing is free for members.`,
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
    'Browser-based editor for hymns, prayers, speakers, announcements, and ward contacts',
    'Drag-and-drop program layout',
    'Invite other ward leaders to help edit'
  ]
};

/**
 * @param {{ path: string, title: string, description: string, type?: string, extra?: object[] }} page
 */
export function webPage({ path, title, description, type = 'WebPage' }) {
  return {
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: 'en-US',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': APP_ID },
    publisher: { '@id': ORG_ID }
  };
}

/** @param {{ name: string, path: string }[]} trail */
export function breadcrumbs(trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path)
    }))
  };
}

/** @param {import('../content/faq.js').FaqItem[]} items */
export function faqPage(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: answerToText(item.answer) }
    }))
  };
}

/**
 * Serialize a JSON-LD graph for a <script> tag. Escapes `<` so content can't close the tag.
 * @param {object[]} nodes
 */
export function jsonLdScript(nodes) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}
