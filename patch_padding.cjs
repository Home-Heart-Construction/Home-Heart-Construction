const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('py-32')) {
    content = content.replace(/\bpy-32\b/g, 'py-16 md:py-32');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated padding in ${file}`);
  }
});
console.log('Padding updated successfully.');
