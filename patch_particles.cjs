const fs = require('fs');
let code = fs.readFileSync('src/components/Particles.tsx', 'utf8');

code = code.replace(
  'className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"',
  'className="absolute inset-0 z-[1] pointer-events-none overflow-hidden particles-container"'
);

fs.writeFileSync('src/components/Particles.tsx', code);
