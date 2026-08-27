const fs = require('fs');
let code = fs.readFileSync('src/pages/GhausiEnclaveGallery.tsx', 'utf8');

if (!code.includes('scaleLevel')) {
  code = code.replace(
    "const [selectedIndex, setSelectedIndex] = useState<number | null>(null);",
    "const [selectedIndex, setSelectedIndex] = useState<number | null>(null);\n  const [scaleLevel, setScaleLevel] = useState(1);"
  );

  code = code.replace(
    "setSelectedIndex(idx)",
    "setSelectedIndex(idx); setScaleLevel(1);"
  );
  
  code = code.replace(
    "setSelectedIndex(null)",
    "setSelectedIndex(null); setScaleLevel(1);"
  );

  // handle close buttons etc that set to null or other index
  // Just a simple double click to zoom is enough. 
  
  code = code.replace(
    'onClick={(e) => e.stopPropagation()}',
    'onClick={(e) => e.stopPropagation()} onDoubleClick={() => setScaleLevel(prev => prev === 1 ? 2 : 1)} style={{ overflow: scaleLevel > 1 ? "auto" : "hidden" }}'
  );
  
  code = code.replace(
    'style={{ maxHeight: \'90vh\', maxWidth: \'90vw\' }}',
    'style={{ maxHeight: \'90vh\', maxWidth: \'90vw\', transform: `scale(${scaleLevel})`, transition: "transform 0.3s ease", cursor: scaleLevel > 1 ? "grab" : "zoom-in" }}'
  );

  fs.writeFileSync('src/pages/GhausiEnclaveGallery.tsx', code);
}
