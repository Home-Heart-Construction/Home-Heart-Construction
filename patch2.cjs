const fs = require('fs');
let code = fs.readFileSync('src/components/MediaHighlights.tsx', 'utf8');

code = code.replace(
  'className="mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2"',
  'className="mt-8 md:mt-0 md:absolute md:right-0 md:bottom-[45%]"'
);

fs.writeFileSync('src/components/MediaHighlights.tsx', code);
