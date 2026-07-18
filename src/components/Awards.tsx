import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Glow } from './Glow';

const certificates = [
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1784101753/WhatsApp_Image_2026-07-14_at_10.38.27_PM_mut8sx.jpg",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1784101746/WhatsApp_Image_2026-07-14_at_10.37.23_PM_eio9j0.jpg"
];

export function Awards() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev !== null ? (prev + 1) % certificates.length : null));
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev !== null ? (prev - 1 + certificates.length) % certificates.length : null));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="relative py-16 md:py-32 overflow-hidden bg-[#0A0A0B] isolate">
      {/* Luxury Charcoal Wall Texture & Vignette */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0A0B]"></div>
        {/* Subtle wood/grain texture simulation */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        {/* Soft top-down museum spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[500px] bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40vw] max-w-[500px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,11,0.8)_100%)] pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-gold"></div>
            <h2 className="text-gold font-medium tracking-widest uppercase text-sm">Recognitions</h2>
            <div className="w-12 h-[1px] bg-gold"></div>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight"
          >
            Awards & <span className="text-gold-accent">Recognitions</span>
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg font-light leading-relaxed"
          >
            Our commitment to quality, trust, and excellence is recognized by reputed industry organizations.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-10 md:gap-16 lg:gap-20 items-center justify-center max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative cursor-pointer group w-full flex justify-center items-center"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Wooden Frame styling */}
              <div className="relative w-full aspect-[1.4] sm:aspect-auto sm:h-[320px] lg:h-[380px] bg-[#1A1108] rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.6),inset_0_0_15px_rgba(0,0,0,1)] transition-all duration-[400ms] ease-in-out group-hover:-translate-y-[6px] group-hover:scale-[1.02] group-hover:shadow-[0_25px_50px_rgba(200,164,106,0.15),inset_0_0_15px_rgba(0,0,0,1)] border-[10px] sm:border-[12px] border-[#2A1A10] p-1.5 sm:p-2 flex flex-col justify-center items-center overflow-hidden">
                
                {/* Frame texture overlay */}
                <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.4)_50%,transparent_100%)]"></div>

                {/* Gold inner border */}
                <div className="w-full h-full border-[2px] border-[#D4AF37]/50 p-2 sm:p-4 bg-white relative overflow-hidden flex items-center justify-center shadow-[inset_0_0_30px_rgba(0,0,0,0.1)] group-hover:border-[#D4AF37]/80 transition-colors duration-[400ms] ease-in-out">
                   
                   {/* Subtle glass reflection & Gold Glow */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-[800ms] ease-in-out pointer-events-none"></div>
                   <div className="absolute inset-0 bg-gold blur-[50px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-[400ms] ease-in-out pointer-events-none"></div>
                   
                   <img 
                    src={cert} 
                    alt={`Awards & Recognition ${index + 1}`} 
                    className="w-full h-full object-contain filter drop-shadow-md"
                    loading="lazy"
                  decoding="async" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {createPortal(
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl"
              onClick={() => setSelectedIndex(null)}
            >
              <button 
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors duration-300 z-50 border border-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(null);
                }}
              >
                <X className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors duration-300 z-50 border border-white/20 hidden sm:flex"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev !== null ? (prev - 1 + certificates.length) % certificates.length : null));
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <div 
                className="w-full h-full max-w-5xl max-h-[90vh] p-4 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img 
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  src={certificates[selectedIndex]} 
                  alt="Fullscreen Certificate View" 
                  className="max-w-full max-h-full object-contain rounded-sm shadow-2xl select-none"
                />
              </div>

              <button 
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors duration-300 z-50 border border-white/20 hidden sm:flex"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev !== null ? (prev + 1) % certificates.length : null));
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
