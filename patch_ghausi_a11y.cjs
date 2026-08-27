const fs = require('fs');
let code = fs.readFileSync('src/components/FeaturedProject.tsx', 'utf8');

code = code.replace(
  '          {/* Left Side: Image */}\n          <div className="w-full lg:w-[52%] relative overflow-hidden group aspect-[4/3]">',
  '          {/* Left Side: Image */}\n          <div className="w-full lg:w-[52%] relative overflow-hidden group aspect-[4/3]" role="figure" aria-label="Architectural visualization of Ghausi Enclave">'
);

code = code.replace(
  '              alt="Ghausi Enclave Apartments" \n              className="w-full h-full object-cover object-[center_30%] absolute inset-0 transition-transform duration-1000 group-hover:scale-105"',
  '              alt="Architectural visualization of the Ghausi Enclave exterior" \n              className="w-full h-full object-cover object-[center_30%] absolute inset-0 transition-transform duration-1000 group-hover:scale-105"'
);

fs.writeFileSync('src/components/FeaturedProject.tsx', code);
