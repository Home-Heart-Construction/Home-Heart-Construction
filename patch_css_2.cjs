const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

// Update glass-card text variables to be dynamic instead of hardcoded
code = code.replace(
  '  .glass-card {\n    transform: translateZ(0); /* Force hardware acceleration */\n    @apply bg-glass backdrop-blur-xl border border-border-subtle rounded-[30px] overflow-hidden relative z-[5];\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    --color-text-muted: rgba(255, 255, 255, 0.72);\n    --color-text-main: #F8F8F8;\n    --color-border-subtle: rgba(255, 255, 255, 0.10);\n    --color-heading: #FFFFFF;\n    color: var(--color-text-main);\n  }',
  '  .glass-card {\n    transform: translateZ(0); /* Force hardware acceleration */\n    @apply bg-glass backdrop-blur-xl border border-border-subtle rounded-[30px] overflow-hidden relative z-[5];\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    color: var(--color-text-main);\n  }'
);

// Also update footer-dark-section
code = code.replace(
  '  .footer-dark-section {\n    color: var(--color-text-main);\n  }',
  '  .footer-dark-section {\n  }'
);

fs.writeFileSync('src/index.css', code);
