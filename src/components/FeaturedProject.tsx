import { motion } from 'motion/react';
import { Glow } from './Glow';
import { Particles } from './Particles';
import React from 'react';
import { ProjectGallery } from './ProjectGallery';
import { ProjectGalleryGoldenHeights } from './ProjectGalleryGoldenHeights';

export function FeaturedProject() {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;
    
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <section className="relative pb-32 bg-primary-bg overflow-hidden isolate">
      <Particles count={25} />
      <Glow className="top-1/4 right-0 w-[500px] h-[500px] opacity-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold"></div>
            <h2 className="text-gold font-medium tracking-widest uppercase text-sm">Featured Project</h2>
            <div className="w-8 h-[1px] bg-gold"></div>
          </motion.div>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-text-muted text-lg font-light"
          >
            Experience unparalleled luxury in the heart of the city.
          </motion.p>
        </div>

        {/* Split Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/10 bg-black/60 flex flex-col lg:flex-row shadow-2xl relative"
        >
          {/* Left Side: Image */}
          <div className="w-full lg:w-[52%] relative overflow-hidden group aspect-[4/3]" role="figure" aria-label="Architectural visualization of Ghausi Enclave">
            <div className="absolute top-6 left-6 z-20 bg-primary-bg/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-lg">
              <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                Now Booking
              </span>
            </div>
            
            <img 
              src="https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto/v1783685412/Use_the_provided_building_imag_9_ijxmf4.jpg" 
              srcSet="
                https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_600/v1783685412/Use_the_provided_building_imag_9_ijxmf4.jpg 600w,
                https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_1200/v1783685412/Use_the_provided_building_imag_9_ijxmf4.jpg 1200w,
                https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_1800/v1783685412/Use_the_provided_building_imag_9_ijxmf4.jpg 1800w
              "
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy" 
              decoding="async"
              alt="Architectural visualization of the Ghausi Enclave exterior" 
              className="w-full h-full object-cover object-[center_30%] absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-[48%] p-6 sm:p-8 lg:p-12 xl:p-14 flex flex-col justify-center relative">
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>
             
             <h3 className="text-[32px] leading-[1.1] sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white relative z-10 leading-tight">
               Ghausi <span className="text-gold-accent">Enclave</span>
             </h3>
             <p className="text-gold font-medium mb-4 relative z-10 text-lg">Luxury 2 & 3 BHK Apartments</p>
             
             <p className="text-text-muted leading-relaxed font-light mb-10 relative z-10">
               Premium apartments located opposite Mirza Ghalib College, White House Road No.1, Gaya. Featuring modern architecture, spacious layouts, furnished living spaces, premium amenities, landscaped surroundings, and thoughtfully designed homes for comfortable family living.
             </p>

             {/* Features Grid */}
             <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-10 relative z-10">
               <div className="glass-card rounded-2xl p-4 sm:p-5 text-center flex flex-col justify-center min-h-[90px] sm:min-h-0 group hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                 <p className="text-gold font-bold text-base sm:text-lg mb-1 transition-colors">2 & 3 BHK</p>
                 <p className="text-white text-[10px] uppercase tracking-widest font-medium">Apartment Type</p>
               </div>
               <div className="glass-card rounded-2xl p-5 text-center group hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                 <p className="text-gold font-bold text-lg mb-1 transition-colors">Now Booking</p>
                 <p className="text-white text-[10px] uppercase tracking-widest font-medium">Booking Status</p>
               </div>
               <div className="glass-card rounded-2xl p-5 text-center group hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                 <p className="text-gold font-bold text-sm mb-1 transition-colors leading-tight pt-1">965–1383 Sq. Ft.</p>
                 <p className="text-white text-[10px] uppercase tracking-widest font-medium">Saleable Area</p>
               </div>
               <div className="glass-card rounded-2xl p-5 text-center group hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                 <p className="text-gold font-bold text-sm mb-1 transition-colors leading-tight pt-1">Furnished Apartments</p>
                 <p className="text-white text-[10px] uppercase tracking-widest font-medium">Living Style</p>
               </div>
             </div>

             {/* Buttons Grid */}
             <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
               <a href="#project-gallery-ghausi" onClick={(e) => handleScroll(e, 'project-gallery-ghausi')} className="btn-primary w-full py-4 text-[11px] sm:text-sm flex items-center justify-center text-center leading-tight min-h-[56px] md:min-h-0">
                 View Layouts
               </a>
               <a href="tel:+918969652817" className="btn-secondary w-full py-4 text-[11px] sm:text-sm flex items-center justify-center text-center leading-tight min-h-[56px] md:min-h-0">
                 Call Now
               </a>
               <a href="https://wa.me/918969652817" target="_blank" rel="noopener noreferrer" className="group relative w-full py-4 bg-[#25D366] text-white rounded-full font-semibold text-[11px] sm:text-sm flex items-center justify-center text-center leading-tight gap-2 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.2)] border border-[#25D366]/50 min-h-[56px] md:min-h-0">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.002 2C6.48 2 2 6.478 2 12c0 1.75.454 3.407 1.258 4.84L2 22l5.32-1.393A9.957 9.957 0 0012.002 22c5.523 0 10-4.478 10-10 0-5.522-4.477-10-10-10zm0 18.332c-1.487 0-2.946-.381-4.223-1.1L7.42 19l-3.15.825.84-3.07-.253-.404A8.344 8.344 0 013.666 12C3.666 7.4 7.4 3.666 12.002 3.666 16.604 3.666 20.338 7.4 20.338 12c0 4.602-3.734 8.332-8.336 8.332z"/></svg>
                 WhatsApp
               </a>
               <a href="https://drive.google.com/file/d/1jh4LzzA_hAuX7jLdYCjoObPpic9zzu_-/view" target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-4 text-[11px] sm:text-sm flex items-center justify-center text-center leading-tight min-h-[56px] md:min-h-0">
                 View Brochure
               </a>
             </div>
          </div>
        </motion.div>
      </div>

      <ProjectGallery />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        {/* Golden Heights Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card rounded-[32px] overflow-hidden border border-white/10 bg-black/60 flex flex-col lg:flex-row shadow-2xl relative mt-12 md:mt-16 mx-0 sm:mx-4 lg:mx-0"
        >
          {/* Right Side: Image */}
          <div className="w-full lg:w-[52%] relative overflow-hidden group aspect-[4/3]">
            <div className="absolute top-6 right-6 z-20 bg-primary-bg/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-lg">
              <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                Now Booking
              </span>
            </div>
            
            <img 
              src="https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto/v1783685417/Architectural_visualization_luxu__2K_202607101739_sc5moi.jpg" 
              srcSet="
                https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_600/v1783685417/Architectural_visualization_luxu__2K_202607101739_sc5moi.jpg 600w,
                https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_1200/v1783685417/Architectural_visualization_luxu__2K_202607101739_sc5moi.jpg 1200w,
                https://res.cloudinary.com/dbshx9xvx/image/upload/q_auto,f_auto,w_1800/v1783685417/Architectural_visualization_luxu__2K_202607101739_sc5moi.jpg 1800w
              "
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy" 
              decoding="async"
              alt="Golden Heights Apartments Exterior" 
              className="w-full h-full object-cover object-[center_30%] absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Left Side: Content */}
          <div className="w-full lg:w-[48%] p-8 lg:p-12 xl:p-14 flex flex-col justify-center relative">
             <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-50 pointer-events-none"></div>
             
             <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white relative z-10 leading-tight">
               Golden Heights <span className="text-gold-accent">Apartments</span>
             </h3>
             <p className="text-gold font-medium mb-4 relative z-10 text-lg">Luxury 2 & 3 BHK Apartments</p>
             
             <p className="text-text-muted leading-relaxed font-light mb-10 relative z-10">
               Experience premium living at Golden Heights, a thoughtfully designed residential community offering spacious 2 & 3 BHK apartments with modern architecture, premium amenities, landscaped surroundings, and commercial spaces. Located on Katari Hill Road, opposite Cannon Hospital, Gaya, it provides excellent connectivity while delivering a luxurious lifestyle.
             </p>

             {/* Features Grid */}
             <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
               <div className="glass-card rounded-2xl p-5 text-center group hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                 <p className="text-gold font-bold text-lg mb-1 transition-colors">2 & 3 BHK</p>
                 <p className="text-white text-[10px] uppercase tracking-widest font-medium">Type</p>
               </div>
               <div className="glass-card rounded-2xl p-5 text-center group hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                 <p className="text-gold font-bold text-lg mb-1 transition-colors">Booking Open</p>
                 <p className="text-white text-[10px] uppercase tracking-widest font-medium">Status</p>
               </div>
               <div className="glass-card rounded-2xl p-5 text-center group hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                 <p className="text-gold font-bold text-lg mb-1 transition-colors">A & B</p>
                 <p className="text-white text-[10px] uppercase tracking-widest font-medium">Blocks</p>
               </div>
               <div className="glass-card rounded-2xl p-5 text-center group hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                 <p className="text-gold font-bold text-sm mb-1 transition-colors leading-tight">Katari Hill Road,<br/>Gaya</p>
                 <p className="text-white text-[10px] uppercase tracking-widest font-medium">Location</p>
               </div>
             </div>

             {/* Buttons Grid */}
             <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
               <a href="#project-gallery-golden-heights" onClick={(e) => handleScroll(e, 'project-gallery-golden-heights')} className="btn-primary w-full py-4 text-[11px] sm:text-sm flex items-center justify-center text-center leading-tight min-h-[56px] md:min-h-0">
                 View Layouts
               </a>
               <a href="tel:+918969652817" className="btn-secondary w-full py-4 text-[11px] sm:text-sm flex items-center justify-center text-center leading-tight min-h-[56px] md:min-h-0">
                 Call Now
               </a>
               <a href="https://wa.me/918969652817" target="_blank" rel="noopener noreferrer" className="group relative w-full py-4 bg-[#25D366] text-white rounded-full font-semibold text-[11px] sm:text-sm flex items-center justify-center text-center leading-tight gap-2 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.2)] border border-[#25D366]/50 min-h-[56px] md:min-h-0">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.002 2C6.48 2 2 6.478 2 12c0 1.75.454 3.407 1.258 4.84L2 22l5.32-1.393A9.957 9.957 0 0012.002 22c5.523 0 10-4.478 10-10 0-5.522-4.477-10-10-10zm0 18.332c-1.487 0-2.946-.381-4.223-1.1L7.42 19l-3.15.825.84-3.07-.253-.404A8.344 8.344 0 013.666 12C3.666 7.4 7.4 3.666 12.002 3.666 16.604 3.666 20.338 7.4 20.338 12c0 4.602-3.734 8.332-8.336 8.332z"/></svg>
                 WhatsApp
               </a>
               <a href="https://drive.google.com/file/d/1jmyGUK0fI6e6Qte3bvb4Ck7DGP-Q_4iA/preview" target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-4 text-[11px] sm:text-sm flex items-center justify-center text-center leading-tight min-h-[56px] md:min-h-0">
                 View Brochure
               </a>
             </div>
          </div>
        </motion.div>
      </div>

      <ProjectGalleryGoldenHeights />
    </section>
  );
}
