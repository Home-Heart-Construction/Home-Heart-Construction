const fs = require('fs');
const path = require('path');

// Patch Team.tsx
const teamPath = path.join(__dirname, 'src', 'components', 'Team.tsx');
let teamContent = fs.readFileSync(teamPath, 'utf8');

teamContent = teamContent.replace(
  'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"',
  'className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8"'
);

teamContent = teamContent.replace(
  /className="glass-card rounded-\[20px\] p-6 flex flex-col items-center/g,
  'className="glass-card rounded-[20px] p-3 sm:p-6 flex flex-col items-center'
);

teamContent = teamContent.replace(
  /w-\[150px\] h-\[150px\] mb-5/g,
  'w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] mb-3 sm:mb-5'
);

teamContent = teamContent.replace(
  /<h4 className="text-xl font-bold text-white mb-1">/g,
  '<h4 className="text-[13px] sm:text-xl font-bold text-white mb-1 leading-tight">'
);

teamContent = teamContent.replace(
  /<p className="text-gold text-xs font-medium tracking-wide uppercase mb-4">/g,
  '<p className="text-gold text-[9px] sm:text-xs font-medium tracking-wide uppercase mb-2 sm:mb-4">'
);

teamContent = teamContent.replace(
  /<div className="w-\[50px\] h-\[2px\] bg-gold\/50 group-hover:bg-gold transition-colors duration-300 mb-4"><\/div>/g,
  '<div className="w-[30px] sm:w-[50px] h-[2px] bg-gold/50 group-hover:bg-gold transition-colors duration-300 mb-2 sm:mb-4"></div>'
);

teamContent = teamContent.replace(
  /<p className="text-text-muted text-sm font-light leading-relaxed">/g,
  '<p className="text-text-muted text-[10px] sm:text-sm font-light leading-snug sm:leading-relaxed">'
);

fs.writeFileSync(teamPath, teamContent, 'utf8');
console.log('Team.tsx patched for 2-column mobile.');

// Patch Features.tsx
const featuresPath = path.join(__dirname, 'src', 'components', 'Features.tsx');
let featuresContent = fs.readFileSync(featuresPath, 'utf8');

featuresContent = featuresContent.replace(
  'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"',
  'className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8"'
);

featuresContent = featuresContent.replace(
  /className="glass-card p-8 sm:p-10 rounded-\[32px\]/g,
  'className="glass-card p-4 sm:p-10 rounded-[24px] sm:rounded-[32px]'
);

featuresContent = featuresContent.replace(
  /className="w-16 h-16 sm:w-20 sm:h-20/g,
  'className="w-10 h-10 sm:w-20 sm:h-20'
);

featuresContent = featuresContent.replace(
  /className="w-8 h-8 sm:w-10 sm:h-10 text-gold/g,
  'className="w-5 h-5 sm:w-10 sm:h-10 text-gold'
);

featuresContent = featuresContent.replace(
  /className="text-2xl sm:text-3xl font-bold mb-4/g,
  'className="text-sm sm:text-3xl font-bold mb-2 sm:mb-4'
);

featuresContent = featuresContent.replace(
  /<p className="text-text-muted text-base sm:text-lg leading-relaxed font-light">/g,
  '<p className="text-text-muted text-[10px] sm:text-lg leading-relaxed font-light">'
);

featuresContent = featuresContent.replace(
  /<div className="w-12 h-\[2px\] bg-gold\/50 mb-6/g,
  '<div className="w-8 sm:w-12 h-[2px] bg-gold/50 mb-3 sm:mb-6'
);

fs.writeFileSync(featuresPath, featuresContent, 'utf8');
console.log('Features.tsx patched for 2-column mobile.');
