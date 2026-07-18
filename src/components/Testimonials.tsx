import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { Glow } from './Glow';
import { Particles } from './Particles';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Homeowner, The Skyline',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    text: 'Moving into a HomeHeart apartment was the best decision for our family. The attention to detail, construction quality, and the modern amenities provided are truly world-class.',
  },
  {
    name: 'Priya Sharma',
    role: 'Resident, Aura Heights',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    text: 'The transparency and professionalism shown by the HomeHeart team throughout the buying process were exceptional. We are in love with our new luxury home.',
  },
  {
    name: 'Amit Patel',
    role: 'Investor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    text: 'As an investor, I look for quality and timely delivery. HomeHeart consistently exceeds expectations. Their properties offer great ROI and unparalleled craftsmanship.',
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-primary-bg relative overflow-hidden isolate">
      <Particles count={25} />
      <Glow className="top-0 left-0 w-[500px] h-[500px] opacity-10" />
      <Glow className="bottom-0 right-0 w-[500px] h-[500px] opacity-10" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold"></div>
            <h2 className="text-gold font-medium tracking-widest uppercase text-sm">Testimonials</h2>
            <div className="w-8 h-[1px] bg-gold"></div>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight"
          >
            Client <span className="text-gold-accent">Stories</span>
          </motion.h3>
        </div>

        <div className="relative h-[400px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ 
                opacity: index === currentIndex ? 1 : 0, 
                x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
                scale: index === currentIndex ? 1 : 0.9,
                zIndex: index === currentIndex ? 10 : 0,
                pointerEvents: index === currentIndex ? 'auto' : 'none'
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <div className="glass-card p-10 md:p-16 h-full flex flex-col items-center text-center relative border-gold/20">
                <Quote className="absolute top-10 left-10 w-16 h-16 text-white/5" />
                
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-10 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-auto flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gold text-sm uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center gap-3 mt-10 relative z-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'w-10 bg-gold' : 'w-4 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
