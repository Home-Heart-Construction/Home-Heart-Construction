const fs = require('fs');
const path = require('path');

const beforeAfterPath = path.join(__dirname, 'src', 'components', 'BeforeAfter.tsx');
let baContent = fs.readFileSync(beforeAfterPath, 'utf8');

// Unhide Expand View text on mobile, make it smaller
baContent = baContent.replace(
  '<span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline-block">Expand View</span>',
  '<span className="text-[9px] sm:text-xs font-semibold tracking-wider uppercase inline-block">Expand View</span>'
);

baContent = baContent.replace(
  '<span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline-block">Close View</span>',
  '<span className="text-[9px] sm:text-xs font-semibold tracking-wider uppercase inline-block">Close View</span>'
);

// Fix Expand/Collapse Button padding on mobile
baContent = baContent.replace(
  'className="bg-black/50 hover:bg-gold hover:text-black text-white backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 transition-colors duration-300 cursor-pointer shadow-lg"',
  'className="bg-black/50 hover:bg-gold hover:text-black text-white backdrop-blur-md px-2 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 flex items-center gap-1.5 sm:gap-2 transition-colors duration-300 cursor-pointer shadow-lg"'
);

baContent = baContent.replace(
  'className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center group/expand"',
  'className="absolute top-2 right-2 sm:top-6 sm:right-6 z-50 flex items-center group/expand"'
);

// Fix Before Construction label
baContent = baContent.replace(
  'className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-10"',
  'className="absolute bottom-2 left-2 sm:bottom-6 sm:left-6 bg-black/50 backdrop-blur-md px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-white/10 z-10"'
);

baContent = baContent.replace(
  '<span className="text-white text-xs md:text-sm font-semibold tracking-wider uppercase">Before Construction</span>',
  '<span className="text-white text-[8px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase">Before Construction</span>'
);

// Fix After Construction label
baContent = baContent.replace(
  'className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-10"',
  'className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 bg-black/50 backdrop-blur-md px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-white/10 z-10"'
);

baContent = baContent.replace(
  '<span className="text-white text-xs md:text-sm font-semibold tracking-wider uppercase">After Construction</span>',
  '<span className="text-white text-[8px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase">After Construction</span>'
);

// Make slider handle slightly smaller on mobile
baContent = baContent.replace(
  'className={`absolute top-1/2 -translate-y-1/2 -ml-6 z-40 w-12 h-12 rounded-full',
  'className={`absolute top-1/2 -translate-y-1/2 -ml-4 sm:-ml-6 z-40 w-8 h-8 sm:w-12 sm:h-12 rounded-full'
);

fs.writeFileSync(beforeAfterPath, baContent, 'utf8');
console.log('BeforeAfter patched.');
