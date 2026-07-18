import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen h-screen w-full overflow-hidden flex items-center justify-center force-dark-vars">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dbshx9xvx/video/upload/v1782807984/Floating_villa_entrance_opening___202606301347_gwr_video_mvp_wkfl2u.mp4" type="video/mp4" />
        </video>
        {/* Overlays for premium look */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-primary-bg/50 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="text-sm font-medium tracking-wider text-gold uppercase">Welcome to HomeHeart</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-[44px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 max-w-5xl leading-tight"
        >
          Luxury Living <br />
          Begins <span className="text-gold-accent">Here.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 font-light"
        >
          Premium 2 & 3 BHK Luxury Apartments in Gaya, Bihar Crafted with Quality, Trust & Modern Design.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row w-full sm:w-auto px-6 sm:px-0 items-center justify-center gap-4 sm:gap-6 mt-4"
        >
          <a
            href="#projects"
            className="btn-primary group flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 w-full sm:w-auto text-[15px]"
          >
            Explore Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="btn-secondary flex justify-center items-center px-8 py-3.5 md:py-4 w-full sm:w-auto backdrop-blur-md text-[15px]"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 48], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
