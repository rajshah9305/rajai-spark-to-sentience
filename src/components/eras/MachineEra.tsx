import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const terminalLines = [
  { text: '> INITIALIZING RAJ.SYSTEM...', delay: 0 },
  { text: '> LOADING FOUNDATION: COMPUTER SCIENCE', delay: 0.3 },
  { text: '> PROCESSING: ALGORITHMS & DATA STRUCTURES', delay: 0.6 },
  { text: '> COMPILING: SYSTEMS ARCHITECTURE', delay: 0.9 },
  { text: '> STATUS: FOUNDATION COMPLETE', delay: 1.2 },
  { text: '> WHERE CODE MEETS CURIOSITY', delay: 1.5, highlight: true },
];

const coreConcepts = [
  { name: 'Algorithms', icon: '🔀', desc: 'Problem-solving patterns' },
  { name: 'Data Structures', icon: '📊', desc: 'Organized information' },
  { name: 'Systems Design', icon: '🏗️', desc: 'Scalable architecture' },
  { name: 'Networking', icon: '🌐', desc: 'Connected systems' },
  { name: 'Databases', icon: '💾', desc: 'Persistent storage' },
  { name: 'Security', icon: '🔐', desc: 'Protected systems' },
];

const techStack = [
  { name: 'TypeScript / JavaScript', level: 95 },
  { name: 'React / Next.js', level: 92 },
  { name: 'Python', level: 88 },
  { name: 'Node.js', level: 90 },
  { name: 'PostgreSQL / MongoDB', level: 85 },
  { name: 'AWS / GCP', level: 82 },
  { name: 'Docker / K8s', level: 78 },
];

const achievements = [
  { value: '50K+', label: 'Lines of code' },
  { value: '100+', label: 'Projects built' },
  { value: '99.9%', label: 'Uptime achieved' },
  { value: '<100ms', label: 'Response time' },
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
            linear-gradient(hsl(var(--machine-cyan) / 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--machine-cyan) / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Glow orbs with parallax */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 md:w-80 h-64 md:h-80 rounded-full bg-machine-cyan/8 blur-[100px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -100]) }}
        animate={{ opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-48 md:w-64 h-48 md:h-64 rounded-full bg-machine-green/6 blur-[80px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 60]) }}
        animate={{ opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Punch card decoration with parallax */}
      <motion.div 
        className="absolute -right-20 top-1/3 w-72 h-48 rounded-lg border border-machine-cyan/10 opacity-[0.06] rotate-12"
        style={{ y: punchCardY }}
      >
        <div className="p-4 grid grid-cols-8 gap-1">
          {[...Array(48)].map((_, i) => (
            <motion.div 
              key={i} 
              className={`w-2 h-2 rounded-full ${Math.random() > 0.5 ? 'bg-machine-cyan/30' : 'bg-transparent'}`}
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
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-machine-cyan/70 uppercase mb-10 text-center"
        >
          Act II — The Foundation
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-machine-black border border-machine-cyan/30 rounded-xl overflow-hidden shadow-[0_0_60px_hsl(var(--machine-cyan)_/_0.1)]"
          whileHover={{ boxShadow: '0 0 80px hsl(var(--machine-cyan) / 0.2)' }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-machine-cyan/20 bg-machine-cyan/5">
            <motion.div 
              className="w-3 h-3 rounded-full bg-machine-amber"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-machine-green"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-machine-cyan"
              whileHover={{ scale: 1.2 }}
            />
            <span className="ml-2 font-mono text-xs text-machine-cyan/50">raj@machine:~</span>
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
                className={`mb-2 ${line.highlight ? 'text-phosphor font-medium' : 'text-machine-cyan/80'}`}
              >
                {line.text}
              </motion.p>
            ))}
            <motion.span 
              className={`inline-block w-3 h-5 bg-machine-cyan ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
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
          <span className="text-foreground">Learning the</span>
          <br />
          <motion.span 
            className="text-phosphor font-normal"
            animate={{ 
              textShadow: [
                '0 0 10px hsl(var(--machine-cyan) / 0.5)',
                '0 0 30px hsl(var(--machine-cyan) / 0.8)',
                '0 0 10px hsl(var(--machine-cyan) / 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            language of machines
          </motion.span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
          Mastering the fundamentals of computer science, algorithms, and system design—
          the building blocks that power every great innovation.
        </p>
      </motion.div>
      
      {/* Achievement Stats */}
      <motion.div
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 border border-machine-cyan/20 rounded-xl bg-machine-cyan/5"
              whileHover={{ y: -4, borderColor: 'hsl(var(--machine-cyan) / 0.5)' }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="text-2xl md:text-3xl font-mono font-bold text-machine-cyan mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Core Concepts Grid with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20"
        style={{ y: conceptsY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-machine-cyan/50 uppercase mb-10 text-center"
        >
          Core Concepts
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {coreConcepts.map((concept, i) => (
            <motion.div
              key={concept.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-machine-cyan/5 border border-machine-cyan/20 rounded-xl p-5 hover:border-machine-cyan/40 transition-all group cursor-pointer"
              whileHover={{ 
                y: -6, 
                scale: 1.02, 
                boxShadow: '0 10px 40px hsl(var(--machine-cyan) / 0.15)' 
              }}
            >
              <motion.span 
                className="text-2xl mb-3 block"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {concept.icon}
              </motion.span>
              <h4 className="font-mono text-sm font-medium text-foreground group-hover:text-machine-cyan transition-colors">
                {concept.name}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">{concept.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Technical Proficiency with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-3xl px-4 md:px-6 mb-20"
        style={{ y: techY }}
      >
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
              whileHover={{ x: 4 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-sm text-machine-cyan group-hover:text-foreground transition-colors">{tech.name}</span>
                <span className="font-mono text-xs text-machine-cyan/50">{tech.level}%</span>
              </div>
              <div className="h-2 bg-machine-cyan/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-machine-cyan to-machine-green rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
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
          className="bg-machine-cyan/5 border border-machine-cyan/20 rounded-xl p-8"
          whileHover={{ scale: 1.01, borderColor: 'hsl(var(--machine-cyan) / 0.4)' }}
        >
          <pre className="font-mono text-sm text-machine-cyan/80 text-left overflow-x-auto">
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
