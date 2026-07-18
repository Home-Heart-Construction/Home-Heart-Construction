const fs = require('fs');

function updateComponent(file) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace('text-4xl md:text-5xl lg:text-6xl font-extrabold', 'text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]');
  content = content.replace('text-4xl md:text-5xl font-extrabold', 'text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1]');
  fs.writeFileSync(file, content);
}

updateComponent('src/components/BeforeAfter.tsx');
updateComponent('src/components/MediaHighlights.tsx');
updateComponent('src/components/Testimonials.tsx');
updateComponent('src/components/FAQ.tsx');
updateComponent('src/components/Contact.tsx');

let media = fs.readFileSync('src/components/MediaHighlights.tsx', 'utf8');
media = media.replace('className="flex w-max" ref={scrollerRef}', 'className="flex w-max gap-3 sm:gap-4 md:gap-5 px-4" ref={scrollerRef}');
media = media.replace('w-[280px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px]', 'w-[280px] h-[190px] sm:w-[400px] sm:h-[280px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px]');
fs.writeFileSync('src/components/MediaHighlights.tsx', media);

console.log('Done remaining');
