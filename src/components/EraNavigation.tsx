import { motion } from 'framer-motion';
import { useState } from 'react';

interface EraNavigationProps {
  currentEra: number;
  eras: string[];
  onEraClick: (index: number) => void;
}

// 4-Act Story Structure - distinct colors per era
const eraIcons: Record<string, string> = {
  Spark: '🔥',
  Machine: '⚙️',
  AI: '🧠',
  Rajai: '◆',
};

const eraLabels: Record<string, string> = {
  Spark: 'The Spark',
  Machine: 'The Machine',
  AI: 'The Mind',
  Rajai: 'The Architect',
};

// Completely distinct color gradients per era
const eraStyles: Record<string, { gradient: string; glow: string; text: string }> = {
  Spark: {
    gradient: 'from-spark-glow via-spark-ember to-spark-flame',
    glow: 'shadow-[0_0_20px_hsl(var(--spark-glow)/0.5)]',
    text: 'text-spark-glow',
  },
  Machine: {
    gradient: 'from-machine-phosphor via-machine-bright to-machine-dim',
    glow: 'shadow-[0_0_20px_hsl(var(--machine-phosphor)/0.5)]',
    text: 'text-machine-phosphor',
  },
  AI: {
    gradient: 'from-ai-neural via-ai-synapse to-ai-glow',
    glow: 'shadow-[0_0_20px_hsl(var(--ai-neural)/0.5)]',
    text: 'text-ai-neural',
  },
  Rajai: {
    gradient: 'from-rajai-gold via-rajai-highlight to-rajai-gold',
    glow: 'shadow-[0_0_20px_hsl(var(--rajai-gold)/0.5)]',
    text: 'text-rajai-gold',
  },
};

export default function EraNavigation({ currentEra, eras, onEraClick }: EraNavigationProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-5">
        {eras.map((era, index) => {
          const style = eraStyles[era];
          const isActive = currentEra === index;
          
          return (
            <motion.button
              key={era}
              onClick={() => onEraClick(index)}
              className="group flex items-center gap-3 py-1"
              whileHover={{ x: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.span 
                className={`text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                  isActive ? `opacity-100 ${style.text}` : 'opacity-0 group-hover:opacity-70 text-muted-foreground'
                }`}
                initial={{ x: 10, opacity: 0 }}
                animate={{ 
                  x: isActive ? 0 : 10, 
                  opacity: isActive ? 1 : 0 
                }}
              >
                {eraLabels[era]}
              </motion.span>
              
              <div className="relative">
                <motion.div 
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-br ${style.gradient} ${style.glow}` 
                      : 'bg-muted-foreground/20 group-hover:bg-muted-foreground/40'
                  }`}
                  animate={{ scale: isActive ? 1.4 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
                
                {isActive && (
                  <>
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${style.gradient} opacity-30`}
                      animate={{ scale: [1, 2.8, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </>
                )}
              </div>
            </motion.button>
          );
        })}
        
        {/* Vertical connector line */}
        <div className="absolute -left-2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/30 to-transparent" />
      </nav>

      {/* Mobile Navigation */}
      <motion.nav 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="flex items-center gap-1.5 px-2 py-2 bg-card/95 backdrop-blur-xl rounded-full border border-border/50 shadow-2xl"
          layout
        >
          {eras.map((era, index) => {
            const style = eraStyles[era];
            const isActive = currentEra === index;
            
            return (
              <motion.button
                key={era}
                onClick={() => onEraClick(index)}
                className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                  isActive ? `px-4 py-2 ${style.text}` : 'w-10 h-10'
                }`}
                layout
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className={`text-sm transition-colors ${
                    isActive ? style.text : 'text-muted-foreground'
                  }`}
                >
                  {eraIcons[era]}
                </motion.span>
                
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className={`ml-1.5 text-xs font-mono ${style.text} whitespace-nowrap`}
                  >
                    {eraLabels[era]}
                  </motion.span>
                )}
                
                {isActive && (
                  <motion.div
                    className={`absolute inset-0 rounded-full border ${style.text.replace('text-', 'border-')}/40`}
                    layoutId="mobile-era-indicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </motion.nav>

      {/* Era title overlay */}
      <motion.div
        key={currentEra}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
        transition={{ duration: 1.5, times: [0, 0.2, 0.8, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
      >
        <span className={`font-mono text-xs tracking-[0.3em] uppercase ${eraStyles[eras[currentEra]]?.text || 'text-muted-foreground'}/60`}>
          Act {['I', 'II', 'III', 'IV'][currentEra]} — {eraLabels[eras[currentEra]] || eras[currentEra]}
        </span>
      </motion.div>
    </>
  );
}
