import { text } from './faq.js';

export const HANDBOOK_URL =
  'https://www.churchofjesuschrist.org/study/manual/general-handbook/29-meetings-in-the-church?lang=eng';

/** The usual order of sacrament meeting: [step, detail]. */
export const meetingOrder = [
  ['Prelude music', 'Played while members arrive and sit reverently.'],
  ['Welcome and recognition', 'The person conducting welcomes everyone and acknowledges who is presiding and any visiting leaders.'],
  ['Announcements', 'Brief ward announcements, if any.'],
  ['Opening hymn and invocation', 'A congregational hymn followed by the opening prayer.'],
  ['Ward and stake business', 'Releases and sustainings of callings, and other business such as welcoming new members or recognizing priesthood ordinations.'],
  ['Sacrament hymn and administration of the sacrament', 'The central part of the meeting. Nothing else is scheduled during it.'],
  ['Messages and music', 'Talks by assigned speakers, often with a congregational rest hymn or a musical number between them.'],
  ['Closing hymn and benediction', 'A final hymn and the closing prayer.'],
  ['Postlude music', 'Played as members leave.']
];

/** @type {import('./faq.js').FaqItem[]} */
export const guideFaq = [
  {
    question: 'Who usually prepares the sacrament meeting program?',
    answer: [[text('It varies by ward. The bishopric plans the meeting, and the program is commonly prepared by the ward executive secretary, a ward clerk, or a member called to produce the program, using details the bishopric provides.')]]
  },
  {
    question: 'What is the order of a fast and testimony meeting program?',
    answer: [[text('On fast Sunday the order is the same through the sacrament. After the sacrament, the bishopric member conducting usually bears a brief testimony and then invites members to share theirs, in place of assigned speakers. The program then lists the closing hymn and benediction as usual.')]]
  },
  {
    question: 'Should the sacrament meeting program include phone numbers?',
    answer: [[text("Many wards list bishopric and clerk contact numbers. Only include them if those leaders are comfortable sharing them with anyone who might see the program, and be especially careful if your program tool lists your ward in a public directory.")]]
  },
  {
    question: 'Can I make a sacrament meeting program without printing it?',
    answer: [[text('Yes. A digital program can be opened on phones by scanning a QR code displayed in the chapel. Many wards keep a small number of printed copies for members who prefer paper.')]]
  }
];
