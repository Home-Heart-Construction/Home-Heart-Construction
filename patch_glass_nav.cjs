const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

code = code.replace(
  '.glass-nav {',
  `.glass-nav {
    --color-text-muted: rgba(255, 255, 255, 0.72);
    --color-text-main: #F8F8F8;`
);

fs.writeFileSync('src/index.css', code);
console.log("Glass nav patched");
