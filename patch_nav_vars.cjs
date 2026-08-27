const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// The outer <nav> element currently is:
// <nav
//   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//     isScrolled ? 'py-4' : 'py-6'
//   }`}
// >
// We can just append a class to it, e.g., 'force-dark-vars'
code = code.replace(
  "className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${",
  "className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 force-dark-vars ${"
);

fs.writeFileSync('src/components/Navbar.tsx', code);
console.log("Navbar patched with force-dark-vars");
