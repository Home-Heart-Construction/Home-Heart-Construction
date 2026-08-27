const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// 1. robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://homeheart.in/sitemap.xml
Sitemap: https://homeheart.in/image-sitemap.xml
`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

// 2. sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://homeheart.in/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://homeheart.in/media</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://homeheart.in/projects/ghausi-enclave/gallery</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://homeheart.in/projects/golden-heights/gallery</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);

// 3. image-sitemap.xml
const imageSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://homeheart.in/</loc>
    <image:image>
      <image:loc>https://homeheart.in/assets/hero-bg.jpg</image:loc>
      <image:title>Luxury Apartments in Gaya</image:title>
      <image:caption>Home Heart Construction - Premium Real Estate Developer</image:caption>
    </image:image>
  </url>
</urlset>`;
fs.writeFileSync(path.join(publicDir, 'image-sitemap.xml'), imageSitemapXml);

// 4. manifest.json
const manifestJson = `{
  "name": "Home Heart Construction Pvt. Ltd.",
  "short_name": "Home Heart",
  "description": "Luxury Real Estate Developer in Gaya, Bihar. Premium Apartments & Commercial Projects.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0A0A0B",
  "theme_color": "#C8A46A",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`;
fs.writeFileSync(path.join(publicDir, 'manifest.json'), manifestJson);

// 5. browserconfig.xml
const browserConfigXml = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/mstile-150x150.png"/>
      <TileColor>#0A0A0B</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;
fs.writeFileSync(path.join(publicDir, 'browserconfig.xml'), browserConfigXml);

console.log("Public static SEO files generated successfully.");
