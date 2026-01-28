import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface StoryTransitionProps {
  fromEra: string;
  toEra: string;
  transitionText: string;
  className?: string;
}

export default function StoryTransition({ fromEra, toEra, transitionText, className = '' }: StoryTransitionProps) {
  return (
    <motion.div 
      className={`relative py-32 flex flex-col items-center justify-center text-center ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      {/* Connecting line */}
      <motion.div 
        className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-rajai-gold/20 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Transition content */}
      <div className="relative z-10 px-8">
        <motion.p 
          className="era-label text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {fromEra} → {toEra}
        </motion.p>
        
        <motion.p 
          className="text-xl md:text-2xl text-foreground/80 max-w-lg italic font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          "{transitionText}"
        </motion.p>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-16"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5 text-rajai-gold/50" />
      </motion.div>
    </motion.div>
  );
}
