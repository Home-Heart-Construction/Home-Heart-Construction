const fs = require('fs');
let code = fs.readFileSync('src/components/FeaturedProject.tsx', 'utf8');

code = code.replace(
  'src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"',
  'src="https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_1200/v1783685412/Use_the_provided_building_imag_9_ijxmf4.jpg" loading="lazy" decoding="async"'
);

// We need to change the className to include object-position to ensure the building is centered intelligently
code = code.replace(
  'alt="Golden Heights Apartments Exterior"\n              className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-105"',
  'alt="Golden Heights Apartments Exterior"\n              className="w-full h-full object-cover object-[center_30%] absolute inset-0 transition-transform duration-1000 group-hover:scale-105"'
);

fs.writeFileSync('src/components/FeaturedProject.tsx', code);
