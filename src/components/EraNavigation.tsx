import { motion } from 'framer-motion';
import { useState } from 'react';

interface EraNavigationProps {
  currentEra: number;
  eras: string[];
  onEraClick: (index: number) => void;
}

const eraIcons: Record<string, string> = {
  Spark: '✦',
  Machine: '⚙',
  Human: '◐',
  AI: '◈',
  Rajai: '◆',
};

const eraColors: Record<string, string> = {
  Spark: 'from-spark-glow to-spark-pulse',
  Machine: 'from-machine-cyan to-machine-green',
  Human: 'from-human-accent to-human-secondary',
  AI: 'from-ai-neural to-ai-synapse',
  Rajai: 'from-rajai-accent to-rajai-highlight',
};

export default function EraNavigation({ currentEra, eras, onEraClick }: EraNavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {eras.map((era, index) => (
          <motion.button
            key={era}
            onClick={() => onEraClick(index)}
            className="group flex items-center gap-3 py-1.5"
            whileHover={{ x: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.span 
              className={`text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                currentEra === index 
                  ? 'opacity-100 text-primary' 
                  : 'opacity-0 group-hover:opacity-80 text-muted-foreground'
              }`}
              initial={{ x: 8, opacity: 0 }}
              animate={{ 
                x: currentEra === index ? 0 : 8, 
                opacity: currentEra === index ? 1 : 0 
              }}
            >
              {era}
            </motion.span>
            
            <div className="relative">
              <motion.div 
                className={`w-3 h-3 rounded-full transition-all duration-300 flex items-center justify-center text-[8px] ${
                  currentEra === index 
                    ? `bg-gradient-to-br ${eraColors[era]}` 
                    : 'bg-muted-foreground/25 group-hover:bg-muted-foreground/50'
                }`}
                animate={{ scale: currentEra === index ? 1.3 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
              
              {currentEra === index && (
                <>
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${eraColors[era]} opacity-40`}
                    animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${eraColors[era]} opacity-20`}
                    animate={{ scale: [1, 3, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                </>
              )}
            </div>
          </motion.button>
        ))}
        
        {/* Era indicator line */}
        <div className="absolute -left-2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />
      </nav>

      {/* Mobile Navigation */}
      <motion.nav 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="flex items-center gap-1 px-2 py-2 bg-card/90 backdrop-blur-xl rounded-full border border-border/60 shadow-2xl"
          layout
        >
          {eras.map((era, index) => (
            <motion.button
              key={era}
              onClick={() => onEraClick(index)}
              className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                currentEra === index 
                  ? 'px-4 py-2 bg-primary/10' 
                  : 'w-10 h-10'
              }`}
              layout
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className={`text-sm transition-colors ${
                  currentEra === index ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {eraIcons[era]}
              </motion.span>
              
              {currentEra === index && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="ml-1.5 text-xs font-mono text-primary whitespace-nowrap"
                >
                  {era}
                </motion.span>
              )}
              
              {currentEra === index && (
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/30"
                  layoutId="mobile-era-indicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </motion.nav>

      {/* Era title overlay (appears briefly when changing eras) */}
      <motion.div
        key={currentEra}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
        transition={{ duration: 1.5, times: [0, 0.2, 0.8, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
      >
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground/60 uppercase">
          Act {['I', 'II', 'III', 'IV', 'V'][currentEra]} — {eras[currentEra]}
        </span>
      </motion.div>
    </>
  );
}
