import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510760/Screenshot_2026-07-08_170143_tgnb6p.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510769/Screenshot_2026-07-08_170157_i4ikd0.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510805/Screenshot_2026-07-08_170219_kxyj2j.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510810/Screenshot_2026-07-08_170241_h86srm.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510819/Screenshot_2026-07-08_170321_d2xes0.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510823/Screenshot_2026-07-08_170337_yhnkmo.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510823/Screenshot_2026-07-08_170418_s3cqtx.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510830/Screenshot_2026-07-08_170304_lkiuyl.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510833/Screenshot_2026-07-08_170506_pednjf.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510834/Screenshot_2026-07-08_170601_qxenxk.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510835/Screenshot_2026-07-08_170632_vubuo6.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510842/Screenshot_2026-07-08_170618_pzjhys.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510843/Screenshot_2026-07-08_170731_pwwwhv.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510844/Screenshot_2026-07-08_170700_ayh7eb.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510845/Screenshot_2026-07-08_170355_wta0eq.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510848/Screenshot_2026-07-08_170451_rcrhio.png",
  "https://res.cloudinary.com/dbshx9xvx/image/upload/v1783510851/Screenshot_2026-07-08_170519_thrkp4.png"
];

export function GoldenHeightsGallery() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [scaleLevel, setScaleLevel] = useState(1);

  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || selectedIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;
    
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 50) {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
      } else if (diffX < -50) {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

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
      if (e.key === 'Escape') { setSelectedIndex(null); setScaleLevel(1); }
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  
  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://homeheart.in/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Golden Heights Project Gallery",
      "item": "https://homeheart.in/projects/golden-heights/gallery"
    }]
  });
  

  return (
    <div className="pt-32 pb-24 min-h-screen bg-primary-bg force-dark-vars">


    <SEO title="Golden Heights Project Gallery | Home Heart Construction" description="Discover Golden Heights, the ultra-luxury residential and commercial development in Gaya, Bihar. View floor plans, 3D renders, and construction updates." schema={[breadcrumbSchema]} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/30 bg-black/40 text-white hover:text-gold hover:border-gold hover:bg-black/60 shadow-lg hover:shadow-[0_0_15px_rgba(200,164,106,0.2)] transition-all duration-300 font-medium text-sm backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </motion.div>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold"></div>
            <span className="text-gold font-medium tracking-widest uppercase text-sm">PROJECT GALLERY</span>
            <div className="w-8 h-[1px] bg-gold"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6"
          >
            Explore <span className="text-gold-accent">Golden Heights</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-muted text-lg max-w-3xl mx-auto font-light"
          >
            Explore every detail of Golden Heights Apartments including architecture, interiors, layouts, premium amenities, floor plans, common areas, and luxury living spaces.
          </motion.p>
        </div>

        {/* Masonry/Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6"
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid shadow-lg border border-white/5 bg-black/20"
              onClick={() => { setSelectedIndex(idx); setScaleLevel(1); }}
              role="button"
              tabIndex={0}
              aria-label={`View full image ${idx + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedIndex(idx);
                }
              }}
            >
              <img 
                src={src} 
                alt={`Golden Heights architectural visualization ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-gold/30 rounded-2xl transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
            onClick={() => { setSelectedIndex(null); setScaleLevel(1); }}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
          >
            <div className="absolute top-6 left-6 text-white/70 font-mono tracking-widest text-sm z-10 font-medium bg-black/50 px-4 py-2 rounded-full border border-white/10">
              {selectedIndex + 1} / {images.length}
            </div>
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 z-10 border border-white/10 hover:border-gold/50"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); setScaleLevel(1); }}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 z-10 border border-white/10 hover:border-gold/50"
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 z-10 border border-white/10 hover:border-gold/50"
              onClick={(e) => { 
                e.stopPropagation(); 
                setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center w-full h-full p-4 md:p-12" onClick={(e) => e.stopPropagation()} onDoubleClick={() => setScaleLevel(prev => prev === 1 ? 2 : 1)} onWheel={(e) => { e.stopPropagation(); if (e.deltaY < 0) setScaleLevel(prev => Math.min(prev + 0.5, 4)); else setScaleLevel(prev => Math.max(prev - 0.5, 1)); }} style={{ overflow: scaleLevel > 1 ? "auto" : "hidden" }}>
              <AnimatePresence mode="wait">
                <motion.img 
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  src={images[selectedIndex]}
                  alt={`Golden Heights architectural visualization ${selectedIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  style={{ maxHeight: '90vh', maxWidth: '90vw', transform: `scale(${scaleLevel})`, transition: "transform 0.3s ease", cursor: scaleLevel > 1 ? "grab" : "zoom-in" }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
