// Renders every page to static HTML after `vite build`, so crawlers and AI assistants that
// don't run JavaScript get the full content. Also writes sitemap.xml and llms.txt from the
// same content modules the pages use, so they can't drift apart.
//
// Usage (see package.json): vite build && vite build --ssr src/entry-server.js --outDir .ssr && node scripts/prerender.mjs
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, '.ssr');

const server = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const { routes, indexablePages, homeFaq, answerToText, comparisonRows } = server;
const { SITE_URL, BRAND, CREATOR, SUMMARY, KEY_FACTS, LINKS, TAGLINE } = server;

const template = await readFile(path.join(dist, 'index.html'), 'utf8');
for (const marker of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) {
    throw new Error(`dist/index.html is missing the ${marker} placeholder`);
  }
}

const absolute = (/** @type {string} */ p) => (p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`);

/** Fail the build if a page would ship without the basics crawlers rely on. */
function check(file, html, { indexable }) {
  const problems = [];
  if ((html.match(/<title>/g) ?? []).length !== 1) problems.push('expected exactly one <title>');
  if ((html.match(/<h1[\s>]/g) ?? []).length !== 1) problems.push('expected exactly one <h1>');
  if (html.includes('<!--app-')) problems.push('placeholder left in output');
  if (indexable && !/<link rel="canonical" href="https:\/\/www\.wardprogram\.com[^"]*"/.test(html)) {
    problems.push('missing canonical on www');
  }
  if (!indexable && !html.includes('<meta name="robots" content="noindex"')) problems.push('missing noindex');
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(json);
    } catch (error) {
      problems.push(`invalid JSON-LD: ${error.message}`);
    }
  }
  if (problems.length) {
    throw new Error(`${file}: ${problems.join('; ')}`);
  }
}

for (const route of routes) {
  const { head, body } = server.renderPage(route.meta.path);
  const html = template.replace('<!--app-head-->', () => head).replace('<!--app-html-->', () => body);
  check(route.file, html, { indexable: indexablePages.includes(route.meta) });
  await writeFile(path.join(dist, route.file), html);
  console.log(`prerendered ${route.meta.path} -> dist/${route.file}`);
}

// ── sitemap.xml ──
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...indexablePages.map((page) => `  <url>\n    <loc>${absolute(page.path)}</loc>\n    <lastmod>${page.updated}</lastmod>\n  </url>`),
  '</urlset>',
  ''
].join('\n');
await writeFile(path.join(dist, 'sitemap.xml'), sitemap);
console.log('wrote dist/sitemap.xml');

// ── llms.txt (https://llmstxt.org) ──
const yesNo = (/** @type {boolean | null} */ v, yes, no, unknown = 'varies') => (v === true ? yes : v === false ? no : unknown);
const llms = [
  `# ${BRAND}`,
  '',
  `> ${TAGLINE}. ${SUMMARY}`,
  '',
  '## Key facts',
  '',
  ...KEY_FACTS.map((fact) => `- ${fact}`),
  '',
  '## Pages',
  '',
  ...indexablePages.map((page) => `- [${page.title}](${absolute(page.path)}): ${page.llmsSummary}`),
  '',
  '## Try it',
  '',
  `- [Start a free trial](${LINKS.signUp}): create an account; no credit card required.`,
  `- [Program demo](${LINKS.programDemo}): what members see on their phones.`,
  `- [Editor demo](${LINKS.editorDemo}): the editor ward leaders use.`,
  '',
  '## How it compares',
  '',
  ...comparisonRows.map(
    (row) =>
      `- ${row.name}: ${yesNo(row.isPrivate, 'not publicly listed', 'publicly searchable')}; QR code ${yesNo(row.hasQr, 'yes', 'no')}; app download ${yesNo(row.noApp, 'not needed', 'required')}; cost: ${row.cost} ${row.notes}`
  ),
  '',
  '## Frequently asked questions',
  '',
  ...homeFaq.flatMap((item) => [`### ${item.question}`, '', answerToText(item.answer), '']),
  '## About',
  '',
  `${BRAND} is made by ${CREATOR.name} (${CREATOR.url}). It is not an official website or product of The Church of Jesus Christ of Latter-day Saints.`,
  ''
].join('\n');
await writeFile(path.join(dist, 'llms.txt'), llms);
console.log('wrote dist/llms.txt');

await rm(ssrDir, { recursive: true, force: true });
