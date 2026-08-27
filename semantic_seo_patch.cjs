const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const updateFile = (filePath, replacements) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  replacements.forEach(({ search, replace }) => {
    content = content.replace(search, replace);
  });
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${path.basename(filePath)}`);
};

// 1. Hero.tsx - Inject Gaya, Bihar into the paragraph
updateFile(path.join(srcDir, 'components', 'Hero.tsx'), [
  {
    search: "Premium 2 & 3 BHK Apartments Crafted with Quality, Trust & Modern Design.",
    replace: "Premium 2 & 3 BHK Luxury Apartments in Gaya, Bihar Crafted with Quality, Trust & Modern Design."
  }
]);

// 2. GhausiEnclaveGallery.tsx - Swap H1/H2
updateFile(path.join(srcDir, 'pages', 'GhausiEnclaveGallery.tsx'), [
  {
    search: '<h1 className="text-gold font-medium tracking-widest uppercase text-sm">PROJECT GALLERY</h1>',
    replace: '<span className="text-gold font-medium tracking-widest uppercase text-sm">PROJECT GALLERY</span>'
  },
  {
    search: '<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">',
    replace: '<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">'
  },
  {
    search: 'Ghausi <span className="text-gold-accent">Enclave</span>\n            </h2>',
    replace: 'Ghausi <span className="text-gold-accent">Enclave</span>\n            </h1>'
  }
]);

// 3. GoldenHeightsGallery.tsx - Swap H1/H2
updateFile(path.join(srcDir, 'pages', 'GoldenHeightsGallery.tsx'), [
  {
    search: '<h1 className="text-gold font-medium tracking-widest uppercase text-sm">PROJECT GALLERY</h1>',
    replace: '<span className="text-gold font-medium tracking-widest uppercase text-sm">PROJECT GALLERY</span>'
  },
  {
    search: '<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">',
    replace: '<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">'
  },
  {
    search: 'Golden <span className="text-gold-accent">Heights</span>\n            </h2>',
    replace: 'Golden <span className="text-gold-accent">Heights</span>\n            </h1>'
  }
]);

// 4. About.tsx - Inject semantic keywords naturally
updateFile(path.join(srcDir, 'components', 'About.tsx'), [
  {
    search: "Home Heart Construction is more than just a real estate developer",
    replace: "Home Heart Construction is more than just a real estate developer in Gaya"
  },
  {
    search: "delivering exceptional residential and commercial spaces.",
    replace: "delivering exceptional luxury apartments and commercial spaces in Bihar."
  }
]);

// 5. MediaGallery.tsx - Add aria-labels to buttons
updateFile(path.join(srcDir, 'pages', 'MediaGallery.tsx'), [
  {
    search: '<button \n            className="absolute top-6 right-6 lg:top-10 lg:right-10 z-[10000] p-3 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white transition-all duration-300 backdrop-blur-md"\n            onClick={closeLightbox}\n          >',
    replace: '<button \n            className="absolute top-6 right-6 lg:top-10 lg:right-10 z-[10000] p-3 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white transition-all duration-300 backdrop-blur-md"\n            onClick={closeLightbox}\n            aria-label="Close Lightbox"\n          >'
  },
  {
    search: '<button \n            className="absolute left-4 lg:left-10 z-[10000] p-3 md:p-4 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white transition-all duration-300 backdrop-blur-md"\n            onClick={prevMedia}\n          >',
    replace: '<button \n            className="absolute left-4 lg:left-10 z-[10000] p-3 md:p-4 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white transition-all duration-300 backdrop-blur-md"\n            onClick={prevMedia}\n            aria-label="Previous Image"\n          >'
  },
  {
    search: '<button \n            className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-[10000] p-3 md:p-4 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white transition-all duration-300 backdrop-blur-md"\n            onClick={nextMedia}\n            style={{ top: \'50%\' }}\n          >',
    replace: '<button \n            className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-[10000] p-3 md:p-4 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white transition-all duration-300 backdrop-blur-md"\n            onClick={nextMedia}\n            aria-label="Next Image"\n            style={{ top: \'50%\' }}\n          >'
  }
]);

// 6. SocialMedia.tsx - Add aria-labels to social links
updateFile(path.join(srcDir, 'components', 'SocialMedia.tsx'), [
  {
    search: 'href={link.url}\n              target="_blank"',
    replace: 'href={link.url}\n              target="_blank"\n              aria-label={link.name}'
  }
]);

console.log("Phase 2 SEO patches applied.");
