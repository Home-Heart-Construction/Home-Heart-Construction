const fs = require('fs');
let code = fs.readFileSync('src/pages/GhausiEnclaveGallery.tsx', 'utf8');

code = code.replace(
  'onClick={() => setSelectedIndex(idx); setScaleLevel(1);}',
  'onClick={() => { setSelectedIndex(idx); setScaleLevel(1); }}'
);
code = code.replace(
  'onClick={() => setSelectedIndex(null); setScaleLevel(1);}',
  'onClick={() => { setSelectedIndex(null); setScaleLevel(1); }}'
);
code = code.replace(
  'onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); setScaleLevel(1); }}',
  'onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); setScaleLevel(1); }}' // wait, it might be already like this.
);

fs.writeFileSync('src/pages/GhausiEnclaveGallery.tsx', code);
