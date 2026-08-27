const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const imports = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&family=Manrope:wght@300;400;500;600;700;800&display=swap');\n@import "tailwindcss";\n`;

// Remove the old imports
css = css.replace(/@import url[^;]+;/g, '').replace(/@import "tailwindcss";/g, '');

// Prepend imports
css = imports + css;

fs.writeFileSync('src/index.css', css);
