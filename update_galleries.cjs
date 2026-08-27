const fs = require('fs');

function updateGallery(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace('flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left', 'flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-10 text-center md:text-left px-4 sm:px-0');
  content = content.replace('text-4xl md:text-5xl font-extrabold', 'text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1]');
  content = content.replace('className="flex w-max" ref={scrollerRef}', 'className="flex w-max gap-3 sm:gap-4 md:gap-5 px-4" ref={scrollerRef}');
  content = content.replace('w-[280px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] flex-shrink-0 px-3 md:px-4 cursor-pointer group', 'w-[280px] h-[190px] sm:w-[400px] sm:h-[280px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] flex-shrink-0 cursor-pointer group');
  fs.writeFileSync(file, content);
}

if (fs.existsSync('src/components/ProjectGallery.tsx')) updateGallery('src/components/ProjectGallery.tsx');
if (fs.existsSync('src/components/ProjectGalleryGoldenHeights.tsx')) updateGallery('src/components/ProjectGalleryGoldenHeights.tsx');

let team = fs.readFileSync('src/components/Team.tsx', 'utf8');
team = team.replace('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8', 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8');
team = team.replace('text-4xl md:text-5xl font-extrabold', 'text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1]');
fs.writeFileSync('src/components/Team.tsx', team);
console.log('Done Galleries and Team');
