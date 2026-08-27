const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

code = code.replace(
  'import { Link } from "react-router-dom";',
  'import { Link, useLocation } from "react-router-dom";'
);

if (!code.includes('const location = useLocation();')) {
  code = code.replace(
    'export function Navbar() {',
    'export function Navbar() {\n  const location = useLocation();'
  );
}

// For desktop
code = code.replace(
  'className="text-sm font-medium nav-link-text relative group"',
  'className={`text-sm font-medium nav-link-text relative group ${(location.hash === link.href || (location.pathname === "/" && location.hash === "" && link.href === "#home")) ? "text-gold" : ""}`}'
);

// For mobile
code = code.replace(
  'className="block px-3 py-4 text-base font-medium nav-link-text hover:bg-white/5 rounded-xl"',
  'className={`block px-3 py-4 text-base font-medium nav-link-text hover:bg-white/5 rounded-xl ${(location.hash === link.href || (location.pathname === "/" && location.hash === "" && link.href === "#home")) ? "text-gold" : ""}`}'
);

fs.writeFileSync('src/components/Navbar.tsx', code);
