const fs = require('fs');
let code = fs.readFileSync('src/components/FeaturedProject.tsx', 'utf8');

const regex = /<\/motion\.div>\s*<\/div>\s*<\/section>/;

code = code.replace(regex, `</motion.div>\n      </div>\n\n      <ProjectGalleryGoldenHeights />\n    </section>`);

fs.writeFileSync('src/components/FeaturedProject.tsx', code);
console.log("End patched");
