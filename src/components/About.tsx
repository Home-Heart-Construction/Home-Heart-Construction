import { motion } from 'motion/react';
import { Glow } from './Glow';
import { Particles } from './Particles';

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-primary-bg isolate">
      <Particles count={30} />
      <Glow className="-top-20 -left-20" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[450px] sm:h-[550px] md:h-[600px] rounded-[32px] md:rounded-[40px] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gold/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
            <img 
              src="https://res.cloudinary.com/dbshx9xvx/image/upload/v1784101746/WhatsApp_Image_2026-07-14_at_10.25.32_PM_nhgdrr.jpg" 
              alt="Luxury Real Estate Exterior" 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
            loading="lazy" decoding="async" />
            {/* Architectural accent lines */}
            <div className="absolute top-8 left-8 w-24 h-[1px] bg-white/40 z-20"></div>
            <div className="absolute top-8 left-8 w-[1px] h-24 bg-white/40 z-20"></div>
            <div className="absolute bottom-8 right-8 w-24 h-[1px] bg-white/40 z-20"></div>
            <div className="absolute bottom-8 right-8 w-[1px] h-24 bg-white/40 z-20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-8 sm:p-10 md:p-14 rounded-[28px] md:rounded-[30px] relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[50px] rounded-full"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold"></div>
              <h2 className="text-gold font-medium tracking-widest uppercase text-sm">About Us</h2>
            </div>
            
            <h3 className="text-[32px] leading-tight sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Building Your <br />
              Dream <span className="text-gold-accent">Reality</span>
            </h3>
            
            <div className="space-y-6 text-text-muted text-lg font-light leading-relaxed">
              <p>
                HomeHeart is a premium real estate development company dedicated to delivering thoughtfully designed residential projects with exceptional construction quality and modern architecture.
              </p>
              <p>
                Our mission is to build homes that combine comfort, elegance, durability, and value for families looking for a better lifestyle.
              </p>
              <p>
                From planning to execution, HomeHeart focuses on quality craftsmanship, transparent processes, timely delivery, and customer satisfaction.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-4xl font-bold text-gold mb-2">15+</p>
                <p className="text-sm text-white uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="w-[1px] h-12 bg-white/10"></div>
              <div>
                <p className="text-4xl font-bold text-gold mb-2">10+</p>
                <p className="text-sm text-white uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
