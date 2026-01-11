import { motion } from 'framer-motion';

interface EraNavigationProps {
  currentEra: number;
  eras: string[];
  onEraClick: (index: number) => void;
}

export default function EraNavigation({ currentEra, eras, onEraClick }: EraNavigationProps) {
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {eras.map((era, index) => (
        <button
          key={era}
          onClick={() => onEraClick(index)}
          className="group flex items-center gap-3"
        >
          <span 
            className={`text-xs font-mono uppercase tracking-wider transition-all duration-300 opacity-0 group-hover:opacity-100 ${
              currentEra === index ? 'opacity-100 text-primary' : 'text-muted-foreground'
            }`}
          >
            {era}
          </span>
          <motion.div 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentEra === index 
                ? 'bg-primary scale-150' 
                : 'bg-muted-foreground/40 group-hover:bg-muted-foreground'
            }`}
            animate={{
              scale: currentEra === index ? 1.5 : 1,
            }}
          />
        </button>
      ))}
    </nav>
  );
}
