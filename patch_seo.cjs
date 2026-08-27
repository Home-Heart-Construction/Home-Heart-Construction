const fs = require('fs');
const path = require('path');

const updateSEO = (filePath, title, description, slug) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // If SEO is already imported and returned, skip
  if (content.includes('<SEO ')) return;

  // Add import if not exists
  if (!content.includes('import { SEO }')) {
    content = content.replace(/(import .* from 'react(-router-dom)?';\n)/, "$1import { SEO } from '../components/SEO';\n");
  }

  const schema = `
  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://homeheart.in/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "${title}",
      "item": "https://homeheart.in/${slug}"
    }]
  });
  `;

  // Insert schema before return
  content = content.replace(/(\s*)(return\s*\(\s*<div[^>]*>)/, `$1${schema}$1$2\n$1  <SEO title="${title} | Home Heart Construction" description="${description}" schema={[breadcrumbSchema]} />`);

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filePath}`);
};

const pagesDir = path.join(__dirname, 'src', 'pages');

updateSEO(
  path.join(pagesDir, 'MediaGallery.tsx'), 
  'Media & Awards Gallery', 
  'View the latest media coverage, awards, and video highlights of Home Heart Construction Pvt. Ltd. and our luxury projects in Gaya, Bihar.',
  'media'
);

updateSEO(
  path.join(pagesDir, 'GhausiEnclaveGallery.tsx'), 
  'Ghausi Enclave Project Gallery', 
  'Explore the luxury amenities, master plan, and actual photos of Ghausi Enclave, a premium residential project by Home Heart Construction in Gaya.',
  'projects/ghausi-enclave/gallery'
);

updateSEO(
  path.join(pagesDir, 'GoldenHeightsGallery.tsx'), 
  'Golden Heights Project Gallery', 
  'Discover Golden Heights, the ultra-luxury residential and commercial development in Gaya, Bihar. View floor plans, 3D renders, and construction updates.',
  'projects/golden-heights/gallery'
);
