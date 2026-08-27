const fs = require('fs');

function patch(file, regex, replacement) {
  let code = fs.readFileSync(file, 'utf8');
  code = code.replace(regex, replacement);
  fs.writeFileSync(file, code);
}

patch('src/components/ProjectGallery.tsx', 'className="py-16 bg-primary-bg overflow-hidden relative"', 'className="py-16 bg-[#0A0A0B] overflow-hidden relative force-dark-vars"');

console.log("PG patched");
