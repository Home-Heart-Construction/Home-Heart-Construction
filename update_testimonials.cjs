const fs = require('fs');

let testimonials = fs.readFileSync('src/components/Testimonials.tsx', 'utf8');
testimonials = testimonials.replace('text-2xl md:text-3xl font-serif italic', 'text-xl sm:text-2xl md:text-3xl font-serif italic');
fs.writeFileSync('src/components/Testimonials.tsx', testimonials);
console.log('Done Testimonials');
