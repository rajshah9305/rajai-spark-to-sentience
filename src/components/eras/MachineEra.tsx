import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import InteractiveTimeline from '@/components/InteractiveTimeline';

// Act II: The Machine - The birth of computing
const terminalLines = [
  { text: '> INITIALIZING COMPUTATION.HISTORY...', delay: 0 },
  { text: '> LOADING: VACUUM TUBES → TRANSISTORS → SILICON', delay: 0.3 },
  { text: '> PROCESSING: FROM ENIAC TO PERSONAL COMPUTERS', delay: 0.6 },
  { text: '> COMPILING: THE DIGITAL REVOLUTION', delay: 0.9 },
  { text: '> STATUS: MACHINES AWAKENING', delay: 1.2 },
  { text: '> THE AGE OF COMPUTING HAS BEGUN', delay: 1.5, highlight: true },
];

const computingMilestones = [
  { year: '1945', title: 'ENIAC', description: 'The first general-purpose electronic computer, weighing 30 tons and filling an entire room', era: 'machine' as const, icon: '🔌' },
  { year: '1947', title: 'Transistor', description: 'Bell Labs invents the transistor, the building block that would miniaturize computing forever', era: 'machine' as const, icon: '⚡' },
  { year: '1958', title: 'Integrated Circuit', description: 'Jack Kilby creates the first IC, putting thousands of transistors on a single chip', era: 'machine' as const, icon: '🔲' },
  { year: '1971', title: 'Microprocessor', description: 'Intel releases the 4004 - an entire computer on a chip, launching the personal computing era', era: 'machine' as const, icon: '💻' },
  { year: '1981', title: 'Personal Computer', description: 'IBM PC brings computing to homes and offices worldwide, democratizing technology', era: 'machine' as const, icon: '🖥️' },
  { year: '1991', title: 'World Wide Web', description: 'Tim Berners-Lee opens the web to the public, connecting humanity like never before', era: 'machine' as const, icon: '🌐' },
];

const computingPrinciples = [
  { concept: 'Binary', desc: '0s and 1s - the language of machines' },
  { concept: 'Algorithms', desc: 'Step-by-step instructions for solving problems' },
  { concept: 'Memory', desc: 'Storage that remembers so we don\'t have to' },
  { concept: 'Loops', desc: 'Repetition that makes automation possible' },
];

const machineStats = [
  { value: '10⁹', label: 'Transistors per chip' },
  { value: '5 GHz', label: 'Modern CPU speed' },
  { value: '10¹⁸', label: 'Operations/second' },
  { value: '∞', label: 'Possibilities' },
];

