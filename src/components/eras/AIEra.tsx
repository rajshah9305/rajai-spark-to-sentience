import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

function NeuralNode({ x, y, delay, size = 'md' }: { x: number; y: number; delay: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };
  
  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} rounded-full bg-ai-neural`}
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-ai-neural"
        animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, delay: delay * 2 }}
      />
    </motion.div>
  );
}

export default function AIEra() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springConfig = { stiffness: 30, damping: 25 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  const x = useTransform(springX, [0, 1], [-25, 25]);
  const y = useTransform(springY, [0, 1], [-25, 25]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const nodes = [
    { x: 18, y: 28, size: 'lg' as const }, { x: 32, y: 18, size: 'md' as const }, { x: 48, y: 32, size: 'lg' as const },
    { x: 62, y: 22, size: 'md' as const }, { x: 78, y: 38, size: 'lg' as const }, { x: 22, y: 52, size: 'md' as const },
    { x: 42, y: 58, size: 'lg' as const }, { x: 58, y: 48, size: 'md' as const }, { x: 72, y: 62, size: 'lg' as const },
    { x: 38, y: 72, size: 'md' as const }, { x: 52, y: 78, size: 'lg' as const }, { x: 68, y: 72, size: 'md' as const },
    { x: 28, y: 68, size: 'sm' as const }, { x: 82, y: 52, size: 'sm' as const },
  ];

  const focusAreas = ['Machine Learning', 'Neural Networks', 'Automation', 'Intelligent Systems'];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden era-ai"
    >
      {/* Neural network visualization */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ x, y }}
      >
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-25">
          {nodes.map((node, i) => 
            nodes.slice(i + 1).map((target, j) => {
              const distance = Math.sqrt(
                Math.pow(node.x - target.x, 2) + Math.pow(node.y - target.y, 2)
              );
              if (distance < 28) {
                return (
                  <motion.line
                    key={`${i}-${j}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    stroke="url(#neural-gradient)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1.2, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  />
                );
              }
              return null;
            })
          )}
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(200, 100%, 55%)" />
              <stop offset="100%" stopColor="hsl(320, 85%, 60%)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Neural nodes */}
        {nodes.map((node, i) => (
          <NeuralNode key={i} x={node.x} y={node.y} delay={i * 0.06} size={node.size} />
        ))}
      </motion.div>
      
      {/* Gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-80 md:w-96 h-80 md:h-96 rounded-full bg-ai-neural/12 blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 md:w-80 h-64 md:h-80 rounded-full bg-ai-synapse/10 blur-[100px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-ai-neural/70 uppercase mb-10"
        >
          Act IV — The Thinking Machine
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-foreground mb-8 leading-tight"
        >
          Building systems
          <br />
          <span className="text-neural-glow font-normal">that think</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Raj works at the intersection of AI and engineering—creating intelligent 
          systems that learn, adapt, and solve real-world problems.
        </motion.p>
        
        {/* AI focus areas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2.5 md:gap-3"
        >
          {focusAreas.map((area, i) => (
            <motion.span
              key={area}
              className="px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-ai-neural/30 bg-ai-neural/5 text-ai-neural font-mono text-xs md:text-sm backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'hsl(200, 100%, 55%)',
                backgroundColor: 'hsl(200, 100%, 55%, 0.1)',
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {area}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}