import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import InteractiveTimeline from '@/components/InteractiveTimeline';

// Act II: The Machine - The birth of computing
const terminalLines = [
  { text: '> BOOT SEQUENCE INITIALIZED...', delay: 0 },
  { text: '> LOADING COMPUTATION.HISTORY', delay: 0.2 },
  { text: '> MODULES: VACUUM_TUBES → TRANSISTORS → SILICON', delay: 0.4 },
  { text: '> TIMELINE: ENIAC [1945] → MICROPROCESSOR [1971]', delay: 0.6 },
  { text: '> PARSING: THE.DIGITAL.REVOLUTION', delay: 0.8 },
  { text: '> STATUS: MACHINES_ONLINE', delay: 1.0, highlight: true },
  { text: '> READY_', delay: 1.2, cursor: true },
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
  { concept: 'BINARY', desc: '0s and 1s — the language of machines', code: '01001000 01001001' },
  { concept: 'LOGIC', desc: 'AND, OR, NOT — the gates of reason', code: 'IF x AND y THEN z' },
  { concept: 'MEMORY', desc: 'Storage that persists beyond power', code: 'MOV AX, [0x1000]' },
  { concept: 'LOOPS', desc: 'Iteration makes automation possible', code: 'FOR i=0 TO ∞' },
];

const machineStats = [
  { value: '10⁹', label: 'TRANSISTORS/CHIP', suffix: '+' },
  { value: '5.0', label: 'GHz CLOCK SPEED', suffix: '' },
  { value: '10¹⁸', label: 'FLOPS POSSIBLE', suffix: '' },
  { value: '∞', label: 'POSSIBILITIES', suffix: '' },
];

export default function MachineEra() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Angular, structured parallax
  const terminalY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const statsY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const principlesY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const codeY = useTransform(scrollYProgress, [0, 1], [30, -60]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[280vh] flex flex-col items-center justify-start overflow-hidden era-machine pt-24 pb-20"
    >
      {/* Grid background with scanlines */}
      <motion.div 
        className="absolute inset-0 opacity-[0.06]"
        style={{ 
          y: gridY,
          backgroundImage: `
            linear-gradient(hsl(var(--machine-phosphor) / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--machine-phosphor) / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-machine-phosphor/30 to-transparent"
          animate={{ 
            y: ['-100vh', '200vh'],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear",
          }}
        />
      </div>
      
      {/* Phosphor glow spots */}
      <motion.div 
        className="absolute top-1/4 left-1/3 w-64 md:w-80 h-64 md:h-80 rounded-full bg-machine-phosphor/5 blur-[100px]"
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-48 md:w-56 h-48 md:h-56 rounded-full bg-machine-dim/8 blur-[80px]"
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Terminal Window */}
      <motion.div 
        className="relative z-10 w-full max-w-3xl px-4 md:px-6 mb-16"
        style={{ y: terminalY }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="era-label font-machine text-machine-phosphor/70 text-center"
        >
          [ ACT II — THE MACHINE ]
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="machine-card crt-curve scanlines overflow-hidden"
        >
          {/* Terminal header - angular design */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-machine-phosphor/30 bg-machine-grid/50">
            <div className="flex gap-2">
              <motion.div 
                className="w-3 h-3 rounded-sm bg-machine-amber"
                whileHover={{ scale: 1.3 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-sm bg-machine-phosphor"
                whileHover={{ scale: 1.3 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-sm bg-machine-dim"
                whileHover={{ scale: 1.3 }}
              />
            </div>
            <span className="ml-3 font-mono text-xs text-machine-phosphor/60">raj@machine:~/history$</span>
          </div>
          
          {/* Terminal content */}
          <div className="p-5 md:p-6 font-mono text-sm md:text-base bg-machine-black/90 relative z-10">
            {terminalLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: line.delay }}
                viewport={{ once: true }}
                className={`mb-1.5 flex items-center ${line.highlight ? 'machine-glow font-bold' : 'text-machine-phosphor/80'}`}
              >
                <span>{line.text}</span>
                {line.cursor && (
                  <span 
                    className={`ml-1 inline-block w-2.5 h-5 bg-machine-phosphor transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Hero text - mechanical type */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl mb-20"
      >
        <h2 className="era-heading font-machine font-bold uppercase">
          <span className="text-machine-text">FROM VACUUM TUBES</span>
          <br />
          <motion.span 
            className="machine-glow"
          >
            TO SILICON DREAMS
          </motion.span>
        </h2>
        <p className="text-sm md:text-base text-machine-phosphor/60 font-machine max-w-2xl mx-auto leading-relaxed tracking-wide">
          We built the Machine to hold the Spark. Logic, order, and the relentless pulse of computation.
          Turning abstract mathematics into physical reality—systems that never sleep, never forget.
        </p>
      </motion.div>
      
      {/* Machine Stats - angular cards */}
      <motion.div
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-24"
        style={{ y: statsY }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {machineStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="machine-card p-5 text-center"
              whileHover={{ 
                y: -4, 
                borderColor: 'hsl(var(--machine-phosphor) / 0.6)',
              }}
            >
              <motion.div 
                className="text-2xl md:text-3xl font-mono font-bold text-machine-phosphor mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <div className="text-[10px] md:text-xs text-machine-dim font-mono tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Computing Milestones Timeline */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-24"
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.4em] text-machine-phosphor/60 uppercase mb-10 text-center"
        >
          {'>> MILESTONES_OF_THE_MACHINE_AGE <<'}
        </motion.h3>
        
        <InteractiveTimeline events={computingMilestones} variant="horizontal" />
      </motion.div>
      
      {/* Computing Principles - code blocks */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-24"
        style={{ y: principlesY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.4em] text-machine-phosphor/60 uppercase mb-10 text-center"
        >
          {'>> FUNDAMENTAL_PRINCIPLES <<'}
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {computingPrinciples.map((principle, i) => (
            <motion.div
              key={principle.concept}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="machine-card p-5 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-mono text-lg font-bold text-machine-phosphor group-hover:machine-glow transition-all">
                  {principle.concept}
                </h4>
                <span className="text-[10px] font-mono text-machine-dim bg-machine-grid px-2 py-0.5 rounded">
                  .SYS
                </span>
              </div>
              <p className="text-sm text-machine-phosphor/60 mb-3 font-mono">{principle.desc}</p>
              <code className="text-xs text-machine-amber font-mono bg-machine-black/80 px-3 py-1.5 rounded block">
                {principle.code}
              </code>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Code Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ y: codeY }}
        className="relative z-10 max-w-2xl mx-auto px-6"
      >
        <motion.div 
          className="machine-card crt-curve p-6 md:p-8"
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-machine-phosphor/20">
            <span className="text-machine-phosphor text-xs font-mono">philosophy.js</span>
          </div>
          <pre className="font-mono text-sm text-machine-phosphor/90 overflow-x-auto">
{`function buildGreatThings() {
  const approach = {
    clean: true,
    efficient: true,
    scalable: true,
    documented: true,
    tested: true
  };
  
  return execute(approach);
}`}
          </pre>
        </motion.div>
        
        <motion.p 
          className="mt-8 text-sm text-machine-phosphor/60 font-mono text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {"// Code is poetry that machines understand."}
        </motion.p>
      </motion.div>
    </section>
  );
}
