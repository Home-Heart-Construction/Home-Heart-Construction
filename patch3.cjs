const fs = require('fs');

// 1. Remove ProjectGallery from App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace("import { ProjectGallery } from './components/ProjectGallery';\n", "");
app = app.replace("      <ProjectGallery />\n", "");
fs.writeFileSync('src/App.tsx', app);

// 2. Add ProjectGallery into FeaturedProject.tsx
let fp = fs.readFileSync('src/components/FeaturedProject.tsx', 'utf8');
fp = fp.replace(
  "import React from 'react';",
  "import React from 'react';\nimport { ProjectGallery } from './ProjectGallery';"
);

fp = fp.replace(
  "        </motion.div>\n\n        {/* Golden Heights Project */}",
  `        </motion.div>\n      </div>\n\n      <ProjectGallery />\n\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">\n        {/* Golden Heights Project */}`
);

fs.writeFileSync('src/components/FeaturedProject.tsx', fp);
console.log("Done");
