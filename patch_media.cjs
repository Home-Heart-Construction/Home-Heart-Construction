const fs = require('fs');
let code = fs.readFileSync('src/pages/MediaGallery.tsx', 'utf8');

if (!code.includes('useNavigate')) {
  code = code.replace(
    "import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';",
    "import { X, ChevronLeft, ChevronRight, Play, ArrowLeft } from 'lucide-react';\nimport { useNavigate } from 'react-router-dom';"
  );
}

if (!code.includes('const navigate = useNavigate();')) {
  code = code.replace(
    'export function MediaGallery() {\n  const [lightboxOpen',
    'export function MediaGallery() {\n  const navigate = useNavigate();\n  const [lightboxOpen'
  );
}

const backButtonCode = `
      {/* Premium Back Button */}
      <div className="fixed top-24 left-4 sm:left-8 z-40">
        <button
          onClick={() => {
            if (window.history.length > 2) {
              navigate(-1);
            } else {
              navigate('/');
            }
          }}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-glass backdrop-blur-md border border-gold text-heading hover:bg-gold hover:text-black transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(200,164,106,0.3)] group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="font-medium text-sm">Back</span>
        </button>
      </div>
`;

if (!code.includes('Premium Back Button')) {
  code = code.replace(
    '<div className="pt-24 min-h-screen bg-primary-bg relative isolate overflow-hidden">',
    '<div className="pt-24 min-h-screen bg-primary-bg relative isolate overflow-hidden">\n' + backButtonCode
  );
}

fs.writeFileSync('src/pages/MediaGallery.tsx', code);
