const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes("import { GhausiEnclaveGallery } from './pages/GhausiEnclaveGallery';")) {
  code = code.replace(
    "import { MediaGallery } from './pages/MediaGallery';",
    "import { MediaGallery } from './pages/MediaGallery';\nimport { GhausiEnclaveGallery } from './pages/GhausiEnclaveGallery';"
  );
  
  code = code.replace(
    '<Route path="/media" element={<MediaGallery />} />',
    '<Route path="/media" element={<MediaGallery />} />\n          <Route path="/projects/ghausi-enclave/gallery" element={<GhausiEnclaveGallery />} />'
  );

  fs.writeFileSync('src/App.tsx', code);
}
