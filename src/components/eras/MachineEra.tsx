import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const terminalLines = [
  '> INITIALIZING RAJ.SYSTEM...',
  '> LOADING FOUNDATION: COMPUTER SCIENCE',
  '> PROCESSING: ALGORITHMS & DATA STRUCTURES',
  '> STATUS: FOUNDATION COMPLETE',
  '> WHERE CODE MEETS CURIOSITY',
];

export default function MachineEra() {
  const [cursorVisible, setCursorVisible] = useState(true);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCursorVisible(v => !v);
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden era-machine scanlines">
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--machine-cyan) / 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--machine-cyan) / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-machine-cyan/5 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-machine-green/5 blur-[80px]" />
      
      {/* Punch card decoration */}
      <motion.div 
        className="absolute left-4 md:left-10 top-1/4 w-32 md:w-40 h-56 md:h-64 opacity-15"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-8 gap-1 p-3">
          {Array.from({ length: 64 }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-1.5 md:w-2 h-2.5 md:h-3 rounded-sm ${
                Math.random() > 0.5 ? 'bg-machine-cyan' : 'bg-transparent border border-machine-cyan/30'
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.01 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 md:px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-machine-cyan/70 uppercase mb-10"
        >
          Act II — The Machine
        </motion.p>
        
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-machine-black/90 border border-machine-cyan/25 rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-machine-cyan/5 border-b border-machine-cyan/15">
            <div className="w-3 h-3 rounded-full bg-machine-amber/90" />
            <div className="w-3 h-3 rounded-full bg-machine-green/80" />
            <div className="w-3 h-3 rounded-full bg-machine-cyan/50" />
            <span className="ml-4 font-mono text-xs text-machine-cyan/50 tracking-wider">TERMINAL v1.0</span>
          </div>
          
          {/* Terminal content */}
          <div className="p-5 md:p-6 font-mono text-sm md:text-base">
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.3 }}
                viewport={{ once: true }}
                className={`mb-2.5 ${
                  index === terminalLines.length - 1 
                    ? 'text-phosphor text-lg md:text-xl font-medium mt-6' 
                    : 'text-machine-cyan/70'
                }`}
              >
                {line}
              </motion.div>
            ))}
            <span className={`inline-block w-2.5 h-5 bg-machine-cyan ml-1 transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-light text-center mt-14 text-foreground"
        >
          Building the <span className="text-phosphor font-normal">foundation</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
          className="text-center mt-5 text-machine-cyan/60 font-mono text-sm max-w-xl mx-auto leading-relaxed"
        >
          Mastering the fundamentals—systems programming, computational thinking, 
          and the art of turning logic into reality.
        </motion.p>
      </div>
    </section>
  );
}