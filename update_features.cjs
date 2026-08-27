const fs = require('fs');

let features = fs.readFileSync('src/components/Features.tsx', 'utf8');
features = features.replace('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8');
features = features.replace('text-4xl md:text-5xl font-extrabold', 'text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1]');
fs.writeFileSync('src/components/Features.tsx', features);
console.log('Done Features');
