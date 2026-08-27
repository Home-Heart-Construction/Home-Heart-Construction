const fs = require('fs');
let code = fs.readFileSync('src/pages/GhausiEnclaveGallery.tsx', 'utf8');

if (!code.includes('handleTouchStart')) {
  code = code.replace(
    "export function GhausiEnclaveGallery() {",
    `export function GhausiEnclaveGallery() {
  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || selectedIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;
    
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 50) {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
      } else if (diffX < -50) {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };
`
  );

  code = code.replace(
    '          <motion.div \n            initial={{ opacity: 0 }}',
    '          <motion.div \n            onTouchStart={handleTouchStart}\n            onTouchEnd={handleTouchEnd}\n            initial={{ opacity: 0 }}'
  );

  fs.writeFileSync('src/pages/GhausiEnclaveGallery.tsx', code);
}
