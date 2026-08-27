const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes("import { GoldenHeightsGallery } from './pages/GoldenHeightsGallery';")) {
  code = code.replace(
    "import { GhausiEnclaveGallery } from './pages/GhausiEnclaveGallery';",
    "import { GhausiEnclaveGallery } from './pages/GhausiEnclaveGallery';\nimport { GoldenHeightsGallery } from './pages/GoldenHeightsGallery';"
  );
  
  code = code.replace(
    '<Route path="/projects/ghausi-enclave/gallery" element={<GhausiEnclaveGallery />} />',
    '<Route path="/projects/ghausi-enclave/gallery" element={<GhausiEnclaveGallery />} />\n          <Route path="/projects/golden-heights/gallery" element={<GoldenHeightsGallery />} />'
  );

  fs.writeFileSync('src/App.tsx', code);
}
