const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/components/**/*.tsx');
files.forEach(file => {
  let code = fs.readFileSync(file, 'utf8');
  
  // Exclude some files that are explicitly dark overlays
  if (!file.includes('ProjectGallery.tsx') && !file.includes('ProjectGalleryGoldenHeights.tsx') && !file.includes('Gallery.tsx')) {
    // Only replace text-white in elements that are not explicitly on black background
    // We will do a general replace of text-white with text-heading EXCEPT in BeforeAfter which uses dark overlay,
    // and FeaturedProject where bg-black/60 is used.
    if (!file.includes('FeaturedProject.tsx') && !file.includes('BeforeAfter.tsx') && !file.includes('MediaHighlights.tsx')) {
       code = code.replace(/text-white/g, 'text-heading');
    }
  }

  // Always replace text-gray-400 and text-gray-300 with text-text-muted
  code = code.replace(/text-gray-300/g, 'text-text-muted');
  code = code.replace(/text-gray-400/g, 'text-text-muted');

  fs.writeFileSync(file, code);
});
