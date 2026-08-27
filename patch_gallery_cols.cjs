const fs = require('fs');
let code = fs.readFileSync('src/pages/GhausiEnclaveGallery.tsx', 'utf8');

code = code.replace(
  'className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"',
  'className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6"'
);

fs.writeFileSync('src/pages/GhausiEnclaveGallery.tsx', code);
