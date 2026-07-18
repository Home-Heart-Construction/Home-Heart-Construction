const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/1,500;1,600&family=Manrope:wght@300;400;500;600;700;800&display=swap'\);/, '');
fs.writeFileSync('src/index.css', css);
