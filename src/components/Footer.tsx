import { Link } from "react-router-dom";
import { Particles } from './Particles';

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative isolate overflow-hidden footer-dark-section">
      <Particles count={20} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <Link to="/#" className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-6">
              <span className="text-white">Home</span>Heart
            </Link>
            <p className="footer-body-text text-sm leading-relaxed mb-6">
              Building luxury homes and commercial spaces with an unwavering commitment to quality, design, and customer satisfaction.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Projects', 'Why Choose Us', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-text-muted hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-4">
              {['Apartment Construction', 'Commercial Buildings', 'Property Development', 'Asset Management', 'Renovation'].map((link) => (
                <li key={link}>
                  <Link to="/#services" className="text-text-muted hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Subscribe to our newsletter for the latest project updates and offers.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-gold w-full transition-colors"
              />
              <button type="submit" className="bg-gold text-black px-4 py-2 rounded-full font-medium hover:bg-gold-light transition-colors text-sm">
                Join
              </button>
            </form>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} HomeHeart Construction. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/#" className="footer-link hover:text-gold text-xs transition-colors">Privacy Policy</Link>
            <Link to="/#" className="footer-link hover:text-gold text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
