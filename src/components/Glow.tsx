import { motion } from 'motion/react';

interface GlowProps {
  className?: string;
  delay?: number;
}

export function Glow({ className = '', delay = 0 }: GlowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
        scale: [0.8, 1.1, 0.8] 
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      className={`glow-circle w-[400px] h-[400px] bg-white ${className}`}
    />
  );
}
