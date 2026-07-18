import { motion } from 'motion/react';
import { Glow } from './Glow';
import { Particles } from './Particles';

const team = [
  {
    name: 'Er. Nasir Asrar',
    position: 'Director',
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1783620718/WhatsApp_Image_2026-07-09_at_10.13.55_PMf_yxrb4l.jpg',
    bio: 'Leads HomeHeart with a strong vision for quality construction, modern architecture, and long-term customer trust.',
    imageStyle: { transform: 'scale(1.15) translateY(2%)' },
  },
  {
    name: 'Shahid Hussain',
    position: 'Document Controller',
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1783620717/WhatsApp_Image_2026-07-09_at_10.05.06_PMgh_zxud7i.jpg',
    bio: 'Ensures accurate project documentation, compliance, and organized workflow throughout every development phase.',
    imageStyle: { transform: 'scale(1.4) translateY(6%)' },
  },
  {
    name: 'Aurenzeb Khan',
    position: 'Logistics Manager',
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1783620717/WhatsApp_Image_2026-07-09_at_10.04.59_PMsf_uifsy0.jpg',
    bio: 'Manages procurement, material coordination, and on-site logistics to keep projects running efficiently.',
    imageStyle: { transform: 'scale(1.3) translateY(3%)' },
  },
  {
    name: 'Md Amin Akram',
    position: 'Project Engineer',
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1783620717/WhatsApp_Image_2026-07-09_at_10.04.58_PMb_rml4gb.jpg',
    bio: 'Supervises engineering execution with a focus on structural quality, safety standards, and timely project delivery.',
    imageStyle: { transform: 'scale(1.4) translateY(7%)' },
  },
  {
    name: 'Amarjeet Saini',
    position: 'Accountant',
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1783620729/WhatsApp_Image_2026-07-09_at_10.04.58_PM_ujdrqn.jpg',
    bio: 'Maintains accurate financial records, budgeting, billing, taxation, and ensures complete financial transparency across all HomeHeart projects.',
    imageStyle: { transform: 'scale(1.3) translateY(5%)' },
  },
  {
    name: 'Manoj Manager',
    position: 'Project Manager',
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1784103350/WhatsApp_Image_2026-07-13_at_2.10.01_PM_s7hlrt.jpg',
    bio: 'Coordinates project execution, manages timelines, supervises construction teams, and ensures successful delivery with the highest quality standards.',
    imageStyle: { transform: 'scale(1.3) translateY(5%)' },
  },
  {
    name: 'Tusif Khan',
    position: 'Supervisor',
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1784103350/WhatsApp_Image_2026-07-13_at_2.10.00_PM_ezsveu.jpg',
    bio: 'Supervises day-to-day site operations, workforce coordination, and maintains quality control throughout every construction stage.',
    imageStyle: { transform: 'scale(1.3) translateY(5%)' },
  },
  {
    name: 'Firoz Ahmad',
    position: 'Site Supervisor',
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1784103350/WhatsApp_Image_2026-07-13_at_2.09.29_PMasghj_vewb1r.jpg',
    bio: 'Monitors on-site execution, ensures worker safety, manages site activities, and keeps construction progress aligned with project schedules.',
    imageStyle: { transform: 'scale(1.3) translateY(5%)' },
  },
  {
    name: 'Arvind Kumar',
    position: 'Foreman',
    image: 'https://res.cloudinary.com/dbshx9xvx/image/upload/v1784103349/WhatsApp_Image_2026-07-13_at_2.09.29_PM_n5av1a.jpg',
    bio: 'Leads construction crews, oversees daily site work, ensures proper workmanship, and supports efficient project execution from foundation to completion.',
    imageStyle: { transform: 'scale(1.3) translateY(5%)' },
  }
];

export function Team() {
  return (
    <section id="team" className="py-32 bg-primary-bg relative isolate overflow-hidden">
      <Particles count={25} />
      <Glow className="top-0 left-1/4 w-[600px] h-[600px] opacity-10" />
      <Glow className="bottom-0 right-1/4 w-[500px] h-[500px] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold"></div>
            <h2 className="text-gold font-medium tracking-widest uppercase text-sm">Our Team</h2>
            <div className="w-8 h-[1px] bg-gold"></div>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-6"
          >
            Meet the <span className="text-gold-accent">Experts</span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg max-w-3xl mx-auto font-light leading-relaxed"
          >
            Behind every successful HomeHeart project is a dedicated team of experienced professionals committed to quality, innovation, transparency, and customer satisfaction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-[20px] p-6 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(200,164,106,0.15)] hover:border-gold/30 transition-all duration-500 relative overflow-hidden h-full"
            >
              {/* Image Container with Glow */}
              <div className="relative w-[150px] h-[150px] mb-5 rounded-full p-[2px] bg-gradient-to-b from-gold/60 to-gold/10 group-hover:from-gold group-hover:to-gold/40 shadow-[0_0_30px_rgba(200,164,106,0.15)] group-hover:shadow-[0_0_40px_rgba(200,164,106,0.3)] transition-all duration-500 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#111] relative z-10 shadow-[inset_0_4px_20px_rgba(0,0,0,0.8)] flex items-center justify-center">
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-[1.05]">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      style={member.imageStyle}
                      className="w-full h-full object-contain object-center"
                    loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <p className="text-gold text-xs font-medium tracking-wide uppercase mb-4">{member.position}</p>
              
              <div className="w-[50px] h-[2px] bg-gold/50 group-hover:bg-gold transition-colors duration-300 mb-4"></div>
              
              <p className="text-text-muted text-sm font-light leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
