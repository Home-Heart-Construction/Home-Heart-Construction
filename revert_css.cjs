const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

// Undo html.light-theme
code = code.replace(
  'html.light-theme {\n  --color-primary-bg: #F7F4EE;\n  --color-secondary-bg: #F3EFE8;\n  --color-glass: rgba(255, 255, 255, 0.5);\n  --color-border-subtle: rgba(0, 0, 0, 0.1);\n  \n  --color-gold: #B88942;\n  --color-gold-light: #C0944D;\n  --color-gold-dark: #A37430;\n  \n  --color-text-main: #2C2C2C;\n  --color-text-muted: #4A4A4A;\n  --color-heading: #2C2C2C;\n}',
  'html.light-theme {\n  --color-primary-bg: #F7F4EE;\n  --color-secondary-bg: #F3EFE8;\n  --color-glass: rgba(10, 10, 11, 0.85);\n  \n  --color-gold: #B88942;\n  --color-gold-light: #C0944D;\n  --color-gold-dark: #A37430;\n  \n  --color-text-main: #4A4A4A;\n  --color-text-muted: #666666;\n  --color-heading: #1F1F1F;\n}'
);

// Undo glass-card
code = code.replace(
  '  .glass-card {\n    transform: translateZ(0); /* Force hardware acceleration */\n    @apply bg-glass backdrop-blur-xl border border-border-subtle rounded-[30px] overflow-hidden relative z-[5];\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    color: var(--color-text-main);\n  }',
  '  .glass-card {\n    transform: translateZ(0); /* Force hardware acceleration */\n    @apply bg-glass backdrop-blur-xl border border-border-subtle rounded-[30px] overflow-hidden relative z-[5];\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    --color-text-muted: rgba(255, 255, 255, 0.72);\n    --color-text-main: #F8F8F8;\n    --color-border-subtle: rgba(255, 255, 255, 0.10);\n    --color-heading: #FFFFFF;\n    color: var(--color-text-main);\n  }'
);

// Undo glass-nav
code = code.replace(
  '  .glass-nav {\n    @apply backdrop-blur-lg shadow-lg relative z-[50];\n    background-color: rgba(10, 10, 11, 0.7);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    transition: background-color 0.5s ease, border-color 0.5s ease;\n  }\n  html.light-theme .glass-nav {\n    background-color: rgba(247, 244, 238, 0.85);\n    border: 1px solid rgba(0, 0, 0, 0.05);\n  }',
  '  .glass-nav {\n    @apply bg-[#0A0A0B]/70 backdrop-blur-lg border border-white/10 shadow-lg relative z-[50];\n    --color-text-muted: rgba(255, 255, 255, 0.72);\n    --color-text-main: #F8F8F8;\n    --color-heading: #FFFFFF;\n  }'
);

// Remove transition
code = code.replace(
  'section, div {\n  transition: background-color 700ms ease-in-out, border-color 700ms ease-in-out;\n}',
  ''
);

fs.writeFileSync('src/index.css', code);
