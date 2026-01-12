import { motion } from 'framer-motion';

interface EraNavigationProps {
  currentEra: number;
  eras: string[];
  onEraClick: (index: number) => void;
}

export default function EraNavigation({ currentEra, eras, onEraClick }: EraNavigationProps) {
  return (
    <nav className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-5">
      {eras.map((era, index) => (
        <button
          key={era}
          onClick={() => onEraClick(index)}
          className="group flex items-center gap-3 py-1"
        >
          <span 
            className={`text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
              currentEra === index 
                ? 'opacity-100 text-primary translate-x-0' 
                : 'opacity-0 group-hover:opacity-80 text-muted-foreground translate-x-2 group-hover:translate-x-0'
            }`}
          >
            {era}
          </span>
          <div className="relative">
            <motion.div 
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentEra === index 
                  ? 'bg-primary' 
                  : 'bg-muted-foreground/30 group-hover:bg-muted-foreground/60'
              }`}
              animate={{
                scale: currentEra === index ? 1.4 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
            {currentEra === index && (
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/40"
                animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </div>
        </button>
      ))}
    </nav>
  );
}