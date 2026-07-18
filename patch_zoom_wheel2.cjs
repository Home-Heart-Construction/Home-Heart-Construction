const fs = require('fs');
let code = fs.readFileSync('src/pages/GoldenHeightsGallery.tsx', 'utf8');

code = code.replace(
  'onWheel={(e) => { e.preventDefault(); if (e.deltaY < 0) setScaleLevel(prev => Math.min(prev + 0.2, 4)); else setScaleLevel(prev => Math.max(prev - 0.2, 1)); }}',
  'onWheel={(e) => { e.stopPropagation(); if (e.deltaY < 0) setScaleLevel(prev => Math.min(prev + 0.5, 4)); else setScaleLevel(prev => Math.max(prev - 0.5, 1)); }}'
);
fs.writeFileSync('src/pages/GoldenHeightsGallery.tsx', code);
