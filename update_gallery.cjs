const fs = require('fs');

let gallery = fs.readFileSync('src/components/Gallery.tsx', 'utf8');
gallery = gallery.replace('text-4xl md:text-5xl font-extrabold', 'text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1]');
fs.writeFileSync('src/components/Gallery.tsx', gallery);
console.log('Done Gallery');
