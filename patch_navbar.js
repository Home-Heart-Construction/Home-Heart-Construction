const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Remove force-dark-vars
code = code.replace('force-dark-vars', '');

// Replace text-white with text-heading
code = code.replace(/text-white/g, 'text-heading');

// Remove the specific span text-white as well
// <span className="text-white">Home</span>
// is already replaced to text-heading

fs.writeFileSync('src/components/Navbar.tsx', code);
