const fs = require('fs');
let code = fs.readFileSync('src/components/ProjectGalleryGoldenHeights.tsx', 'utf8');

// Replace Images array
const newImages = `const images = [
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510760/Screenshot_2026-07-08_170143_tgnb6p.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510769/Screenshot_2026-07-08_170157_i4ikd0.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510805/Screenshot_2026-07-08_170219_kxyj2j.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510810/Screenshot_2026-07-08_170241_h86srm.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510819/Screenshot_2026-07-08_170321_d2xes0.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510823/Screenshot_2026-07-08_170337_yhnkmo.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510823/Screenshot_2026-07-08_170418_s3cqtx.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510830/Screenshot_2026-07-08_170304_lkiuyl.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510833/Screenshot_2026-07-08_170506_pednjf.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510834/Screenshot_2026-07-08_170601_qxenxk.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510835/Screenshot_2026-07-08_170632_vubuo6.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510842/Screenshot_2026-07-08_170618_pzjhys.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510843/Screenshot_2026-07-08_170731_pwwwhv.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510844/Screenshot_2026-07-08_170700_ayh7eb.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510845/Screenshot_2026-07-08_170355_wta0eq.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510848/Screenshot_2026-07-08_170451_rcrhio.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510851/Screenshot_2026-07-08_170519_thrkp4.png"
];`;

code = code.replace(/const images = \[[\s\S]*?\];/, newImages);

// Rename component
code = code.replace('export function ProjectGallery() {', 'export function ProjectGalleryGoldenHeights() {');

// Update id
code = code.replace('id="project-gallery-ghausi"', 'id="project-gallery-golden-heights"');

// Update text
code = code.replace('Explore <span className="text-gold-accent">Ghausi Enclave</span>', 'Explore <span className="text-gold-accent">Golden Heights</span>');

fs.writeFileSync('src/components/ProjectGalleryGoldenHeights.tsx', code);
