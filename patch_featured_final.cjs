const fs = require('fs');
let code = fs.readFileSync('src/components/FeaturedProject.tsx', 'utf8');

code = code.replace(
  '<img \n              src="https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_1200/v1783685412/Use_the_provided_building_imag_9_ijxmf4.jpg" loading="lazy" decoding="async" \n              alt="Golden Heights Apartments Exterior" \n              className="w-full h-full object-cover object-[center_30%] absolute inset-0 transition-transform duration-1000 group-hover:scale-105"\n            />',
  `<img 
              src="https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto/v1783685412/Use_the_provided_building_imag_9_ijxmf4.jpg" 
              srcSet="
                https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_600/v1783685412/Use_the_provided_building_imag_9_ijxmf4.jpg 600w,
                https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_1200/v1783685412/Use_the_provided_building_imag_9_ijxmf4.jpg 1200w,
                https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_1800/v1783685412/Use_the_provided_building_imag_9_ijxmf4.jpg 1800w
              "
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy" 
              decoding="async"
              alt="Golden Heights Apartments Exterior" 
              className="w-full h-full object-cover object-[center_30%] absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            />`
);

fs.writeFileSync('src/components/FeaturedProject.tsx', code);
