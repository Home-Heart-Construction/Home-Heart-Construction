import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Particles } from './Particles';
import { Glow } from './Glow';
import { mediaList } from '../data/media';

export function MediaHighlights() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextMedia = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === mediaList.length - 1 ? 0 : prev + 1));
  };

  const prevMedia = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextMedia();
        if (e.key === 'ArrowLeft') prevMedia();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [lightboxOpen]);

  return (
    <section id="media-highlights" className="py-16 md:py-32 bg-primary-bg relative isolate overflow-hidden">
      <Particles count={25} />
      <Glow className="top-0 left-1/4 w-[600px] h-[600px] opacity-10" />
      <Glow className="bottom-0 right-1/4 w-[500px] h-[500px] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10 mb-16">
        <div className="relative flex flex-col items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <div className="w-8 h-[1px] bg-gold"></div>
              <h2 className="text-gold font-medium tracking-widest uppercase text-sm">Latest Media</h2>
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-4"
            >
              Media <span className="text-gold-accent">Highlights</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-muted text-lg max-w-3xl mx-auto font-light leading-relaxed"
            >
              Explore HomeHeart's latest project updates, construction milestones, inauguration ceremonies, media coverage, and important moments.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 md:mt-0 md:absolute md:right-0 md:-bottom-12"
          >
            <Link 
              to="/media" 
              className="inline-flex items-center gap-2 px-8 py-3 btn-secondary border-gold hover:shadow-[0_0_20px_rgba(200,164,106,0.3)] hover:-translate-y-1 transition-all duration-300 rounded-full text-gold group"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        {/* Carousel Container */}
        <div 
          className="flex w-max"
          style={{
            animation: 'marquee 60s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* We use 3 groups to ensure smooth looping */}
          {[0, 1, 2].map((groupIndex) => (
            <div key={groupIndex} className="flex gap-6 sm:gap-8 pr-6 sm:pr-8">
              {mediaList.map((media) => (
                <div 
                  key={media.id}
                  className="relative flex-shrink-0 group cursor-pointer transition-all duration-500 hover:-translate-y-2"
                  onClick={() => openLightbox(media.id)}
                >
                  <div className="w-[280px] h-[160px] sm:w-[350px] sm:h-[200px] lg:w-[400px] lg:h-[225px] rounded-[28px] overflow-hidden border border-gold/10 group-hover:border-gold/50 group-hover:shadow-[0_0_40px_rgba(200,164,106,0.3)] transition-all duration-500 relative bg-[#111]">
                    {media.type === 'video' ? (
                      <>
                        <video 
                          src={media.src} 
                          autoPlay 
                          muted 
                          loop 
                          playsInline 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
                           <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                             <Play className="w-6 h-6 ml-1" fill="currentColor" />
                           </div>
                        </div>
                      </>
                    ) : (
                      <img 
                        src={media.src} 
                        alt="Home Heart Construction Media Highlight - Real Estate Developers in Bihar" 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      decoding="async" />
                    )}
                    <div className="absolute inset-0 rounded-[28px] pointer-events-none border border-white/5 group-hover:border-gold/30 transition-colors duration-500 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]"></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Portal */}
      {lightboxOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl" onClick={closeLightbox}>
          <button 
            className="absolute top-6 right-6 lg:top-10 lg:right-10 z-[10000] p-3 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white transition-all duration-300 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute left-4 lg:left-10 z-[10000] p-3 md:p-4 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white transition-all duration-300 backdrop-blur-md"
            onClick={prevMedia}
          >
            <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>
          
          <div className="w-full max-w-5xl h-[80vh] px-12 md:px-24 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {mediaList[currentIndex].type === 'video' ? (
              <video 
                src={mediaList[currentIndex].src} 
                controls 
                autoPlay 
                className="max-w-full max-h-full rounded-xl shadow-2xl"
              />
            ) : (
              <img 
                src={mediaList[currentIndex].src} 
                alt="Highlight" 
                className="max-w-full max-h-full rounded-xl shadow-2xl object-contain cursor-grab active:cursor-grabbing"
              loading="lazy" decoding="async" />
            )}
          </div>
          
          <button 
            className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-[10000] p-3 md:p-4 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white transition-all duration-300 backdrop-blur-md"
            onClick={nextMedia}
            style={{ top: '50%' }}
          >
            <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>
        </div>,
        document.body
      )}
    </section>
  );
}
