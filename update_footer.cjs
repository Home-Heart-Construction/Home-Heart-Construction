const fs = require('fs');

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace('grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8', 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8');
footer = footer.replace('text-4xl font-extrabold', 'text-[32px] sm:text-4xl font-extrabold');
footer = footer.replace('text-2xl font-bold', 'text-xl sm:text-2xl font-bold');
fs.writeFileSync('src/components/Footer.tsx', footer);
console.log('Done Footer');
