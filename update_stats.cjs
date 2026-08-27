const fs = require('fs');

if (fs.existsSync('src/components/Stats.tsx')) {
  let stats = fs.readFileSync('src/components/Stats.tsx', 'utf8');
  stats = stats.replace('text-5xl md:text-6xl font-extrabold', 'text-[40px] sm:text-5xl md:text-6xl font-extrabold leading-none');
  stats = stats.replace('grid-cols-2 lg:grid-cols-4 gap-8', 'grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8');
  fs.writeFileSync('src/components/Stats.tsx', stats);
  console.log('Done Stats');
}
