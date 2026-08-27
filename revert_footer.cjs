const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.tsx', 'utf8');

code = code.replace('bg-secondary-bg', 'bg-[#050505]');
// I replaced 'border-white/5' -> 'border-border-subtle' and 'border-white/10' -> 'border-border-subtle'
// The footer has border-t border-border-subtle on the <footer ...>
// and border-t border-border-subtle on the inner div
code = code.replace(
  '<footer className="bg-[#050505] pt-20 pb-10 border-t border-border-subtle',
  '<footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5'
);
code = code.replace(
  'pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4',
  'pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4'
);

code = code.replace(/text-heading/g, 'text-white');

// For the description:
code = code.replace(
  '<p className="text-text-muted text-sm leading-relaxed mb-6">\n              Building luxury homes and commercial spaces with an unwavering commitment to quality, design, and customer satisfaction.\n            </p>',
  '<p className="footer-body-text text-sm leading-relaxed mb-6">\n              Building luxury homes and commercial spaces with an unwavering commitment to quality, design, and customer satisfaction.\n            </p>'
);

// For the footer links
code = code.replace(/className="text-white hover:text-gold text-xs transition-colors"/g, 'className="footer-link hover:text-gold text-xs transition-colors"');

fs.writeFileSync('src/components/Footer.tsx', code);
