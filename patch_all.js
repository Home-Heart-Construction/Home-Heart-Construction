import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');
const files = globSync(`${srcDir}/**/*.tsx`);

let updatedCount = 0;

files.forEach(file => {
  if (file.includes('App.tsx') || file.includes('main.tsx') || file.includes('Home.tsx') || file.includes('Hero.tsx')) {
    return; // skip these files
  }

  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;

  // 1. Add loading="lazy" and decoding="async" to images (except Hero, which is skipped)
  // Don't add if already present. We'll use a regex that handles various formats.
  content = content.replace(/<img([^>]*)>/g, (match, attrs) => {
    let newAttrs = attrs;
    if (!attrs.includes('loading=')) newAttrs += ' loading="lazy"';
    if (!attrs.includes('decoding=')) newAttrs += ' decoding="async"';
    return `<img${newAttrs}>`;
  });

  // 2. Add { passive: true } to scroll and touch listeners
  content = content.replace(/addEventListener\('((?:touchmove|touchstart|wheel|scroll|mousemove))',\s*([^),]+)(?:\s*,\s*[^)]*)?\)/g, (match, event, handler) => {
      // Ensure we don't break listeners that need preventDefault (like BeforeAfter touchmove)
      if (file.includes('BeforeAfter.tsx') && (event === 'touchmove' || event === 'mousemove')) {
          return match; // Keep existing behavior
      }
      return `addEventListener('${event}', ${handler}, { passive: true })`;
  });


  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    updatedCount++;
    console.log(`Updated: ${path.relative(__dirname, file)}`);
  }
});

console.log(`Successfully updated ${updatedCount} files.`);
