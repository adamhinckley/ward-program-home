// Generates public/og-image.png (1200x630), the share card for every page.
// Run with `npm run og` and commit the PNG. Colors match the Navy palette used by the site and app.
import sharp from "sharp";
import { PRICE } from "../src/content/site.js";

const NAVY = "#14213a";
const INK = "#172033";
const MUTED = "#5a6477";
const BRASS = "#c9a46a";
const BRASS_INK = "#9a7438";
const PILL_BG = "#fbf6ec";
const PILL_BORDER = "#e7d5b0";
const FONT = "system-ui, -apple-system, 'Segoe UI', sans-serif";

const BOOK =
  "M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20";

// 24x24 line icons (same set as the site), drawn instead of emoji so they render everywhere.
const ICONS = {
  lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  qr: '<rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><path d="M14 14h2v2h-2z"/><path d="M20 14h2v2h-2z"/><path d="M14 20h2v2h-2z"/><path d="M20 20h2v2h-2z"/><path d="M17 17h2v2h-2z"/>',
  phone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/>'
};

const pill = (cx, icon, label) => `
  <g transform="translate(${cx}, 0)">
    <rect x="-125" y="-22" width="250" height="44" rx="22" fill="${PILL_BG}" stroke="${PILL_BORDER}" stroke-width="1.5"/>
    <g transform="translate(-92, -10) scale(0.8333)" fill="none" stroke="${BRASS_INK}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${ICONS[icon]}</g>
    <text x="14" y="7" text-anchor="middle" font-family="${FONT}" font-size="19" font-weight="600" fill="${INK}">${label}</text>
  </g>`;

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f3f4f7"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="10" fill="${NAVY}"/>

  <!-- Navy badge with the book icon -->
  <g transform="translate(552, 92)">
    <rect width="96" height="96" rx="22" fill="${NAVY}"/>
    <g transform="translate(18 18) scale(2.5)" fill="none" stroke="${BRASS}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${BOOK}"/></g>
  </g>

  <text x="600" y="290" text-anchor="middle" font-family="${FONT}" font-size="72" font-weight="700" letter-spacing="-1" fill="${INK}">Ward Program</text>
  <text x="600" y="352" text-anchor="middle" font-family="${FONT}" font-size="32" font-weight="500" fill="${INK}">Private weekly sacrament meeting programs</text>
  <text x="600" y="396" text-anchor="middle" font-family="${FONT}" font-size="24" font-weight="400" fill="${MUTED}">for wards of The Church of Jesus Christ of Latter-day Saints</text>

  <g transform="translate(600, 470)">
    ${pill(-290, "lock", "Private by default")}
    ${pill(0, "qr", "QR code sharing")}
    ${pill(290, "phone", "No app required")}
  </g>

  <text x="600" y="574" text-anchor="middle" font-family="${FONT}" font-size="22" font-weight="500" fill="${NAVY}">${PRICE.display}/month per ward  ·  ${PRICE.trialDays}-day free trial  ·  www.wardprogram.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");
console.log("✓ Created public/og-image.png (1200x630)");
