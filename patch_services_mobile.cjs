const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Services.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetLayout = `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">`;
const replacementLayout = `<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">`;

const targetCard = `className="glass-card p-6 sm:p-8 group hover:-translate-y-2 hover:border-gold/30 transition-all duration-500 relative cursor-pointer"`;
const replacementCard = `className="glass-card rounded-[20px] sm:rounded-[24px] p-3 sm:p-6 md:p-8 group hover:-translate-y-2 hover:border-gold/30 transition-all duration-500 relative cursor-pointer flex flex-col"`;

const targetHoverBg = `<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>`;
const replacementHoverBg = `<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px] sm:rounded-[24px]"></div>`;

const targetIconWrapper = `<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">`;
const replacementIconWrapper = `<div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">`;

const targetIcon = `<service.icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />`;
const replacementIcon = `<service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-gold group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />`;

const targetTitle = `<h4 className="text-xl font-semibold mb-4 text-white group-hover:text-gold transition-colors duration-300">`;
const replacementTitle = `<h4 className="text-[12px] sm:text-xl font-semibold mb-2 sm:mb-4 text-white group-hover:text-gold transition-colors duration-300 leading-tight">`;

const targetLine = `<div className="w-12 h-[2px] bg-white/10 mb-4 group-hover:w-full group-hover:bg-gold transition-all duration-500"></div>`;
const replacementLine = `<div className="w-8 sm:w-12 h-[2px] bg-white/10 mb-2 sm:mb-4 group-hover:w-full group-hover:bg-gold transition-all duration-500"></div>`;

const targetDesc = `<p className="text-text-muted text-sm leading-relaxed font-light">`;
const replacementDesc = `<p className="text-text-muted text-[10px] sm:text-sm leading-relaxed sm:leading-relaxed font-light opacity-90">`;

content = content.replace(targetLayout, replacementLayout);
content = content.replace(targetCard, replacementCard);
content = content.replace(targetHoverBg, replacementHoverBg);
content = content.replace(targetIconWrapper, replacementIconWrapper);
content = content.replace(targetIcon, replacementIcon);
content = content.replace(targetTitle, replacementTitle);
content = content.replace(targetLine, replacementLine);
content = content.replace(targetDesc, replacementDesc);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Services.tsx patched for 2-column mobile view.');
