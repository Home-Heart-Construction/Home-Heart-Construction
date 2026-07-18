const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

code = code.replace(
  '.glass-card {',
  `.glass-card {
    --color-text-muted: rgba(255, 255, 255, 0.72);
    --color-text-main: #F8F8F8;
    --color-border-subtle: rgba(255, 255, 255, 0.10);`
);

fs.writeFileSync('src/index.css', code);
console.log("Glass card 2 patched");
