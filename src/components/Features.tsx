import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Users, Clock, Compass, ThumbsUp } from 'lucide-react';
import { Glow } from './Glow';
import { Particles } from './Particles';

const features = [
  {
    icon: ShieldCheck,
    title: 'Guaranteed Construction Quality',
    description: 'We use the highest grade materials and rigorous testing to ensure your home lasts for generations.'
  },
  {
    icon: Sparkles,
    title: 'Modern Design',
    description: 'Architectural brilliance that combines aesthetic appeal with functional living spaces.'
  },
  {
    icon: ThumbsUp,
    title: 'Trusted Builder',
    description: 'A legacy of trust built on transparency, ethical practices, and delivering on our promises.'
  },
  {
    icon: Users,
    title: 'Experienced Engineers',
    description: 'Our team comprises industry veterans who bring unparalleled expertise to every project.'
  },
  {
    icon: Compass,
    title: 'Premium Materials',
    description: 'Sourcing only the finest materials from reputable global brands for a luxurious finish.'
  },
  {
    icon: Clock,
    title: 'Excellent Customer Support',
    description: 'Dedicated assistance from booking to handover, ensuring a seamless home-buying experience.'
  }
];

export function Features() {
  return (
    <section id="why-us" className="py-32 bg-secondary-bg relative isolate overflow-hidden">
      <Particles count={35} />
      <Glow className="bottom-0 right-0 w-[600px] h-[600px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold"></div>
            <h2 className="text-gold font-medium tracking-widest uppercase text-sm">Why Choose Us</h2>
            <div className="w-8 h-[1px] bg-gold"></div>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight"
          >
            The HomeHeart <span className="text-gold-accent">Advantage</span>
          </motion.h3>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-text-muted text-lg"
          >
            We don't just build apartments; we craft lifestyles. Discover what sets us apart in the luxury real estate market.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center text-center p-8 glass-card hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-gold/30 transition-all duration-500 relative">
                  <div className="absolute inset-0 rounded-full bg-gold/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <feature.icon className="w-8 h-8 text-gold relative z-10" strokeWidth={1} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-text-muted leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
