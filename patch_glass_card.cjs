const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

code = code.replace(
  '@apply bg-glass backdrop-blur-xl border border-border-subtle rounded-[30px] overflow-hidden relative z-[5];',
  '@apply bg-glass backdrop-blur-xl border border-border-subtle rounded-[30px] overflow-hidden relative z-[5] text-[#F8F8F8];'
);

fs.writeFileSync('src/index.css', code);
console.log("Glass card patched");
