const fs = require('fs');

function patch(file, regex, replacement) {
  let code = fs.readFileSync(file, 'utf8');
  code = code.replace(regex, replacement);
  fs.writeFileSync(file, code);
}

patch('src/components/Hero.tsx', 'id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"', 'id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden force-dark-vars"');
patch('src/components/FeaturedProject.tsx', 'id="projects" className="relative py-32 overflow-hidden bg-primary-bg isolate"', 'id="projects" className="relative py-32 overflow-hidden bg-[#0A0A0B] isolate force-dark-vars"');
patch('src/components/ProjectGalleryGoldenHeights.tsx', 'id="project-gallery-golden-heights" className="relative py-32 overflow-hidden bg-primary-bg isolate"', 'id="project-gallery-golden-heights" className="relative py-32 overflow-hidden bg-[#0A0A0B] isolate force-dark-vars"');

// Note: I also forced bg-[#0A0A0B] instead of bg-primary-bg so they don't change background in light theme!
console.log("Dark sections patched");
