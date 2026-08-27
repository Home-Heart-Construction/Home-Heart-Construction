const fs = require('fs');

// Hero.tsx
let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
hero = hero.replace('text-5xl md:text-7xl lg:text-8xl', 'text-[44px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl');
hero = hero.replace('className="flex flex-col sm:flex-row items-center gap-4"', 'className="flex flex-col sm:flex-row w-full sm:w-auto px-6 sm:px-0 items-center justify-center gap-4 sm:gap-6 mt-4"');
hero = hero.replace('className="btn-primary group flex items-center gap-2 px-8 py-4"', 'className="btn-primary group flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 w-full sm:w-auto text-[15px]"');
hero = hero.replace('className="btn-secondary px-8 py-4 backdrop-blur-md"', 'className="btn-secondary flex justify-center items-center px-8 py-3.5 md:py-4 w-full sm:w-auto backdrop-blur-md text-[15px]"');
fs.writeFileSync('src/components/Hero.tsx', hero);

// About.tsx
let about = fs.readFileSync('src/components/About.tsx', 'utf8');
about = about.replace('grid grid-cols-1 lg:grid-cols-2 gap-16', 'grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20');
about = about.replace('h-[600px] rounded-[40px]', 'h-[450px] sm:h-[550px] md:h-[600px] rounded-[32px] md:rounded-[40px]');
about = about.replace('p-10 md:p-14', 'p-8 sm:p-10 md:p-14 rounded-[28px] md:rounded-[30px]');
about = about.replace('text-3xl md:text-5xl', 'text-[32px] leading-tight sm:text-4xl md:text-5xl');
fs.writeFileSync('src/components/About.tsx', about);

// FeaturedProject.tsx
let featured = fs.readFileSync('src/components/FeaturedProject.tsx', 'utf8');
featured = featured.replace('flex flex-col lg:flex-row shadow-2xl relative mt-16', 'flex flex-col lg:flex-row shadow-2xl relative mt-12 md:mt-16 mx-0 sm:mx-4 lg:mx-0');
featured = featured.replace('rounded-[32px]', 'rounded-[24px] md:rounded-[32px]');
featured = featured.replace('p-8 lg:p-12 xl:p-14', 'p-6 sm:p-8 lg:p-12 xl:p-14');
featured = featured.replace('text-3xl md:text-4xl font-extrabold', 'text-[32px] leading-[1.1] sm:text-4xl md:text-5xl font-extrabold');
featured = featured.replace('grid grid-cols-2 gap-4', 'grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4');
featured = featured.replace('p-5 text-center', 'p-4 sm:p-5 text-center flex flex-col justify-center min-h-[90px] sm:min-h-0');
featured = featured.replace('text-lg mb-1', 'text-base sm:text-lg mb-1');
fs.writeFileSync('src/components/FeaturedProject.tsx', featured);
console.log('Done Featured');
