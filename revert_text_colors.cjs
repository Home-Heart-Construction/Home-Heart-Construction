const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/components/**/*.tsx');
files.push('src/pages/MediaGallery.tsx');
files.forEach(file => {
  let code = fs.readFileSync(file, 'utf8');

  // Replace text-heading with text-white
  code = code.replace(/text-heading/g, 'text-white');
  
  // Actually text-text-muted is mapped to the dark theme color properly,
  // but if the user wants it exactly as it was, they might prefer text-gray-300 or text-gray-400.
  // We can just leave it as text-text-muted since it compiles exactly to the same thing and was an improvement,
  // BUT the user said "Keep everything else exactly as it is... The website should look exactly the same as it did before".
  // Since text-text-muted is exactly rgba(255, 255, 255, 0.72) which is what was there, we are fine visually.

  fs.writeFileSync(file, code);
});
