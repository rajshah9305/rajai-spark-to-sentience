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

// Distinct era color schemes
const eraStyles = {
  spark: {
    bg: 'bg-spark-glow/8',
    bgHover: 'bg-spark-glow/15',
    border: 'border-spark-glow/25',
    borderHover: 'border-spark-glow/60',
    text: 'text-spark-glow',
    dot: 'bg-gradient-to-br from-spark-glow to-spark-ember',
    glow: '0 0 25px hsl(35 100% 55% / 0.5)',
    line: 'from-spark-glow/60 to-spark-ember/40',
  },
  machine: {
    bg: 'bg-machine-phosphor/6',
    bgHover: 'bg-machine-phosphor/12',
    border: 'border-machine-phosphor/25',
    borderHover: 'border-machine-phosphor/60',
    text: 'text-machine-phosphor',
    dot: 'bg-gradient-to-br from-machine-phosphor to-machine-bright',
    glow: '0 0 25px hsl(120 100% 45% / 0.5)',
    line: 'from-machine-phosphor/60 to-machine-dim/40',
  },
  ai: {
    bg: 'bg-ai-neural/6',
    bgHover: 'bg-ai-neural/12',
    border: 'border-ai-neural/25',
    borderHover: 'border-ai-neural/60',
    text: 'text-ai-neural',
    dot: 'bg-gradient-to-br from-ai-neural to-ai-synapse',
    glow: '0 0 25px hsl(175 80% 45% / 0.5)',
    line: 'from-ai-neural/60 to-ai-pulse/40',
  },
  rajai: {
    bg: 'bg-rajai-gold/6',
    bgHover: 'bg-rajai-gold/12',
    border: 'border-rajai-gold/25',
    borderHover: 'border-rajai-gold/60',
    text: 'text-rajai-gold',
    dot: 'bg-gradient-to-br from-rajai-gold to-rajai-highlight',
    glow: '0 0 25px hsl(45 90% 55% / 0.5)',
    line: 'from-rajai-gold/60 to-rajai-highlight/40',
  },
};

export default function InteractiveTimeline({ events, variant = 'horizontal' }: InteractiveTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const firstEra = events[0]?.era || 'spark';
  const lineStyle = eraStyles[firstEra];

  if (variant === 'vertical') {
    return (
      <div className="relative">
        {/* Vertical line */}
        <div className={`absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b ${lineStyle.line}`} />
        
        <div className="space-y-5">
          {events.map((event, index) => {
            const style = eraStyles[event.era];
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;
            const isInteracted = isActive || isHovered;
            
            return (
              <motion.div
                key={`${event.year}-${index}`}
                className="relative pl-16 cursor-pointer"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                {/* Dot */}
                <motion.div
                  className={`absolute left-4 top-3 w-5 h-5 rounded-full ${style.dot} border-2 border-background z-10`}
                  animate={{
                    scale: isInteracted ? 1.5 : 1,
                    boxShadow: isInteracted ? style.glow : 'none',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                />
                
                {/* Content Card */}
                <motion.div
                  className={`p-5 rounded-xl border transition-all duration-300 ${
                    isInteracted ? `${style.bgHover} ${style.borderHover}` : `${style.bg} ${style.border}`
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {event.icon && (
                      <motion.span 
                        className="text-xl"
                        animate={{ scale: isInteracted ? 1.2 : 1 }}
                      >
                        {event.icon}
                      </motion.span>
                    )}
                    <span className={`font-mono text-sm font-medium ${style.text}`}>{event.year}</span>
                  </div>
                  <h4 className="font-display font-medium text-foreground mb-1 text-lg">{event.title}</h4>
                  
                  <AnimatePresence>
                    {isInteracted && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
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
      <div className={`absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r ${lineStyle.line}`} />
      
      <div className="flex gap-4 min-w-max px-4">
        {events.map((event, index) => {
          const style = eraStyles[event.era];
          const isActive = activeIndex === index;
          const isHovered = hoveredIndex === index;
          const isInteracted = isActive || isHovered;
          
          return (
            <motion.div
              key={`${event.year}-${index}`}
              className="relative pt-14 cursor-pointer"
              style={{ width: 220 }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              {/* Dot */}
              <motion.div
                className={`absolute top-5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${style.dot} border-2 border-background z-10`}
                animate={{
                  scale: isInteracted ? 1.6 : 1,
                  boxShadow: isInteracted ? style.glow : 'none',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              />
              
              {/* Content Card */}
              <motion.div
                className={`p-5 rounded-xl border h-full transition-all duration-300 ${
                  isInteracted ? `${style.bgHover} ${style.borderHover}` : `${style.bg} ${style.border}`
                }`}
                animate={{ y: isInteracted ? -10 : 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {event.icon && (
                    <motion.span 
                      className="text-lg"
                      animate={{ scale: isInteracted ? 1.2 : 1 }}
                    >
                      {event.icon}
                    </motion.span>
                  )}
                  <span className={`font-mono text-xs font-medium ${style.text}`}>{event.year}</span>
                </div>
                <h4 className="font-display font-medium text-foreground text-sm mb-1">{event.title}</h4>
                
                <AnimatePresence>
                  {isInteracted && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-muted-foreground leading-relaxed overflow-hidden"
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
