import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  era: 'spark' | 'machine' | 'ai' | 'rajai';
  icon?: string;
}

interface InteractiveTimelineProps {
  events: TimelineEvent[];
  variant?: 'horizontal' | 'vertical';
}

const eraColors = {
  spark: {
    bg: 'bg-spark-glow/10',
    border: 'border-spark-glow/30',
    text: 'text-spark-glow',
    glow: 'shadow-[0_0_30px_hsl(var(--spark-glow)/0.3)]',
    dot: 'bg-spark-glow',
  },
  machine: {
    bg: 'bg-machine-green/10',
    border: 'border-machine-green/30',
    text: 'text-machine-green',
    glow: 'shadow-[0_0_30px_hsl(var(--machine-green)/0.3)]',
    dot: 'bg-machine-green',
  },
  ai: {
    bg: 'bg-ai-neural/10',
    border: 'border-ai-neural/30',
    text: 'text-ai-neural',
    glow: 'shadow-[0_0_30px_hsl(var(--ai-neural)/0.3)]',
    dot: 'bg-ai-neural',
  },
  rajai: {
    bg: 'bg-rajai-accent/10',
    border: 'border-rajai-accent/30',
    text: 'text-rajai-accent',
    glow: 'shadow-[0_0_30px_hsl(var(--rajai-accent)/0.3)]',
    dot: 'bg-rajai-accent',
  },
};

export default function InteractiveTimeline({ events, variant = 'horizontal' }: InteractiveTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (variant === 'vertical') {
    return (
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-spark-glow/50 via-machine-green/50 via-ai-neural/50 to-rajai-accent/50" />
        
        <div className="space-y-6">
          {events.map((event, index) => {
            const colors = eraColors[event.era];
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={`${event.year}-${index}`}
                className="relative pl-16 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                {/* Dot */}
                <motion.div
                  className={`absolute left-4 top-2 w-5 h-5 rounded-full ${colors.dot} border-2 border-background z-10`}
                  animate={{
                    scale: isActive || isHovered ? 1.4 : 1,
                    boxShadow: isActive || isHovered ? `0 0 20px hsl(var(--${event.era === 'rajai' ? 'rajai-accent' : event.era === 'spark' ? 'spark-glow' : event.era === 'machine' ? 'machine-green' : 'ai-neural'}) / 0.6)` : 'none',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                />
                
                {/* Content */}
                <motion.div
                  className={`p-4 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-300`}
                  animate={{
                    borderColor: isActive || isHovered ? `hsl(var(--${event.era === 'rajai' ? 'rajai-accent' : event.era === 'spark' ? 'spark-glow' : event.era === 'machine' ? 'machine-green' : 'ai-neural'}))` : undefined,
                  }}
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {event.icon && <span className="text-xl">{event.icon}</span>}
                    <span className={`font-mono text-sm ${colors.text}`}>{event.year}</span>
                  </div>
                  <h4 className="font-display font-medium text-foreground mb-1">{event.title}</h4>
                  
                  <AnimatePresence>
                    {(isActive || isHovered) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-muted-foreground overflow-hidden"
                      >
                        {event.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // Horizontal variant
  return (
    <div className="relative overflow-x-auto pb-4 scrollbar-hide">
      {/* Horizontal line */}
      <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-spark-glow/50 via-machine-green/50 via-ai-neural/50 to-rajai-accent/50" />
      
      <div className="flex gap-4 min-w-max px-4">
        {events.map((event, index) => {
          const colors = eraColors[event.era];
          const isActive = activeIndex === index;
          const isHovered = hoveredIndex === index;
          
          return (
            <motion.div
              key={`${event.year}-${index}`}
              className="relative pt-12 cursor-pointer"
              style={{ width: 200 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              {/* Dot */}
              <motion.div
                className={`absolute top-5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${colors.dot} border-2 border-background z-10`}
                animate={{
                  scale: isActive || isHovered ? 1.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              />
              
              {/* Content */}
              <motion.div
                className={`p-4 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm h-full transition-all duration-300`}
                animate={{
                  y: isActive || isHovered ? -8 : 0,
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {event.icon && <span className="text-lg">{event.icon}</span>}
                  <span className={`font-mono text-xs ${colors.text}`}>{event.year}</span>
                </div>
                <h4 className="font-display font-medium text-foreground text-sm mb-1">{event.title}</h4>
                
                <AnimatePresence>
                  {(isActive || isHovered) && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-muted-foreground overflow-hidden"
                    >
                      {event.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
