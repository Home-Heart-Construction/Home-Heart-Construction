import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Glow } from './Glow';
import { Particles } from './Particles';

const stats = [
  { value: 15, label: 'Years Experience', suffix: '+' },
  { value: 10, label: 'Projects Completed', suffix: '+' },
  { value: 100, label: 'Happy Families', suffix: '%' },
  { value: 5, label: 'Awards Won', suffix: '+' },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor((progress / duration) * end), end);
      
      setCount(current);
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-24 relative overflow-hidden isolate">
      <Particles count={20} />
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed"></div>
      <div className="absolute inset-0 bg-primary-bg/90 backdrop-blur-sm z-10"></div>
      <Glow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 glass-card border-none bg-white/5"
            >
              <h4 className="text-4xl md:text-5xl font-bold text-gold mb-2 font-sans tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h4>
              <p className="text-white text-sm tracking-widest uppercase font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
