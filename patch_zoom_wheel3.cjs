const fs = require('fs');
let code = fs.readFileSync('src/pages/GhausiEnclaveGallery.tsx', 'utf8');

if (!code.includes('onWheel')) {
  code = code.replace(
    'onDoubleClick={() => setScaleLevel(prev => prev === 1 ? 2 : 1)}',
    'onDoubleClick={() => setScaleLevel(prev => prev === 1 ? 2 : 1)} onWheel={(e) => { e.stopPropagation(); if (e.deltaY < 0) setScaleLevel(prev => Math.min(prev + 0.5, 4)); else setScaleLevel(prev => Math.max(prev - 0.5, 1)); }}'
  );
  fs.writeFileSync('src/pages/GhausiEnclaveGallery.tsx', code);
}
