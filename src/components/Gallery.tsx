import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Particles } from './Particles';

const projects = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1784107061/WhatsApp_Image_2026-07-15_at_2.38.47_PM_kezcqn.jpg',
    alt: 'HomeHeart Premium Exterior View',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1783685412/Use_the_provided_building_imag_9_ijxmf4.jpg',
    alt: 'HomeHeart Building Architectural Render',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1783685417/Architectural_visualization_luxu__2K_202607101739_sc5moi.jpg',
    alt: 'Luxury Architectural Visualization of HomeHeart Project',
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1783674475/IMG-20260709-WA0001_xp2bfu.jpg',
    alt: 'HomeHeart Modern Building Facade',
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1784302692/WhatsApp_Image_2026-07-17_at_9.06.43_PM_de0tsx.jpg',
    alt: 'HomeHeart Residential Complex Night View',
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1783620756/c1_be38jy.jpg',
    alt: 'HomeHeart Project Landscaped Amenities',
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1784302689/WhatsApp_Image_2026-07-17_at_9.06.43_PMGYF_zuneeu.jpg',
    alt: 'HomeHeart Luxury Apartment Balcony View',
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1783620773/1_ctlc88.jpg',
    alt: 'HomeHeart Architectural Details and Structure',
  },
  {
    id: 9,
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1783620747/s2_1_lszp8f.jpg',
    alt: 'HomeHeart Project Additional View',
  },
  {
    id: 10,
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1783620775/3_u7fvwn.jpg',
    alt: 'HomeHeart Project View',
  },
  {
    id: 11,
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1784302367/Building_under_construction_raw_RCC_202607151447_ca1lum.jpg',
    alt: 'HomeHeart Building Under Construction',
  },
  {
    id: 12,
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1784786839/WhatsApp_Image_2026-07-23_at_12.35.46_AM_tapho3.jpg',
    alt: 'HomeHeart New Portfolio Project',
  }
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? projects.length - 1 : prev - 1) : null));
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev === projects.length - 1 ? 0 : prev + 1) : null));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrevious, handleNext]);

  // Body scroll lock
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

  // Touch handlers for swipe in lightbox
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) { // minimum swipe distance
      if (diff > 0) {
        handleNext(); // swiped left
      } else {
        handlePrevious(); // swiped right
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="projects" className="py-16 md:py-32 bg-[#0A0A0B] relative isolate overflow-hidden force-dark-vars">
      <Particles count={30} />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-[1px] bg-gold"></div>
              <h2 className="text-gold font-medium tracking-widest uppercase text-sm">Portfolio</h2>
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
            >
              Featured <span className="text-gold-accent">Projects</span>
            </motion.h3>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedIndex(index)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer border border-white/5 bg-white/5 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(200,164,106,0.15)] hover:border-gold/30"
            >
              <img 
                src={project.image} 
                alt={project.alt} 
                loading="lazy"
                decoding="async"
                onLoad={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '1';
                }}
                style={{ opacity: 0 }}
                className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500 pointer-events-none mix-blend-overlay"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedIndex(null)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
                className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 hover:bg-gold/20 text-white hover:text-gold transition-all duration-300 border border-white/20 hover:border-gold"
              >
                <X className="w-6 h-6" />
              </button>

              <button 
                onClick={handlePrevious}
                className="absolute left-4 md:left-8 z-[110] p-4 rounded-full bg-black/50 hover:bg-gold/20 text-white hover:text-gold transition-all duration-300 border border-white/10 hover:border-gold hidden sm:flex"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <motion.div
                key={selectedIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl w-full max-h-[85vh] px-4 md:px-16 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={projects[selectedIndex].image} 
                  alt={projects[selectedIndex].alt}
                  loading="lazy"
                  decoding="async"
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '1';
                  }}
                  style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
                  className="max-w-full max-h-[85vh] object-contain object-center rounded-[20px] shadow-2xl border border-white/10"
                />
              </motion.div>

              <button 
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-[110] p-4 rounded-full bg-black/50 hover:bg-gold/20 text-white hover:text-gold transition-all duration-300 border border-white/10 hover:border-gold hidden sm:flex"
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
