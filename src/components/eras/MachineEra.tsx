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
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden era-machine scanlines">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--machine-green) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--machine-green) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Punch card decorations */}
      <div className="absolute left-0 top-1/4 w-40 h-64 opacity-20">
        <div className="grid grid-cols-8 gap-1 p-4">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-3 rounded-sm ${
                Math.random() > 0.5 ? 'bg-machine-amber' : 'bg-transparent border border-machine-amber/30'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.3em] text-machine-amber/60 uppercase mb-12"
        >
          Act II — The Machine
        </motion.p>
        
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/80 border border-machine-green/30 rounded-lg overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-machine-green/10 border-b border-machine-green/20">
            <div className="w-3 h-3 rounded-full bg-machine-amber/80" />
            <div className="w-3 h-3 rounded-full bg-machine-green/80" />
            <div className="w-3 h-3 rounded-full bg-machine-green/40" />
            <span className="ml-4 font-mono text-xs text-machine-green/60">TERMINAL v1.0</span>
          </div>
          
          {/* Terminal content */}
          <div className="p-6 font-mono text-sm md:text-base">
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.4 }}
                viewport={{ once: true }}
                className={`mb-2 ${
                  index === terminalLines.length - 1 
                    ? 'text-phosphor text-lg md:text-xl font-semibold mt-6' 
                    : 'text-machine-green/70'
                }`}
              >
                {line}
              </motion.div>
            ))}
            <span className={`inline-block w-3 h-5 bg-machine-green ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-light text-center mt-16 text-foreground"
        >
          Building the <span className="text-phosphor">foundation</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
          className="text-center mt-6 text-machine-green/60 font-mono text-sm max-w-xl mx-auto"
        >
          Mastering the fundamentals—systems programming, computational thinking, 
          and the art of turning logic into reality.
        </motion.p>
      </div>
    </section>
  );
}
