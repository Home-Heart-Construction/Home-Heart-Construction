const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

// For glass-nav
code = code.replace(
  '.glass-nav {\n    @apply bg-[#0A0A0B]/70 backdrop-blur-lg border border-white/10 shadow-lg relative z-[50];\n    --color-text-muted: rgba(255, 255, 255, 0.72);\n    --color-text-main: #F8F8F8;\n    --color-heading: #FFFFFF;\n  }',
  '.glass-nav {\n    @apply backdrop-blur-lg shadow-lg relative z-[50];\n    background-color: rgba(10, 10, 11, 0.7);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    transition: background-color 0.5s ease, border-color 0.5s ease;\n  }\n  html.light-theme .glass-nav {\n    background-color: rgba(247, 244, 238, 0.85);\n    border: 1px solid rgba(0, 0, 0, 0.05);\n  }'
);

// We need to also add color transitions to elements globally
if (!code.includes('transition-color-all')) {
   code += `
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
`;
}

// Modify footer-dark-section
code = code.replace(
  '.footer-dark-section {\n    --color-text-muted: rgba(255, 255, 255, 0.72);\n    --color-text-main: #F8F8F8;\n    --color-heading: #FFFFFF;\n  }',
  '.footer-dark-section {\n  }'
);

fs.writeFileSync('src/index.css', code);
