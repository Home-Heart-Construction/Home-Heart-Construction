const fs = require('fs');

// Services.tsx
let services = fs.readFileSync('src/components/Services.tsx', 'utf8');
services = services.replace('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6', 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6');
services = services.replace('className="glass-card p-8 group', 'className="glass-card p-6 sm:p-8 group');
services = services.replace('w-14 h-14', 'w-12 h-12 sm:w-14 sm:h-14');
services = services.replace('mb-20', 'mb-12 md:mb-20');
services = services.replace('text-4xl md:text-5xl font-extrabold', 'text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1]');
fs.writeFileSync('src/components/Services.tsx', services);
console.log('Done Services');
