import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783505516/Screenshot_2026-07-08_153759_jmsq28.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783505515/Screenshot_2026-07-08_153815_tg6up6.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783505514/Screenshot_2026-07-08_153745_u7gwle.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783505505/Screenshot_2026-07-08_153831_nhywvn.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783505498/Screenshot_2026-07-08_153938_nggzny.png"
];

export function ProjectGallery() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation logic
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrameId: number;
    let scrollPos = 0;
    
    // Slow speed for a premium feel
    const speed = 1.5;

    const scroll = () => {
      if (!isHovered && selectedIndex === null) {
        scrollPos += speed;
        // Check if we've scrolled half the width (since we duplicate the images once)
        if (scrollPos >= scroller.scrollWidth / 2) {
          scrollPos -= scroller.scrollWidth / 2;
        }
        scroller.style.transform = `translate3d(-${scrollPos}px, 0, 0)`;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, selectedIndex]);

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

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Touch handlers for swipe in lightbox
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || selectedIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
    } else if (diff < -50) {
      setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
    }
    touchStartX.current = null;
  };

  return (
    <div id="project-gallery-ghausi" className="py-16 bg-[#0A0A0B] overflow-hidden relative force-dark-vars">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-10 text-center md:text-left px-4 sm:px-0">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start gap-4 mb-4"
            >
              <div className="w-8 h-[1px] bg-gold"></div>
              <h2 className="text-gold font-medium tracking-widest uppercase text-sm">PROJECT GALLERY</h2>
              <div className="w-8 h-[1px] bg-gold"></div>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
            >
              Explore <span className="text-gold-accent">Ghausi Enclave</span>
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button 
              onClick={() => navigate('/projects/ghausi-enclave/gallery')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-gold hover:text-white hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_20px_rgba(200,164,106,0.3)] transition-all duration-300 font-medium text-sm"
            >
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      <div 
        className="w-full relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex w-max gap-3 sm:gap-4 md:gap-5 px-4" ref={scrollerRef}>
          {/* Duplicate images array for infinite scroll effect */}
          {[...images, ...images].map((src, idx) => {
            const originalIndex = idx % images.length;
            return (
              <div 
                key={idx} 
                className="w-[280px] h-[190px] sm:w-[400px] sm:h-[280px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] flex-shrink-0 cursor-pointer group"
                onClick={() => setSelectedIndex(originalIndex)}
              >
                <div className="w-full h-full rounded-[28px] overflow-hidden relative border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-gold/60 group-hover:shadow-[0_0_30px_rgba(200,164,106,0.3)] bg-glass backdrop-blur-md">
                  <img 
                    src={src} 
                    alt="Ghausi Enclave Luxury Apartments Project Gallery in Gaya" 
                    className="w-full h-full object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"></div>
                </div>
              </div>
            );
          })}
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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors duration-300 z-50 border border-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button 
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors duration-300 z-50 border border-white/20 hidden sm:flex"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image Container with Zoom effect */}
            <div 
              className="w-full h-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={images[selectedIndex]} 
                alt="Ghausi Enclave Luxury Apartments Fullscreen View" 
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl select-none"
              />
            </div>

            {/* Next Button */}
            <button 
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors duration-300 z-50 border border-white/20 hidden sm:flex"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </div>
  );
}
