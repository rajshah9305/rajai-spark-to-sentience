import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const terminalLines = [
  { text: '> INITIALIZING RAJ.SYSTEM...', delay: 0 },
  { text: '> LOADING FOUNDATION: COMPUTER SCIENCE', delay: 0.3 },
  { text: '> PROCESSING: ALGORITHMS & DATA STRUCTURES', delay: 0.6 },
  { text: '> COMPILING: SYSTEMS ARCHITECTURE', delay: 0.9 },
  { text: '> STATUS: FOUNDATION COMPLETE', delay: 1.2 },
  { text: '> WHERE CODE MEETS CURIOSITY', delay: 1.5, highlight: true },
];

const techStack = [
  { name: 'Python', level: 95 },
  { name: 'JavaScript/TypeScript', level: 92 },
  { name: 'React & Next.js', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'SQL & Databases', level: 85 },
  { name: 'Cloud & DevOps', level: 82 },
];

const concepts = [
  { icon: '⚙️', title: 'Algorithms', desc: 'Efficient problem-solving patterns' },
  { icon: '🏗️', title: 'Architecture', desc: 'Scalable system design' },
  { icon: '🔄', title: 'Data Structures', desc: 'Optimal data organization' },
  { icon: '🔒', title: 'Security', desc: 'Protection by design' },
];

export default function MachineEra() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [activeLines, setActiveLines] = useState<number[]>([]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCursorVisible(v => !v);
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[200vh] flex flex-col items-center justify-start overflow-hidden era-machine scanlines pt-24 pb-20">
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
      
      {/* Punch card decoration - left */}
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
      
      {/* Header */}
      <div className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-16">
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
                transition={{ duration: 0.4, delay: line.delay }}
                viewport={{ once: true }}
                className={`mb-2.5 ${
                  line.highlight 
                    ? 'text-phosphor text-lg md:text-xl font-medium mt-6' 
                    : 'text-machine-cyan/70'
                }`}
              >
                {line.text}
              </motion.div>
            ))}
            <span className={`inline-block w-2.5 h-5 bg-machine-cyan ml-1 transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-light text-center mt-14 text-foreground"
        >
          Building the <span className="text-phosphor font-normal">foundation</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-5 text-machine-cyan/60 font-mono text-sm max-w-xl mx-auto leading-relaxed"
        >
          Mastering the fundamentals—systems programming, computational thinking, 
          and the art of turning logic into reality.
        </motion.p>
      </div>
      
      {/* Core Concepts Grid */}
      <div className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {concepts.map((concept, i) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-machine-cyan/5 border border-machine-cyan/20 rounded-xl p-4 text-center hover:border-machine-cyan/40 transition-colors"
            >
              <span className="text-2xl mb-2 block">{concept.icon}</span>
              <h4 className="font-mono text-sm text-machine-cyan font-medium">{concept.title}</h4>
              <p className="text-xs text-machine-cyan/50 mt-1">{concept.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Tech Stack Bars */}
      <div className="relative z-10 w-full max-w-3xl px-4 md:px-6 mb-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-machine-cyan/50 uppercase mb-8 text-center"
        >
          Technical Proficiency
        </motion.h3>
        
        <div className="space-y-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-sm text-machine-cyan">{tech.name}</span>
                <span className="font-mono text-xs text-machine-cyan/50">{tech.level}%</span>
              </div>
              <div className="h-2 bg-machine-cyan/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-machine-cyan to-machine-green rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Code Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <div className="bg-machine-cyan/5 border border-machine-cyan/20 rounded-xl p-8">
          <pre className="font-mono text-sm text-machine-cyan/80 text-left overflow-x-auto">
{`function philosophy() {
  const approach = {
    clean: true,
    efficient: true,
    scalable: true,
    documented: true
  };
  
  return buildSomethingGreat(approach);
}`}
          </pre>
        </div>
      </motion.div>
    </section>
  );
}
