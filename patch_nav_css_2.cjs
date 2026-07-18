const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

code = code.replace(
  '.nav-link-text {\n  color: #FFFFFF;\n  transition: color 500ms ease;\n}\nhtml.light-theme .nav-link-text {\n  color: #2C2C2C;\n}\nhtml.light-theme .nav-link-text:hover, .nav-link-text:hover {\n  color: var(--color-gold);\n}',
  '.nav-link-text {\n  transition: color 500ms ease;\n}\n.nav-link-text:not(.text-gold) {\n  color: #FFFFFF;\n}\nhtml.light-theme .nav-link-text:not(.text-gold) {\n  color: #2C2C2C;\n}\nhtml.light-theme .nav-link-text:hover, .nav-link-text:hover {\n  color: var(--color-gold) !important;\n}'
);

fs.writeFileSync('src/index.css', code);
