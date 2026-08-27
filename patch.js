const fs = require('fs');
let code = fs.readFileSync('src/components/MediaHighlights.tsx', 'utf8');

code = code.replace(
  '<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">',
  '<div className="relative flex flex-col items-center justify-center">'
);

code = code.replace(
  '<div className="text-left">',
  '<div className="text-center">'
);

code = code.replace(
  'className="flex items-center gap-4 mb-4"',
  'className="flex items-center justify-center gap-4 mb-4"'
);

code = code.replace(
  '<motion.div\n            initial={{ opacity: 0, x: 20 }}\n            whileInView={{ opacity: 1, x: 0 }}\n            viewport={{ once: true }}\n            transition={{ delay: 0.3 }}\n          >\n            <Link',
  '<motion.div\n            initial={{ opacity: 0, x: 20 }}\n            whileInView={{ opacity: 1, x: 0 }}\n            viewport={{ once: true }}\n            transition={{ delay: 0.3 }}\n            className="mt-8 md:mt-0 md:absolute md:right-0 md:bottom-6"\n          >\n            <Link'
);

code = code.replace(
  'className="text-text-muted text-lg max-w-2xl font-light leading-relaxed"',
  'className="text-text-muted text-lg max-w-3xl mx-auto font-light leading-relaxed"'
);

fs.writeFileSync('src/components/MediaHighlights.tsx', code);
