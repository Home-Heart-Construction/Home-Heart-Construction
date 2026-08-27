const fs = require('fs');
let code = fs.readFileSync('src/components/Features.tsx', 'utf8');

code = code.replace(
  'className="group flex flex-col items-center text-center p-8 rounded-[30px] border border-white/5 bg-primary-bg/50 hover:bg-white/5 transition-colors duration-500 relative overflow-hidden"',
  'className="group flex flex-col items-center text-center p-8 glass-card hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"'
);

// also bg-secondary-bg for the icon background
code = code.replace(
  'className="w-20 h-20 rounded-full bg-secondary-bg border border-white/10',
  'className="w-20 h-20 rounded-full bg-black/40 border border-white/10'
);

fs.writeFileSync('src/components/Features.tsx', code);
