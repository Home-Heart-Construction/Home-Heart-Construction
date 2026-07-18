import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import { Glow } from './Glow';
import { Particles } from './Particles';
import { Maximize2, Minimize2 } from 'lucide-react';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleUp]);

  // Lock body scroll when expanded
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  // Keyboard navigation for closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isExpanded && e.key === 'Escape') {
        setIsExpanded(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded]);

  const renderComparisonContent = (expanded: boolean) => (
    <div 
      ref={expanded ? containerRef : (isExpanded ? null : containerRef)}
      className={`relative w-full overflow-hidden group select-none touch-none ${
        expanded 
          ? 'h-full max-h-[85vh] rounded-[24px] shadow-2xl'
          : 'aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] rounded-[24px]'
      }`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="https://res.cloudinary.com/dbshx9xvx/image/upload/v1784107061/WhatsApp_Image_2026-07-15_at_2.38.47_PM_kezcqn.jpg" 
          alt="After Construction - Luxury Apartment" 
          className="w-full h-full object-cover"
        loading="lazy" decoding="async" />
        <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-10">
          <span className="text-white text-xs md:text-sm font-semibold tracking-wider uppercase">After Construction</span>
        </div>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src="https://res.cloudinary.com/dbshx9xvx/image/upload/v1784107054/Building_under_construction_raw_RCC_202607151447_vugwax.jpg" 
          alt="Before Construction - Structure" 
          className="w-full h-full object-cover"
        loading="lazy" decoding="async" />
        <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-10">
          <span className="text-white text-xs md:text-sm font-semibold tracking-wider uppercase">Before Construction</span>
        </div>
      </div>

      {/* Divider Line */}
      <div 
        className="absolute top-0 bottom-0 z-30 w-[2px] bg-white/50 backdrop-blur-sm -ml-[1px] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 bg-gold blur-[4px] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>

      {/* Slider Handle */}
      <div 
        className={`absolute top-1/2 -translate-y-1/2 -ml-6 z-40 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center cursor-ew-resize shadow-lg transition-transform duration-300 hover:scale-110 hover:border-gold hover:bg-white/20 hover:shadow-[0_0_20px_rgba(200,164,106,0.3)] ${isDragging ? 'scale-110 border-gold bg-white/20 shadow-[0_0_20px_rgba(200,164,106,0.3)]' : ''}`}
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="flex gap-1 pointer-events-none">
          <div className="w-0.5 h-4 bg-white/70 rounded-full"></div>
          <div className="w-0.5 h-4 bg-white/70 rounded-full"></div>
        </div>
        <div className="absolute inset-0 rounded-full bg-gold blur-[10px] opacity-0 transition-opacity duration-300 group-hover:opacity-40 pointer-events-none"></div>
      </div>

      {/* Expand/Collapse Button */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center group/expand">
        {!expanded && (
          <div className="absolute right-full mr-3 whitespace-nowrap bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 opacity-0 -translate-x-2 pointer-events-none transition-all duration-300 group-hover/expand:opacity-100 group-hover/expand:translate-x-0 hidden sm:block font-medium shadow-xl">
            Expand for Immersive View
          </div>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!expanded);
          }}
          className="bg-black/50 hover:bg-gold hover:text-black text-white backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 transition-colors duration-300 cursor-pointer shadow-lg"
        >
          {expanded ? (
            <>
              <Minimize2 className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline-block">Close View</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline-block">Expand View</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <section id="before-after" className="relative py-16 md:py-32 overflow-hidden bg-primary-bg isolate">
      <Particles count={20} />
      <Glow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold"></div>
            <h2 className="text-gold font-medium tracking-widest uppercase text-sm">BEFORE & AFTER</h2>
            <div className="w-8 h-[1px] bg-gold"></div>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            See the <span className="text-gold-accent">Transformation</span>
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card rounded-[30px] p-2 md:p-4 mx-auto max-w-5xl"
        >
          {!isExpanded && renderComparisonContent(false)}
        </motion.div>
      </div>

      {/* Fullscreen Expanded View */}
      {createPortal(
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
              onClick={() => setIsExpanded(false)}
            >
              <div 
                className="w-full max-w-7xl h-full flex items-center justify-center relative glass-card p-2 md:p-4 rounded-[30px]"
                onClick={(e) => e.stopPropagation()}
              >
                {renderComparisonContent(true)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
