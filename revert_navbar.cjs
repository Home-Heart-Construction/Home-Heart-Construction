const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

code = code.replace(/text-heading/g, 'text-white');
code = code.replace('bg-primary-bg/95', 'bg-[#0A0A0B]/95');

if (!code.includes('force-dark-vars')) {
  code = code.replace(
    'className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${',
    'className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 force-dark-vars ${'
  );
  // Just in case there are 2 spaces:
  code = code.replace(
    'className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${',
    'className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 force-dark-vars ${'
  );
}

// In my patch I replaced border-white/10 with border-border-subtle, I need to restore that too.
// Wait, the mobile menu div had border-border-subtle
code = code.replace(
  'className="md:hidden overflow-hidden bg-[#0A0A0B]/95 backdrop-blur-xl border-b border-border-subtle absolute top-full left-0 right-0 glass-nav"',
  'className="md:hidden overflow-hidden bg-[#0A0A0B]/95 backdrop-blur-xl border-b border-white/10 absolute top-full left-0 right-0 glass-nav"'
);

fs.writeFileSync('src/components/Navbar.tsx', code);