export default function MachineEra() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transforms
  const terminalY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const conceptsY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const techY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const codeY = useTransform(scrollYProgress, [0, 1], [40, -70]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const punchCardY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCursorVisible(v => !v);
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[280vh] flex flex-col items-center justify-start overflow-hidden era-machine scanlines pt-24 pb-20"
    >
      {/* Animated grid background with subtle parallax */}
      <motion.div 
        className="absolute inset-0 opacity-[0.08]"
        style={{ 
          y: gridY,
          backgroundImage: `
            linear-gradient(hsl(var(--machine-green) / 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--machine-green) / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Glow orbs with parallax */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 md:w-80 h-64 md:h-80 rounded-full bg-machine-green/8 blur-[100px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -100]) }}
        animate={{ opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-48 md:w-64 h-48 md:h-64 rounded-full bg-machine-amber/6 blur-[80px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 60]) }}
        animate={{ opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Punch card decoration with parallax */}
      <motion.div 
        className="absolute -right-20 top-1/3 w-72 h-48 rounded-lg border border-machine-green/10 opacity-[0.06] rotate-12"
        style={{ y: punchCardY }}
      >
        <div className="p-4 grid grid-cols-8 gap-1">
          {[...Array(48)].map((_, i) => (
            <motion.div 
              key={i} 
              className={`w-2 h-2 rounded-full ${Math.random() > 0.5 ? 'bg-machine-green/30' : 'bg-transparent'}`}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Terminal Window with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-3xl px-4 md:px-6 mb-16"
        style={{ y: terminalY }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-machine-green/70 uppercase mb-10 text-center"
        >
          Act II — The Foundation
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-machine-black border border-machine-green/30 rounded-xl overflow-hidden shadow-[0_0_60px_hsl(var(--machine-green)_/_0.1)]"
          whileHover={{ boxShadow: '0 0 80px hsl(var(--machine-green) / 0.2)' }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-machine-green/20 bg-machine-green/5">
            <motion.div 
              className="w-3 h-3 rounded-full bg-machine-amber"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-machine-green"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-spark-glow"
              whileHover={{ scale: 1.2 }}
            />
            <span className="ml-2 font-mono text-xs text-machine-green/50">raj@machine:~</span>
          </div>
          
          {/* Terminal content */}
          <div className="p-5 md:p-6 font-mono text-sm md:text-base">
            {terminalLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: line.delay }}
                viewport={{ once: true }}
                className={`mb-2 ${line.highlight ? 'text-phosphor font-medium' : 'text-machine-green/80'}`}
              >
                {line.text}
              </motion.p>
            ))}
            <motion.span 
              className={`inline-block w-3 h-5 bg-machine-green ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      </motion.div>
      
      {/* Hero text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl mb-20"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight mb-8">
          <span className="text-foreground">From vacuum tubes</span>
          <br />
          <motion.span 
            className="text-phosphor font-normal"
            animate={{ 
              textShadow: [
                '0 0 10px hsl(var(--machine-green) / 0.5)',
                '0 0 30px hsl(var(--machine-green) / 0.8)',
                '0 0 10px hsl(var(--machine-green) / 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            to silicon dreams
          </motion.span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
          The machine era transformed abstract mathematics into physical reality—
          circuits that compute, memory that persists, systems that never forget.
        </p>
      </motion.div>
      
      {/* Machine Stats */}
      <motion.div
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {machineStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 border border-machine-green/20 rounded-xl bg-machine-green/5"
              whileHover={{ y: -4, borderColor: 'hsl(var(--machine-green) / 0.5)' }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="text-2xl md:text-3xl font-mono font-bold text-machine-green mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Computing Milestones - Interactive Timeline */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20"
        style={{ y: conceptsY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-machine-green/50 uppercase mb-10 text-center"
        >
          Milestones of the Machine Age
        </motion.h3>
        
        <InteractiveTimeline events={computingMilestones} variant="horizontal" />
      </motion.div>
      
      {/* Computing Principles with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-3xl px-4 md:px-6 mb-20"
        style={{ y: techY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-machine-green/50 uppercase mb-8 text-center"
        >
          Fundamental Principles
        </motion.h3>
        
        <div className="grid grid-cols-2 gap-4">
          {computingPrinciples.map((principle, i) => (
            <motion.div
              key={principle.concept}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 bg-machine-green/5 border border-machine-green/20 rounded-xl hover:border-machine-green/40 transition-all"
              whileHover={{ y: -4 }}
            >
              <h4 className="font-mono text-lg font-bold text-machine-green mb-2">{principle.concept}</h4>
              <p className="text-sm text-muted-foreground">{principle.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Code Philosophy with parallax */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ y: codeY }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <motion.div 
          className="bg-machine-green/5 border border-machine-green/20 rounded-xl p-8"
          whileHover={{ scale: 1.01, borderColor: 'hsl(var(--machine-green) / 0.4)' }}
        >
          <pre className="font-mono text-sm text-machine-green/80 text-left overflow-x-auto">
{`function philosophy() {
  const approach = {
    clean: true,
    efficient: true,
    scalable: true,
    documented: true,
    tested: true
  };
  
  return buildSomethingGreat(approach);
}`}
          </pre>
        </motion.div>
        
        <motion.p 
          className="mt-8 text-sm text-muted-foreground font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          "Code is poetry that machines understand."
        </motion.p>
      </motion.div>
    </section>
  );
}
