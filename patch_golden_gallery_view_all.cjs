const fs = require('fs');
let code = fs.readFileSync('src/components/ProjectGalleryGoldenHeights.tsx', 'utf8');

code = code.replace(
  "import { motion, AnimatePresence } from 'motion/react';\nimport { ChevronLeft, ChevronRight, X } from 'lucide-react';",
  "import { motion, AnimatePresence } from 'motion/react';\nimport { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';\nimport { useNavigate } from 'react-router-dom';"
);

code = code.replace(
  "export function ProjectGalleryGoldenHeights() {",
  "export function ProjectGalleryGoldenHeights() {\n  const navigate = useNavigate();"
);

code = code.replace(
  '<div className="text-center">',
  '<div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">'
);

code = code.replace(
  'className="flex items-center justify-center gap-4 mb-4"',
  'className="flex items-center justify-center md:justify-start gap-4 mb-4"'
);

code = code.replace(
  'Explore <span className="text-gold-accent">Golden Heights</span>\n          </motion.h3>\n        </div>\n      </div>',
  `Explore <span className="text-gold-accent">Golden Heights</span>\n          </motion.h3>\n        </div>\n        <motion.div\n          initial={{ opacity: 0, x: 20 }}\n          whileInView={{ opacity: 1, x: 0 }}\n          viewport={{ once: true }}\n          transition={{ delay: 0.2 }}\n        >\n          <button \n            onClick={() => navigate('/projects/golden-heights/gallery')}\n            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-gold hover:text-white hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_20px_rgba(200,164,106,0.3)] transition-all duration-300 font-medium text-sm"\n          >\n            View All <ArrowRight className="w-4 h-4" />\n          </button>\n        </motion.div>\n      </div>\n      </div>`
);

fs.writeFileSync('src/components/ProjectGalleryGoldenHeights.tsx', code);
