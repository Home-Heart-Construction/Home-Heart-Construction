const fs = require('fs');
let code = fs.readFileSync('src/components/MediaHighlights.tsx', 'utf8');

code = code.replace(
  'className="mt-8 md:mt-0 md:absolute md:right-0 md:bottom-[45%]"',
  'className="mt-8 md:mt-0 md:absolute md:right-0 md:-bottom-[64px] translate-y-[50%]"'
);

fs.writeFileSync('src/components/MediaHighlights.tsx', code);
