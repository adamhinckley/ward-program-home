import sharp from "sharp";

// 1200x630 OG image matching the Ward Program site aesthetic
const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="50%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f1f5f9"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Subtle border -->
  <rect x="0" y="0" width="1200" height="630" fill="none" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Top accent line -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)"/>

  <!-- Book icon (centered: 600 - 12*3.5 = 558) -->
  <g transform="translate(558, 140) scale(3.5)" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20"/>
  </g>

  <!-- "Ward Program" title -->
  <text x="600" y="320" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="64" font-weight="300" letter-spacing="3" fill="#0f172a">Ward Program</text>

  <!-- Tagline -->
  <text x="600" y="380" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="28" font-weight="400" fill="#64748b">Private weekly sacrament meeting programs</text>

  <!-- Sub-tagline -->
  <text x="600" y="420" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="22" font-weight="400" fill="#94a3b8">for LDS wards and congregations</text>

  <!-- Three feature pills -->
  <g transform="translate(600, 490)">
    <!-- Privacy pill -->
    <rect x="-380" y="-18" width="220" height="36" rx="18" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1"/>
    <text x="-270" y="6" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="15" font-weight="500" fill="#4338ca">&#x1F512;&#160;&#160;Private &amp; Secure</text>

    <!-- QR Code pill -->
    <rect x="-110" y="-18" width="220" height="36" rx="18" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1"/>
    <text x="0" y="6" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="15" font-weight="500" fill="#4338ca">&#x1F4F1;&#160;&#160;QR Code Sharing</text>

    <!-- No App pill -->
    <rect x="160" y="-18" width="220" height="36" rx="18" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1"/>
    <text x="270" y="6" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="15" font-weight="500" fill="#4338ca">&#x2728;&#160;&#160;No App Required</text>
  </g>

  <!-- URL at bottom -->
  <text x="600" y="575" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="18" font-weight="400" letter-spacing="2" fill="#94a3b8">wardprogram.com</text>
</svg>`;

import fs from "fs";

await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");

// Also save SVG for inspection
fs.writeFileSync("public/og-image-preview.svg", svg);

console.log("✓ Created public/og-image.png (1200x630)");
console.log("✓ Created public/og-image-preview.svg for inspection");
