import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  };
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why HomeHeart', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 force-dark-vars ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8">
        <div className={`flex items-center justify-between rounded-full transition-all duration-500 px-6 py-3 ${
          isScrolled ? 'glass-nav' : 'bg-transparent'
        }`}>
          <div className="flex-shrink-0">
            <Link to="/#" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-white">Home</span>Heart
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link to={"/" + link.href} 
                key={link.name}
                
                className={`text-sm font-medium nav-link-text relative group ${(location.hash === link.href || (location.pathname === "/" && location.hash === "" && link.href === "#home")) ? "text-gold" : ""}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={toggleTheme} 
              className="text-white hover:text-gold transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/#contact" className="px-6 py-2.5 btn-secondary">
              Enquire Now
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="text-white hover:text-gold transition-colors duration-300 p-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-[#0A0A0B]/95 backdrop-blur-xl border-b border-white/10 absolute top-full left-0 right-0 glass-nav"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link to={"/" + link.href} 
              key={link.name}
              
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-4 text-base font-medium nav-link-text hover:bg-white/5 rounded-xl ${(location.hash === link.href || (location.pathname === "/" && location.hash === "" && link.href === "#home")) ? "text-gold" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
