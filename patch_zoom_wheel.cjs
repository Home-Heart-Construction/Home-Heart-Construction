const fs = require('fs');
let code = fs.readFileSync('src/pages/GoldenHeightsGallery.tsx', 'utf8');

if (!code.includes('onWheel')) {
  code = code.replace(
    'onDoubleClick={() => setScaleLevel(prev => prev === 1 ? 2 : 1)}',
    'onDoubleClick={() => setScaleLevel(prev => prev === 1 ? 2 : 1)} onWheel={(e) => { e.preventDefault(); if (e.deltaY < 0) setScaleLevel(prev => Math.min(prev + 0.2, 4)); else setScaleLevel(prev => Math.max(prev - 0.2, 1)); }}'
  );
  fs.writeFileSync('src/pages/GoldenHeightsGallery.tsx', code);
}
