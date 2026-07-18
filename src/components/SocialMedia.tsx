import { motion } from 'motion/react';
import { Glow } from './Glow';
import { Particles } from './Particles';

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.582 6.186a2.684 2.684 0 0 0-1.884-1.884C17.986 3.843 12 3.843 12 3.843s-5.986 0-7.698.459A2.684 2.684 0 0 0 2.418 6.186C1.959 7.898 1.959 12 1.959 12s0 4.102.459 5.814a2.684 2.684 0 0 0 1.884 1.884c1.712.459 7.698.459 7.698.459s5.986 0 7.698-.459a2.684 2.684 0 0 0 1.884-1.884c.459-1.712.459-5.814.459-5.814s0-4.102-.459-5.814Z" fill="#FF0000"/>
    <path d="M9.998 15.485V8.514l6.502 3.486-6.502 3.485Z" fill="#FFFFFF"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" fill="#1877F2"/>
    <path d="M16.671 15.542l.532-3.469h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V5.002s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.637H7.078v3.469h3.047v8.385a12.09 12.09 0 0 0 3.75 0v-8.385h2.796Z" fill="#FFFFFF"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)"/>
    <path d="M12 7.167A4.833 4.833 0 1 0 16.833 12 4.839 4.839 0 0 0 12 7.167Zm0 7.916A3.083 3.083 0 1 1 15.083 12 3.086 3.086 0 0 1 12 15.083Z" fill="#FFFFFF"/>
    <circle cx="17.25" cy="6.75" r="1.15" fill="#FFFFFF"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm7.75 14.5a3.254 3.254 0 0 1-3.25 3.25h-9A3.254 3.254 0 0 1 4.25 16.5v-9A3.254 3.254 0 0 1 7.5 4.25h9a3.254 3.254 0 0 1 3.25 3.25v9Z" fill="url(#ig-grad)"/>
    <path d="M16.5 4.25h-9A3.254 3.254 0 0 0 4.25 7.5v9a3.254 3.254 0 0 0 3.25 3.25h9a3.254 3.254 0 0 0 3.25-3.25v-9A3.254 3.254 0 0 0 16.5 4.25Zm1.5 12.25a1.502 1.502 0 0 1-1.5 1.5h-9a1.502 1.502 0 0 1-1.5-1.5v-9a1.502 1.502 0 0 1 1.5-1.5h9a1.502 1.502 0 0 1 1.5 1.5v9Z" fill="#FFFFFF"/>
    <defs>
      <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEE411"/>
        <stop offset="0.1" stopColor="#FEDB16"/>
        <stop offset="0.2" stopColor="#FEC125"/>
        <stop offset="0.3" stopColor="#FE983D"/>
        <stop offset="0.4" stopColor="#FE5F5E"/>
        <stop offset="0.5" stopColor="#FE2181"/>
        <stop offset="0.6" stopColor="#9000DC"/>
        <stop offset="1" stopColor="#515BD4"/>
      </linearGradient>
    </defs>
  </svg>
);

const SOCIAL_LINKS = [
  {
    platform: 'YouTube',
    subtitle: 'Latest Videos',
    url: 'PASTE_OFFICIAL_YOUTUBE_LINK',
    icon: YoutubeIcon,
  },
  {
    platform: 'Facebook',
    subtitle: 'Official Updates',
    url: 'https://www.facebook.com/profile.php?id=100063966431581',
    icon: FacebookIcon,
  },
  {
    platform: 'Instagram',
    subtitle: 'Daily Stories',
    url: 'https://www.instagram.com/homeheart_gaya?igsh=emoxb3ZiaTdjcTI4',
    icon: InstagramIcon,
  }
];

export function SocialMedia() {
  return (
    <section id="social-media" className="py-16 md:py-32 bg-primary-bg relative isolate overflow-hidden">
      <Particles count={20} />
      <Glow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold"></div>
            <h2 className="text-gold font-medium tracking-widest uppercase text-sm">FOLLOW US</h2>
            <div className="w-8 h-[1px] bg-gold"></div>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-6 text-white"
          >
            Connect with <span className="text-gold-accent">HomeHeart</span>
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg max-w-3xl mx-auto font-light leading-relaxed"
          >
            Stay connected with HomeHeart Construction Pvt. Ltd. for the latest project updates, construction milestones, new launches, behind-the-scenes content, customer stories, and company announcements across all our official social media platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[750px] mx-auto">
          {SOCIAL_LINKS.map((social, index) => {
            const Icon = social.icon;
            const isLastOdd = SOCIAL_LINKS.length % 2 !== 0 && index === SOCIAL_LINKS.length - 1;
            
            return (
              <div key={social.platform} className={`flex justify-center ${isLastOdd ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.platform}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full max-w-[260px] lg:max-w-none group relative glass-card p-8 lg:p-10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(200,164,106,0.15)] border-white/5 hover:border-gold/30 rounded-3xl ${isLastOdd ? 'sm:w-[260px] lg:w-full' : ''}`}
                >
                  <div className="absolute inset-0 bg-gold blur-[50px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
                  
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gold/10 group-hover:border-gold/50 group-hover:scale-110">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                  
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {social.platform}
                  </h4>
                  
                  <p className="text-text-muted text-sm font-medium tracking-wide uppercase">
                    {social.subtitle}
                  </p>
                </motion.a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
