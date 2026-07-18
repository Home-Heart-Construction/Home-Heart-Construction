const fs = require('fs');
let code = fs.readFileSync('src/components/MediaHighlights.tsx', 'utf8');

code = code.replace(
  'className="mt-8 md:mt-0 md:absolute md:right-0 md:-bottom-[64px]"',
  'className="mt-8 md:mt-0 md:absolute md:right-0 md:-bottom-12"'
);

fs.writeFileSync('src/components/MediaHighlights.tsx', code);
