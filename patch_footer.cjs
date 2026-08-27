const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Replace bg-[#050505] with standard bg
code = code.replace('bg-[#050505]', 'bg-secondary-bg');
code = code.replace('border-white/5', 'border-border-subtle');
code = code.replace('border-white/10', 'border-border-subtle');

// Make text adapt to theme
code = code.replace(/text-white/g, 'text-heading');
code = code.replace(/footer-body-text/g, 'text-text-muted');
code = code.replace(/footer-link/g, 'text-heading');

fs.writeFileSync('src/components/Footer.tsx', code);
