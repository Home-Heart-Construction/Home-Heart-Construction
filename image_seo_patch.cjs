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

// 1. ProjectGallery.tsx
updateFile(path.join(srcDir, 'components', 'ProjectGallery.tsx'), [
  {
    search: 'alt="Project Gallery"',
    replace: 'alt="Ghausi Enclave Luxury Apartments Project Gallery in Gaya"'
  },
  {
    search: 'alt="Fullscreen Project View"',
    replace: 'alt="Ghausi Enclave Luxury Apartments Fullscreen View"'
  }
]);

// 2. ProjectGalleryGoldenHeights.tsx
updateFile(path.join(srcDir, 'components', 'ProjectGalleryGoldenHeights.tsx'), [
  {
    search: 'alt="Project Gallery"',
    replace: 'alt="Golden Heights Premium Apartments Project Gallery in Gaya"'
  },
  {
    search: 'alt="Fullscreen Project View"',
    replace: 'alt="Golden Heights Premium Apartments Fullscreen View"'
  }
]);

// 3. MediaHighlights.tsx
updateFile(path.join(srcDir, 'components', 'MediaHighlights.tsx'), [
  {
    search: 'alt="HomeHeart Media Highlight"',
    replace: 'alt="Home Heart Construction Media Highlight - Real Estate Developers in Bihar"'
  }
]);

console.log("Image alt texts patched successfully.");
