const fs = require('fs');
let code = fs.readFileSync('src/components/FeaturedProject.tsx', 'utf8');

code = code.replace(/bg-secondary-bg\/50/g, 'bg-black/60');

fs.writeFileSync('src/components/FeaturedProject.tsx', code);
