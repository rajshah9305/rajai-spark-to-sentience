import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

function NeuralNode({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div
      className="absolute w-3 h-3 rounded-full bg-ai-neural"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-ai-neural"
        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
      />
    </motion.div>
  );
}

export default function AIEra() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  // Create subtle parallax effect
  const x = useTransform(springX, [0, 1], [-20, 20]);
  const y = useTransform(springY, [0, 1], [-20, 20]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nodes = [
    { x: 20, y: 30 }, { x: 35, y: 20 }, { x: 50, y: 35 },
    { x: 65, y: 25 }, { x: 80, y: 40 }, { x: 25, y: 55 },
    { x: 45, y: 60 }, { x: 60, y: 50 }, { x: 75, y: 65 },
    { x: 40, y: 75 }, { x: 55, y: 80 }, { x: 70, y: 75 },
  ];

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
        {/* Connection lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {nodes.map((node, i) => 
            nodes.slice(i + 1).map((target, j) => {
              const distance = Math.sqrt(
                Math.pow(node.x - target.x, 2) + Math.pow(node.y - target.y, 2)
              );
              if (distance < 30) {
                return (
                  <motion.line
                    key={`${i}-${j}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    stroke="hsl(210, 100%, 60%)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  />
                );
              }
              return null;
            })
          )}
        </svg>
        
        {/* Neural nodes */}
        {nodes.map((node, i) => (
          <NeuralNode key={i} x={node.x} y={node.y} delay={i * 0.08} />
        ))}
      </motion.div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ai-neural/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-ai-synapse/10 blur-[80px]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.3em] text-ai-neural/60 uppercase mb-8"
        >
          Act IV — The Thinking Machine
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-light tracking-tight text-foreground mb-8"
        >
          Building systems
          <br />
          <span className="text-neural-glow">that think</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-12"
        >
          Raj works at the intersection of AI and engineering—creating intelligent 
          systems that learn, adapt, and solve real-world problems.
        </motion.p>
        
        {/* AI focus areas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {['Machine Learning', 'Neural Networks', 'Automation', 'Intelligent Systems'].map((cap) => (
            <motion.span
              key={cap}
              className="px-4 py-2 rounded-full border border-ai-neural/30 text-ai-neural font-mono text-sm"
              whileHover={{ scale: 1.05, borderColor: 'hsl(210, 100%, 60%)' }}
            >
              {cap}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
