const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

code = code.replace('force-dark-vars', '');
code = code.replace(/text-white/g, 'text-heading');
code = code.replace('bg-[#0A0A0B]/95', 'bg-primary-bg/95');
code = code.replace('border-white/10', 'border-border-subtle');

fs.writeFileSync('src/components/Navbar.tsx', code);
