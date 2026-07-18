const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

code = code.replace(
  '.glass-nav {',
  `.force-dark-vars {
    --color-text-muted: rgba(255, 255, 255, 0.72);
    --color-text-main: #F8F8F8;
    --color-heading: #FFFFFF;
    color: var(--color-text-main);
  }
  .glass-nav {`
);

fs.writeFileSync('src/index.css', code);
console.log("CSS patched");
