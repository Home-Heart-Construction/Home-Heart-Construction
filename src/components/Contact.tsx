import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Glow } from './Glow';
import { Particles } from './Particles';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 bg-secondary-bg relative isolate overflow-hidden">
      <Particles count={35} />
      <Glow className="top-1/2 left-0 w-[600px] h-[600px] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold"></div>
            <h2 className="text-gold font-medium tracking-widest uppercase text-sm">Get In Touch</h2>
            <div className="w-8 h-[1px] bg-gold"></div>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight"
          >
            Contact <span className="text-gold-accent">HomeHeart</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 glass-card p-10 relative overflow-hidden flex flex-col h-full border-gold/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none"></div>
            
            <h4 className="text-2xl font-bold text-white mb-8 relative z-10">Contact Information</h4>
            
            <div className="space-y-8 relative z-10 flex-grow">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:border-gold transition-colors duration-300">
                  <MapPin className="text-gold w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Corporate Office</h5>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Nagmatia Colony<br />
                    Opposite Himalyan Opticals<br />
                    Gaya, Bihar 823001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:border-gold transition-colors duration-300">
                  <Phone className="text-gold w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Call Us</h5>
                  <p className="text-text-muted text-sm">+91 8969 652 817</p>
                  <p className="text-text-muted text-sm">+91 9142 298 689</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:border-gold transition-colors duration-300">
                  <Mail className="text-gold w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Email Us</h5>
                  <p className="text-text-muted text-sm">info@homeheart.in</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
              <h5 className="text-white font-medium mb-4">Follow Us</h5>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=100063966431581" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-colors duration-300 text-white">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 glass-card p-10 relative"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="text" id="name" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300 peer" placeholder=" " required />
                  <label htmlFor="name" className="absolute left-0 top-3 text-text-muted text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-4 peer-valid:text-xs">Your Name</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300 peer" placeholder=" " required />
                  <label htmlFor="email" className="absolute left-0 top-3 text-text-muted text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-4 peer-valid:text-xs">Email Address</label>
                </div>
              </div>
              
              <div className="relative group">
                <input type="tel" id="phone" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300 peer" placeholder=" " required />
                <label htmlFor="phone" className="absolute left-0 top-3 text-text-muted text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-4 peer-valid:text-xs">Phone Number</label>
              </div>
              
              <div className="relative group pt-4">
                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300 peer resize-none" placeholder=" " required></textarea>
                <label htmlFor="message" className="absolute left-0 top-7 text-text-muted text-sm transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gold peer-valid:top-0 peer-valid:text-xs">Your Message</label>
              </div>
              
              <button type="submit" className="btn-primary group flex items-center justify-center gap-2 w-full py-4 mt-8">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
