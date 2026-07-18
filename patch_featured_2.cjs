const fs = require('fs');
let code = fs.readFileSync('src/components/FeaturedProject.tsx', 'utf8');

code = code.replace(
  'className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-105"',
  'className="w-full h-full object-cover object-[center_30%] absolute inset-0 transition-transform duration-1000 group-hover:scale-105"'
);

fs.writeFileSync('src/components/FeaturedProject.tsx', code);
