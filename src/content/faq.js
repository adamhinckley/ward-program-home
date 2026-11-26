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
 * Plain-text version of an answer, for JSON-LD and llms.txt.
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
          'Ward Program is a privacy-first web app for creating and sharing the weekly sacrament meeting program for a ward of The Church of Jesus Christ of Latter-day Saints. Members open the program by scanning a QR code or tapping a private link, and none of your congregation data is ever listed publicly.'
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
          `Ward Program is free for ward members to view. Editing and publishing access for the ward costs ${PRICE.display} per ${PRICE.period}, after a ${PRICE.trialDays}-day free trial with no credit card required. This includes unlimited program editing, QR code generation, and private sharing. There are no hidden fees, no per-member charges, and no upsells. `
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
          `Yes. Many wards do exactly that. Editing and publishing access is ${PRICE.display} per ${PRICE.period} for the ward, while everyone can view the program for free with no login required. One person can sponsor it for the entire ward. Once you create the account, you can invite others to help edit, and only one paid subscription is needed.`
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
