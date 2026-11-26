import { PRICE } from './site.js';

// Claims about other products must be checkable on their own public sites.
// Last checked 2026-11-25:
// - wardbullet.com: "Find Ward" public search; "view using any device on a browser... No need to download an app or login";
//   shares via QR code; "100% Free forever".
// - wardbullet.com/faqs: ward business is "only viewable by users who you specifically grant" access.
// - wardbulletin.app: "Find Bulletin" public search; browser-based; free; editor has a "Create QR Code" tool.
// - Canva: built-in QR code app on free and paid plans.
// `true` / `false` are confirmed; `null` means it varies or the product doesn't say.

/**
 * @typedef {{
 *   name: string,
 *   link: string | null,
 *   isPrivate: boolean | null,
 *   hasQr: boolean | null,
 *   noApp: boolean | null,
 *   cost: string,
 *   notes: string,
 *   featured: boolean
 * }} ComparisonRow
 */

/** @type {ComparisonRow[]} */
export const comparisonRows = [
  {
    name: 'Ward Program',
    link: null,
    isPrivate: true,
    hasQr: true,
    noApp: true,
    cost: `Free for members to view. ${PRICE.display}/mo for editing, after a ${PRICE.trialDays}-day free trial.`,
    notes: 'Private link and built-in QR code. Not listed in any directory or search engine.',
    featured: true
  },
  {
    name: 'WardBullet',
    link: 'https://www.wardbullet.com/',
    isPrivate: false,
    hasQr: true,
    noApp: true,
    cost: 'Free',
    notes: 'Programs can be found through a public "Find Ward" search. Ward business can be limited to approved users.',
    featured: false
  },
  {
    name: 'Ward Bulletin App',
    link: 'https://wardbulletin.app/home',
    isPrivate: false,
    hasQr: true,
    noApp: true,
    cost: 'Free',
    notes: 'Bulletins can be found through a public "Find Bulletin" search.',
    featured: false
  },
  {
    name: 'Canva',
    link: null,
    isPrivate: null,
    hasQr: true,
    noApp: true,
    cost: 'Free, paid plans available',
    notes: 'General design tool. You rebuild and re-share the design each week, and a QR code points to one file, not the current week.',
    featured: false
  },
  {
    name: 'Google Docs',
    link: null,
    isPrivate: null,
    hasQr: false,
    noApp: true,
    cost: 'Free',
    notes: 'Manual document workflow. Privacy depends on your sharing settings.',
    featured: false
  }
];
