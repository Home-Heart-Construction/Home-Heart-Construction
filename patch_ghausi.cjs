const fs = require('fs');
let code = fs.readFileSync('src/components/FeaturedProject.tsx', 'utf8');

const targetStr = `<img \n              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" \n              alt="Ghausi Enclave Apartments" \n              className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-105"\n            />`;

const targetStr2 = `<img \n              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" \n              alt="Ghausi Enclave Apartments" \n              className="w-full h-full object-cover object-[center_30%] absolute inset-0 transition-transform duration-1000 group-hover:scale-105"\n            />`;


const newImgStr = `<img 
              src="https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto/v1783685417/Architectural_visualization_luxu__2K_202607101739_sc5moi.jpg" 
              srcSet="
                https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_600/v1783685417/Architectural_visualization_luxu__2K_202607101739_sc5moi.jpg 600w,
                https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_1200/v1783685417/Architectural_visualization_luxu__2K_202607101739_sc5moi.jpg 1200w,
                https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_1800/v1783685417/Architectural_visualization_luxu__2K_202607101739_sc5moi.jpg 1800w
              "
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy" 
              decoding="async"
              alt="Ghausi Enclave Apartments" 
              className="w-full h-full object-cover object-[center_30%] absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            />`;

if (code.includes(targetStr)) {
  code = code.replace(targetStr, newImgStr);
} else if (code.includes(targetStr2)) {
  code = code.replace(targetStr2, newImgStr);
} else {
  console.log("Could not find the target string");
}

fs.writeFileSync('src/components/FeaturedProject.tsx', code);
