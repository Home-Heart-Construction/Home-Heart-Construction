const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/components/**/*.tsx');
files.forEach(file => {
  let code = fs.readFileSync(file, 'utf8');

  // We should not touch BeforeAfter or Gallery overlays that are strictly on dark images
  if (
    !file.includes('ProjectGallery.tsx') &&
    !file.includes('ProjectGalleryGoldenHeights.tsx') &&
    !file.includes('Gallery.tsx') &&
    !file.includes('MediaHighlights.tsx') &&
    !file.includes('BeforeAfter.tsx') &&
    !file.includes('FeaturedProject.tsx')
  ) {
    code = code.replace(/border-white\/10/g, 'border-border-subtle');
    code = code.replace(/border-white\/20/g, 'border-border-subtle');
    code = code.replace(/border-white\/5/g, 'border-border-subtle');
    
    // Also bg-white/5 -> bg-glass (except we might not want to blindly change bg-white/5 everywhere, 
    // let's just do it for borders)
  }

  fs.writeFileSync(file, code);
});
