const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

code = code.replace(
  /\* {\n  transition-property: background-color, border-color, color, fill, stroke;\n  transition-timing-function: cubic-bezier\(0\.4, 0, 0\.2, 1\);\n  transition-duration: 500ms;\n}\n/,
  ''
);

fs.writeFileSync('src/index.css', code);
