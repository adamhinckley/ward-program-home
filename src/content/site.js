// Single source of truth for facts that appear on the page, in JSON-LD, and in llms.txt.
// Change a fact here and every surface that mentions it updates on the next build.

export const SITE_URL = 'https://www.wardprogram.com';
export const APP_URL = 'https://app.wardprogram.com';

export const BRAND = 'Ward Program';
// Matches the Organization entity pullclear.com publishes in its own JSON-LD, so search engines merge them.
export const CREATOR = {
  name: 'Pull Clear Software',
  schemaName: 'Pull Clear',
  url: 'https://pullclear.com',
  schemaId: 'https://pullclear.com/#organization'
};

export const PRICE = {
  amount: '2.99',
  currency: 'USD',
  display: '$2.99',
  period: 'month',
  trialDays: 30
};

export const LINKS = {
  signUp: `${APP_URL}/sign-up`,
  login: `${APP_URL}/login`,
  programDemo: `${APP_URL}/demo/program`,
  editorDemo: `${APP_URL}/demo/editor`
};

export const TAGLINE = 'Private weekly sacrament meeting programs for wards of The Church of Jesus Christ of Latter-day Saints';

// One-paragraph definition, written to be quotable on its own.
export const SUMMARY =
  `${BRAND} is a web app for creating and sharing a ward's weekly sacrament meeting program privately. ` +
  `A ward clerk, executive secretary, or bishopric member edits the program in the browser, and members open it by scanning a QR code in the chapel or tapping a private link. ` +
  `Programs are not listed in any public directory or search engine, and members need no app, account, or login. ` +
  `The ward pays ${PRICE.display} per ${PRICE.period} (one subscription for the whole ward, never per member) after a ${PRICE.trialDays}-day free trial with no credit card required. ` +
  `${BRAND} is made by ${CREATOR.name} and is not an official product of The Church of Jesus Christ of Latter-day Saints.`;

export const KEY_FACTS = [
  `Price: ${PRICE.display} per ${PRICE.period} per ward. One subscription covers the whole ward and every editor; members never pay.`,
  `Free trial: ${PRICE.trialDays} days, no credit card required.`,
  'Members and visitors view the program with no account, login, or app download.',
  "The ward's trial or subscription keeps its program online. If the subscription lapses, the program page shows as unavailable until billing is restored.",
  'Sharing: a printable QR code for the chapel plus a private link. Each program lives at an unguessable address.',
  'Privacy: programs are never listed in a public directory, and every program page tells search engines not to index it.',
  'Editing: drag-and-drop sections for the date, callings and names, hymns (number, title, link), musical numbers, images, announcements, and ward contacts. Changes appear for members as soon as they are saved.',
  'Multiple editors: invite other ward leaders to help edit under the same subscription.',
  'Setup takes about 3 to 5 minutes.',
  `Made by ${CREATOR.name} (${CREATOR.url}). Not an official website or product of The Church of Jesus Christ of Latter-day Saints.`
];

/** How privacy works: [lead-in, detail]. Shown on /private-ward-program and in llms.txt. */
export const PRIVACY_POINTS = [
  ['No public directory', 'There is no "find your ward" search. Nobody can browse or look up wards on Ward Program.'],
  ['Unguessable links', "Each ward's program lives at an address built from a long random ID, not the ward's name, so it can't be guessed."],
  ['Kept out of search engines', "Every program page tells search engines not to index it, and the program site's robots.txt asks all crawlers to stay out."],
  ['Encrypted in transit', 'All traffic uses HTTPS.'],
  ['Only invited editors', "Editing requires an account, and new editors join by invitation from your ward's account."],
  ['Not password-protected', 'Anyone who has the link or scans the QR code can read the program, like a paper program in the chapel. Leave out anything you would not print.']
];

export const NAV_LINKS = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/ward-bulletin-alternatives', label: 'Compare' },
  { href: '/how-to-make-a-sacrament-meeting-program', label: 'Guide' }
];

export const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/private-ward-program', label: 'Privacy and security' },
  { href: '/ward-bulletin-alternatives', label: 'WardBullet and Ward Bulletin App alternatives' },
  { href: '/how-to-make-a-sacrament-meeting-program', label: 'How to make a sacrament meeting program' },
  { href: LINKS.programDemo, label: 'Program demo' },
  { href: LINKS.editorDemo, label: 'Editor demo' }
];
