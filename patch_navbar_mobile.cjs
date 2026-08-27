const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

code = code.replace(
  'className="md:hidden overflow-hidden bg-primary-bg/95 backdrop-blur-xl border-b border-white/10 absolute top-full left-0 right-0"',
  'className="md:hidden overflow-hidden bg-[#0A0A0B]/95 backdrop-blur-xl border-b border-white/10 absolute top-full left-0 right-0 glass-nav"'
);

fs.writeFileSync('src/components/Navbar.tsx', code);
console.log("Navbar mobile patched");
