import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import ParticleField from '@/components/ParticleField';
import InteractiveTimeline from '@/components/InteractiveTimeline';

// Act I: The Spark - The birth of ideas and curiosity
const originConcepts = [
  { icon: '💡', label: 'Idea', desc: 'The first flash of insight' },
  { icon: '❓', label: 'Curiosity', desc: 'The drive to understand' },
  { icon: '🔥', label: 'Passion', desc: 'The fuel that sustains' },
  { icon: '🌱', label: 'Growth', desc: 'The path of evolution' },
];

const philosophicalQuestions = [
  'What if we could think in code?',
  'What lies beyond human cognition?',
  'Can machines dream?',
  'Where does creativity begin?',
];

const evolutionTimeline = [
  { year: '~300 BC', title: 'Ancient Logic', description: 'Aristotle formalizes logical reasoning, creating the foundation for all computational thought', era: 'spark' as const, icon: '📜' },
  { year: '1600s', title: 'Mathematical Dreams', description: 'Leibniz envisions a universal calculating machine that could mechanize thought itself', era: 'spark' as const, icon: '🔢' },
  { year: '1847', title: 'Boolean Algebra', description: 'George Boole creates the language of logic that will power every digital device', era: 'spark' as const, icon: '⚡' },
  { year: '1936', title: 'Turing Machine', description: 'Alan Turing conceives the theoretical foundation for all modern computers', era: 'spark' as const, icon: '🧠' },
];

export default function SparkEra() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transforms for different elements
  const heroY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const symbolsY = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);
  const timelineY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const quoteY = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const inspirationsY = useTransform(scrollYProgress, [0, 1], [70, -50]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[250vh] flex flex-col items-center justify-start overflow-hidden era-spark pt-32 pb-20"
    >
      <ParticleField color="#facc15" />
      
      {/* Multi-layered ambient glow with parallax */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full bg-spark-glow/15 blur-[100px]"
          style={{ scale: glowScale }}
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-[300px] h-[300px] rounded-full bg-spark-secondary/10 blur-[80px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div 
          className="absolute w-[400px] h-[200px] rounded-full bg-spark-pulse/8 blur-[60px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], [30, -70]) }}
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      {/* Floating mathematical symbols with parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: symbolsY }}
      >
        {['∑', '∫', 'π', '∞', 'Δ', 'λ', '∂', 'φ', 'Ω', '∇', 'ε', '√'].map((symbol, i) => (
          <motion.span
            key={i}
            className="absolute text-spark-glow/15 text-3xl md:text-5xl font-light select-none"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${12 + (i % 5) * 18}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.1, 0.25, 0.1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          >
            {symbol}
          </motion.span>
        ))}
      </motion.div>
      
      {/* Hero Content with parallax */}
      <motion.div 
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl"
        style={{ y: heroY }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-spark-glow/70 uppercase mb-10"
        >
          Act I — The Spark
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-foreground mb-8 leading-tight"
        >
          In the beginning,
          <br />
          <motion.span 
            className="text-amber-glow font-normal"
            animate={{ textShadow: ['0 0 20px hsl(45 100% 60% / 0.5)', '0 0 40px hsl(45 100% 60% / 0.7)', '0 0 20px hsl(45 100% 60% / 0.5)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            there was an idea
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Before circuits and silicon, before algorithms and AI—there was pure thought. 
          The eternal human desire to extend the mind, to capture lightning in logic.
        </motion.p>
        
        {/* Origin concepts badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2.5 md:gap-3"
        >
          {originConcepts.map((item, i) => (
            <motion.span
              key={item.label}
              className="px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-spark-glow/30 bg-spark-glow/5 text-spark-glow font-mono text-xs md:text-sm backdrop-blur-sm cursor-pointer"
              whileHover={{ 
                scale: 1.08, 
                borderColor: 'hsl(45, 100%, 60%)',
                backgroundColor: 'hsl(45, 100%, 60%, 0.15)',
                boxShadow: '0 0 30px hsl(45 100% 60% / 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Philosophical Questions - Floating thoughts */}
      <motion.div
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mt-20 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="font-mono text-xs tracking-[0.3em] text-spark-glow/50 uppercase mb-8 text-center"
        >
          The Questions That Started It All
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-4">
          {philosophicalQuestions.map((question, i) => (
            <motion.div
              key={question}
              className="px-6 py-3 bg-spark-glow/5 border border-spark-glow/20 rounded-full text-spark-glow/80 font-light italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'hsl(45, 100%, 60%)',
                boxShadow: '0 0 30px hsl(45 100% 60% / 0.2)',
              }}
            >
              "{question}"
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Interactive Timeline with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20"
        style={{ y: inspirationsY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-spark-glow/50 uppercase mb-10 text-center"
        >
          The Evolution of Thought
        </motion.h3>
        
        <InteractiveTimeline events={evolutionTimeline} variant="vertical" />
      </motion.div>
      
      {/* Origin Concepts Grid with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20"
        style={{ y: timelineY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-spark-glow/50 uppercase mb-10 text-center"
        >
          The Elements of Creation
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {originConcepts.map((concept, i) => (
            <motion.div
              key={concept.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-spark-glow/5 border border-spark-glow/20 rounded-xl hover:border-spark-glow/40 transition-all group cursor-pointer"
              whileHover={{ y: -8, scale: 1.05, boxShadow: '0 15px 50px hsl(45 100% 60% / 0.2)' }}
            >
              <motion.span 
                className="text-4xl mb-4 block"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                whileHover={{ scale: 1.3 }}
              >
                {concept.icon}
              </motion.span>
              <h4 className="font-display font-medium text-foreground group-hover:text-spark-glow transition-colors text-lg">
                {concept.label}
              </h4>
              <p className="text-sm text-muted-foreground mt-2">{concept.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Quote with parallax */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ y: quoteY }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.div 
          className="text-5xl text-spark-glow/30 mb-4"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          "
        </motion.div>
        <p className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed italic">
          The spark of curiosity is the most precious gift we're born with.
          <br />
          <span className="text-spark-glow">Never let it fade.</span>
        </p>
        <motion.p 
          className="mt-6 text-sm text-muted-foreground font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          — Origin Philosophy
        </motion.p>
      </motion.div>
    </section>
  );
}
