const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

code += `
.nav-link-text {
  color: #FFFFFF;
  transition: color 500ms ease;
}
html.light-theme .nav-link-text {
  color: #2C2C2C;
}
html.light-theme .nav-link-text:hover, .nav-link-text:hover {
  color: var(--color-gold);
}
`;
fs.writeFileSync('src/index.css', code);
