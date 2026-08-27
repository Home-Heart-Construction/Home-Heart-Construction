const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

code = code.replace(
  '--color-glass: rgba(10, 10, 11, 0.85);',
  '--color-glass: rgba(255, 255, 255, 0.5);\n  --color-border-subtle: rgba(0, 0, 0, 0.1);'
);

fs.writeFileSync('src/index.css', code);
