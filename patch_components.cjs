const fs = require('fs');

const replaceInFile = (file, searchRegex, replacement) => {
  if (fs.existsSync(file)) {
    let code = fs.readFileSync(file, 'utf8');
    code = code.replace(searchRegex, replacement);
    fs.writeFileSync(file, code);
  }
};

// Replace text-white with text-heading in specific files
const filesToPatch = [
  'src/components/About.tsx',
  'src/components/Services.tsx',
  'src/components/Gallery.tsx',
  'src/components/Stats.tsx',
  'src/components/Features.tsx',
  'src/components/Testimonials.tsx',
  'src/components/Contact.tsx',
  'src/components/FAQ.tsx',
];

filesToPatch.forEach(file => {
  let code = fs.readFileSync(file, 'utf8');
  // Need to be careful. We only replace text-white when it's not part of text-white/5 etc
  // We can use a regex: /text-white(?![/\w])/g
  code = code.replace(/text-white(?![/\w\-])/g, 'text-heading');
  fs.writeFileSync(file, code);
});

// For FAQ hover
let faqCode = fs.readFileSync('src/components/FAQ.tsx', 'utf8');
faqCode = faqCode.replace(
  "openIndex === index ? 'bg-white/5 border-gold/30 shadow-[0_8px_32px_rgba(200,164,106,0.05)]' : 'hover:bg-white/5 hover:border-white/10'",
  "openIndex === index ? 'border-gold/50 shadow-[0_8px_32px_rgba(200,164,106,0.15)]' : 'hover:border-gold/30 hover:-translate-y-1 hover:shadow-lg'"
);
// Make sure to remove bg-white/5 and hover:bg-white/5, so we rely on the base glass-card background
fs.writeFileSync('src/components/FAQ.tsx', faqCode);

// Update Footer colors
let footerCode = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footerCode = footerCode.replace(
  '<footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative isolate overflow-hidden">',
  '<footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative isolate overflow-hidden footer-dark-section">'
);
// text-text-muted is used in footer, we want it to be footer-body-text, but we can leave it as text-text-muted since .footer-dark-section resets it to white/72!
// Wait, we should replace `text-text-muted` in Footer links to hover:text-gold
footerCode = footerCode.replace(/text-text-muted hover:text-white/g, 'footer-link hover:text-gold');
footerCode = footerCode.replace(/text-text-muted text-sm leading-relaxed mb-6/g, 'footer-body-text text-sm leading-relaxed mb-6');

fs.writeFileSync('src/components/Footer.tsx', footerCode);

console.log("Patched components!");
