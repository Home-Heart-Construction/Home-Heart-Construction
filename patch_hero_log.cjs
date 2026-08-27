const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');
code = code.replace(
  'export function Hero() {',
  'export function Hero() { console.log("Hero rendering!");'
);
fs.writeFileSync('src/components/Hero.tsx', code);
