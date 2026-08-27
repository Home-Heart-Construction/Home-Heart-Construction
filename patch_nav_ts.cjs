const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Replace desktop links
code = code.replace(
  'className="text-sm font-medium text-text-muted hover:text-gold transition-colors duration-300 relative group"',
  'className="text-sm font-medium nav-link-text relative group"'
);

// Replace mobile links
code = code.replace(
  'className="block px-3 py-4 text-base font-medium text-text-muted hover:text-gold hover:bg-white/5 rounded-xl transition-colors"',
  'className="block px-3 py-4 text-base font-medium nav-link-text hover:bg-white/5 rounded-xl"'
);

fs.writeFileSync('src/components/Navbar.tsx', code);
