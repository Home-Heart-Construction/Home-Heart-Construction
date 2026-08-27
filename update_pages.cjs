const fs = require('fs');

function updateComponent(file) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace('text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight', 'text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]');
  content = content.replace('columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6', 'columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6');
  fs.writeFileSync(file, content);
}

updateComponent('src/pages/GhausiEnclaveGallery.tsx');
updateComponent('src/pages/GoldenHeightsGallery.tsx');
console.log('Done pages');
