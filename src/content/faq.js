import { LINKS, PRICE } from './site.js';

/** @typedef {{ type: 'text', value: string }} TextFragment */
/** @typedef {{ type: 'strong', value: string }} StrongFragment */
/** @typedef {{ type: 'link', href: string, label: string }} LinkFragment */
/** @typedef {TextFragment | StrongFragment | LinkFragment} FaqFragment */
/** @typedef {{ question: string, answer: FaqFragment[][], open?: boolean }} FaqItem */

/** @param {string} value @returns {TextFragment} */
export const text = (value) => ({ type: 'text', value });

/** @param {string} value @returns {StrongFragment} */
export const strong = (value) => ({ type: 'strong', value });

/** @param {string} href @param {string} label @returns {LinkFragment} */
export const link = (href, label) => ({ type: 'link', href, label });

/**
 * Markdown version of an answer for llms.txt, keeping links (relative ones made absolute).
 * @param {FaqFragment[][]} answer
 * @param {(href: string) => string} absolute
 */
export function answerToMarkdown(answer, absolute) {
  return answer
    .map((paragraph) =>
      paragraph
        .map((fragment) =>
          fragment.type === 'link' ? `[${fragment.label}](${absolute(fragment.href)})` : fragment.value
        )
        .join('')
    )
    .join('\n\n');
}

/**
 * Plain-text version of an answer, for JSON-LD.
 * @param {FaqFragment[][]} answer
 */
export function answerToText(answer) {
  return answer
    .map((paragraph) =>
      paragraph.map((fragment) => (fragment.type === 'link' ? fragment.label : fragment.value)).join('')
    )
    .join('\n\n');
}

/** @type {FaqItem[]} */
export const homeFaq = [
  {
    question: 'What is Ward Program?',
    answer: [
      [
        text(
          'Ward Program is a privacy-first web app for creating and sharing the weekly sacrament meeting program (sometimes called a ward bulletin) for wards and branches of The Church of Jesus Christ of Latter-day Saints. A bishopric member, ward clerk, or executive secretary edits it in the browser, and members open it by scanning a QR code or tapping a private link. None of your congregation data is ever listed publicly.'
        )
      ]
    ],
    open: true
  },
  {
    question: 'How is Ward Program different from WardBullet or Ward Bulletin App?',
    answer: [
      [
        text('The key difference is '),
        strong('privacy-first design'),
        text(
          '. WardBullet and Ward Bulletin App both offer a public search where anyone can look up a ward and open its program. Ward Program has no public directory: your program is reached only through your private link and QR code. Like them, it needs no app download, works in any mobile browser, and offers a QR code. Unlike them, it is a paid service rather than a free one. '
        ),
        link('/ward-bulletin-alternatives', 'See the full comparison'),
        text('.')
      ]
    ]
  },
  {
    question: 'How much does Ward Program cost?',
    answer: [
      [
        text(
          `Ward Program costs ${PRICE.display} per ${PRICE.period} per ward, after a ${PRICE.trialDays}-day free trial with no credit card required. Members never pay: they view the program for free with no login. The subscription includes unlimited program editing, QR code generation, private sharing, and any number of editors. There are no hidden fees, no per-member charges, and no upsells. `
        ),
        link('/pricing', 'See pricing details'),
        text('.')
      ]
    ]
  },
  {
    question: 'Can I sponsor Ward Program for my ward?',
    answer: [
      [
        text(
          `Yes. Many wards do exactly that. One subscription at ${PRICE.display} per ${PRICE.period} covers the whole ward, and members view the program for free with no login. Once you create the account, you can invite others to help edit, and only one paid subscription is needed.`
        )
      ]
    ]
  },
  {
    question: 'Do members need to download an app?',
    answer: [
      [
        text(
          "No. Members scan the QR code displayed in your church building (or tap a shared link) to view the program in their phone's browser. They can also add it to their home screen for instant access each Sunday. No app store download is required."
        )
      ]
    ]
  },
  {
    question: "Is my ward's information private and secure with Ward Program?",
    answer: [
      [
        text(
          "Yes. Ward Program does not publish your ward's data in a public directory. Each program lives at an unguessable link that you share through your QR code, and every program page tells search engines not to index it. Traffic is encrypted in transit over HTTPS. "
        ),
        link('/private-ward-program', 'Read how privacy works'),
        text('.')
      ]
    ]
  },
  {
    question: 'How do I get started with Ward Program?',
    answer: [
      [
        text('Getting started usually takes 3 to 5 minutes. Visit the '),
        link(LINKS.signUp, 'sign-up page'),
        text(' to create your account, then use the editor to build your first sacrament meeting program. You can also '),
        link(LINKS.editorDemo, 'try the editor demo'),
        text(' to see how it works before signing up.')
      ]
    ]
  },
  {
    question: "Why isn't Ward Program free?",
    answer: [
      [
        text(
          "Ward Program requires servers, databases, and infrastructure that cost real money to run, and those costs grow with every ward that signs up. Rather than covering those expenses with ads, selling your data, or making your ward's information publicly searchable, Ward Program charges a straightforward "
        ),
        strong(`${PRICE.display} per ${PRICE.period}`),
        text(
          ". That keeps the lights on, keeps your data private, and pays for continued development. It's a small cost that a single member, the bishopric, or the ward council can easily cover, and it means Ward Program answers to your ward, not to advertisers."
        )
      ]
    ]
  }
];

/** @type {FaqItem[]} */
export const pricingFaq = [
  {
    question: 'Is there a free trial of Ward Program?',
    answer: [[text(`Yes. Every ward gets a ${PRICE.trialDays}-day free trial with no credit card required. If you decide not to continue, there's nothing to cancel: the program simply goes offline when the trial ends.`)]]
  },
  {
    question: 'Do members have to pay to see the program?',
    answer: [[text("No. Members and visitors never pay. They scan the QR code or open the link in their browser, with no account, login, or app. The ward's subscription is what keeps the program online.")]]
  },
  {
    question: 'What happens if the subscription lapses?',
    answer: [[text("The program page shows a message that it's currently unavailable, and members are asked to contact their ward. Your program and settings are kept, and it comes back as soon as billing is restored.")]]
  },
  {
    question: 'Is the Ward Program price per editor or per ward?',
    answer: [[text(`Per ward. One subscription at ${PRICE.display} per ${PRICE.period} covers the ward, and the person who creates the account can invite other leaders to help edit at no extra cost.`)]]
  },
  {
    question: 'Who usually pays for Ward Program?',
    answer: [[text('Often a single member sponsors it for the ward, or a member of the bishopric or ward council covers it. The person who signs up manages billing and can invite the ward clerk, executive secretary, or others to edit.')]]
  },
  {
    question: 'How do I start using Ward Program?',
    answer: [[text('Create an account on the '), link(LINKS.signUp, 'sign-up page'), text('. Setup usually takes 3 to 5 minutes. You can also '), link(LINKS.editorDemo, 'try the editor demo'), text(' first.')]]
  }
];
