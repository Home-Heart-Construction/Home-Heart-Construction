import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Glow } from './Glow';
import { Particles } from './Particles';

const faqs = [
  {
    question: 'Do you offer 2 BHK and 3 BHK apartments?',
    answer: 'Yes. HomeHeart offers thoughtfully designed 2 BHK and 3 BHK apartments with modern layouts, premium construction quality, and family-friendly amenities.'
  },
  {
    question: 'Where is your project located?',
    answer: 'Our residential project is located in Gaya, Bihar, with convenient access to schools, hospitals, markets, railway station, and major city roads.'
  },
  {
    question: 'Can I book an apartment before construction is completed?',
    answer: 'Yes. Early booking options are available, allowing customers to choose their preferred unit and enjoy attractive pricing.'
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No. HomeHeart believes in complete transparency. All pricing, taxes, and applicable charges are clearly communicated before booking.'
  },
  {
    question: 'What construction materials do you use?',
    answer: 'We use high-quality branded construction materials and follow strict quality standards to ensure durability, safety, and long-term value.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-primary-bg relative isolate overflow-hidden">
      <Particles count={30} />
      <Glow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-gold"></div>
            <h2 className="text-gold font-medium tracking-widest uppercase text-sm">FAQs</h2>
            <div className="w-8 h-[1px] bg-gold"></div>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-6"
          >
            Frequently Asked <span className="text-gold-accent">Questions</span>
          </motion.h3>
          
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-text-muted text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            We understand that buying a home is a big decision. Here are answers to the most common questions our customers ask.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-card rounded-[24px] border border-white/10 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-gold/50 shadow-[0_8px_32px_rgba(200,164,106,0.15)]' : 'hover:border-gold/30 hover:-translate-y-1 hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group min-h-[60px] md:min-h-0"
              >
                <span className="text-lg md:text-xl font-medium text-white group-hover:text-gold transition-colors duration-300 pr-8">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  openIndex === index ? 'bg-gold rotate-180' : 'bg-white/5 border border-white/10 group-hover:border-gold/50'
                }`}>
                  <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                    openIndex === index ? 'text-black' : 'text-gold'
                  }`} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-text-muted font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
