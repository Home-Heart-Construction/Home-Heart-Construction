import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Play, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Particles } from '../components/Particles';
import { Glow } from '../components/Glow';
import { mediaList } from '../data/media';
import { SEO } from '../components/SEO';

export function MediaGallery() {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);



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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
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
      "name": "Media & Awards Gallery",
      "item": "https://homeheart.in/media"
    }]
  });
  

  return (
    <div className="pt-24 min-h-screen bg-primary-bg relative isolate overflow-hidden">


    <SEO title="Media & Awards Gallery | Home Heart Construction" description="View the latest media coverage, awards, and video highlights of Home Heart Construction Pvt. Ltd. and our luxury projects in Gaya, Bihar." schema={[breadcrumbSchema]} />

      {/* Premium Back Button */}
      <div className="fixed top-24 left-4 sm:left-8 z-40">
        <button
          onClick={() => {
            if (window.history.length > 2) {
              navigate(-1);
            } else {
              navigate('/');
            }
          }}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-glass backdrop-blur-md border border-gold text-white hover:bg-gold hover:text-black transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(200,164,106,0.3)] group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="font-medium text-sm">Back</span>
        </button>
      </div>

      <Particles count={30} />
      <Glow className="top-0 left-1/4 w-[600px] h-[600px] opacity-10" />
      
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <div className="w-8 h-[1px] bg-gold"></div>
              <h2 className="text-gold font-medium tracking-widest uppercase text-sm">Our Work</h2>
              <div className="w-8 h-[1px] bg-gold"></div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
            >
              Media <span className="text-gold-accent">Gallery</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-muted text-lg max-w-3xl mx-auto font-light leading-relaxed"
            >
              Explore HomeHeart's latest construction updates, inaugurations, interviews, project milestones, and media coverage.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6"
          >
            {mediaList.map((media, index) => (
              <div 
                key={media.id}
                className="break-inside-avoid relative group cursor-pointer transition-all duration-500 hover:-translate-y-2"
                onClick={() => openLightbox(index)}
              >
                <div className="w-full rounded-[20px] overflow-hidden border border-gold/10 group-hover:border-gold/50 group-hover:shadow-[0_0_40px_rgba(200,164,106,0.3)] transition-all duration-500 relative bg-[#111]">
                  {media.type === 'video' ? (
                    <>
                      <video 
                        src={media.src} 
                        className="w-full h-auto object-cover"
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                         <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-300">
                           <Play className="w-5 h-5 ml-1" fill="currentColor" />
                         </div>
                      </div>
                    </>
                  ) : (
                    <img 
                      src={media.src} 
                      alt="Media Highlight" 
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    decoding="async" />
                  )}
                  <div className="absolute inset-0 rounded-[20px] pointer-events-none border border-white/5 group-hover:border-gold/30 transition-colors duration-500 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]"></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Portal */}
      {lightboxOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl" onClick={closeLightbox}>
          <button 
            className="absolute top-6 right-6 lg:top-10 lg:right-10 z-[10000] p-3 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white transition-all duration-300 backdrop-blur-md"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute left-4 lg:left-10 z-[10000] p-3 md:p-4 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white transition-all duration-300 backdrop-blur-md"
            onClick={prevMedia}
            aria-label="Previous Image"
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
            aria-label="Next Image"
            style={{ top: '50%' }}
          >
            <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>
        </div>,
        document.body
      )}
    </div>
  );
}
