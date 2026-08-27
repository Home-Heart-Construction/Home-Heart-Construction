const fs = require('fs');

['src/components/ProjectGallery.tsx', 'src/components/ProjectGalleryGoldenHeights.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    'className="text-4xl md:text-5xl font-extrabold tracking-tight"',
    'className="text-4xl md:text-5xl font-extrabold tracking-tight text-heading"'
  );
  fs.writeFileSync(file, content);
});
console.log("Patched gallery headings");
