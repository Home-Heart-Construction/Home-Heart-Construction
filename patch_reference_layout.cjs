const fs = require('fs');
const path = require('path');

// Patch Awards.tsx
const awardsPath = path.join(__dirname, 'src', 'components', 'Awards.tsx');
let awardsContent = fs.readFileSync(awardsPath, 'utf8');

awardsContent = awardsContent.replace(
  'className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center justify-center max-w-5xl mx-auto"',
  'className="grid grid-cols-2 gap-4 sm:gap-10 md:gap-16 lg:gap-20 items-center justify-center max-w-5xl mx-auto"'
);

awardsContent = awardsContent.replace(
  'className="relative w-full aspect-[3/4] sm:aspect-auto sm:h-[320px] lg:h-[380px] bg-[#1A1108] rounded-sm',
  'className="relative w-full aspect-[1.4] sm:aspect-auto sm:h-[320px] lg:h-[380px] bg-[#1A1108] rounded-sm'
);

fs.writeFileSync(awardsPath, awardsContent, 'utf8');
console.log('Awards.tsx patched successfully.');

// Patch FeaturedProject.tsx
const featuredPath = path.join(__dirname, 'src', 'components', 'FeaturedProject.tsx');
let featuredContent = fs.readFileSync(featuredPath, 'utf8');

featuredContent = featuredContent.replace(
  /<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">/g,
  '<div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">'
);

// We need to scale down the text size of the buttons slightly on mobile so they fit in 2 columns
featuredContent = featuredContent.replace(
  /text-sm flex items-center justify-center/g,
  'text-[11px] sm:text-sm flex items-center justify-center text-center leading-tight'
);

featuredContent = featuredContent.replace(
  /text-sm flex items-center justify-center gap-2/g,
  'text-[11px] sm:text-sm flex items-center justify-center gap-1 sm:gap-2 text-center leading-tight'
);

fs.writeFileSync(featuredPath, featuredContent, 'utf8');
console.log('FeaturedProject.tsx patched successfully.');
