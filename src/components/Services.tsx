import { motion } from 'motion/react';
import { Building2, HardHat, Pickaxe, Ruler, Wrench, Home, Briefcase, TrendingUp } from 'lucide-react';
import { Glow } from './Glow';
import { Particles } from './Particles';

const services = [
  {
    icon: Building2,
    title: 'Premium Apartment Construction',
    description: 'Developing high-end residential apartments with uncompromising quality and modern amenities.'
  },
  {
    icon: Home,
    title: 'Residential Development',
    description: 'Crafting thoughtfully designed homes that offer the perfect balance of luxury and comfort.'
  },
  {
    icon: Briefcase,
    title: 'Commercial Buildings',
    description: 'Creating state-of-the-art commercial spaces tailored for business success and growth.'
  },
  {
    icon: TrendingUp,
    title: 'Property Development',
    description: 'Strategic development of real estate assets to maximize value and community impact.'
  },
  {
    icon: Ruler,
    title: 'Structural Planning',
    description: 'Expert architectural and structural planning ensuring safety, durability, and aesthetics.'
  },
  {
    icon: Wrench,
    title: 'Renovation & Remodeling',
    description: 'Transforming existing properties into modern masterpieces with premium upgrades.'
  },
  {
    icon: HardHat,
    title: 'Development Management',
    description: 'Comprehensive oversight of the entire development lifecycle from concept to completion.'
  },
  {
    icon: Pickaxe,
    title: 'Asset Management',
    description: 'Professional management of real estate portfolios to optimize performance and returns.'
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-32 bg-secondary-bg isolate overflow-hidden">
      <Particles count={40} />
      <Glow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold"></div>
            <h2 className="text-gold font-medium tracking-widest uppercase text-sm">Our Expertise</h2>
            <div className="w-8 h-[1px] bg-gold"></div>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight"
          >
            Exceptional <span className="text-gold-accent">Services</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 sm:p-8 group hover:-translate-y-2 hover:border-gold/30 transition-all duration-500 relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                </div>
                
                <h4 className="text-xl font-semibold mb-4 text-white group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h4>
                
                <div className="w-12 h-[2px] bg-white/10 mb-4 group-hover:w-full group-hover:bg-gold transition-all duration-500"></div>
                
                <p className="text-text-muted text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
