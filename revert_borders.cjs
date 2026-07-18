const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/components/**/*.tsx');
files.push('src/pages/MediaGallery.tsx');
files.forEach(file => {
  let code = fs.readFileSync(file, 'utf8');

  // Replace border-border-subtle with border-white/10
  code = code.replace(/border-border-subtle/g, 'border-white/10');

  fs.writeFileSync(file, code);
});
