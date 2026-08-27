const fs = require('fs');
const path = require('path');
const glob = require('glob');

const srcDir = path.join(__dirname, 'src');
const files = glob.sync(`${srcDir}/**/*.tsx`);

let updatedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;

  // Replace any instance of `/ decoding="async"` with `decoding="async"`
  content = content.replace(/\/\s*decoding="async"/g, 'decoding="async"');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    updatedCount++;
    console.log(`Fixed: ${path.relative(__dirname, file)}`);
  }
});

console.log(`Successfully fixed ${updatedCount} files.`);
