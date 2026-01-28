import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SparkBackground from './SparkBackground';
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
  
  // Smooth parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const symbolsY = useTransform(scrollYProgress, [0, 1], [40, -120]);
  const timelineY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const quoteY = useTransform(scrollYProgress, [0, 1], [30, -60]);
  const conceptsRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[250vh] flex flex-col items-center justify-start overflow-hidden era-spark pt-32 pb-20"
    >
      <SparkBackground />
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl"
        style={{ y: heroY }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="era-label font-spark text-spark-glow/80 italic"
        >
          Act I — The Spark
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="era-heading font-spark text-spark-text"
        >
          It began with
          <br />
          <motion.span 
            className="spark-glow font-medium inline-block"
            animate={{ 
              opacity: [0.9, 1, 0.9],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            a spark
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-spark-text/80 font-spark font-light max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Before silicon, before code—there was pure thought.
          The eternal human drive to understand, to capture lightning in logic, and to extend the reach of the mind.
        </motion.p>
        
        {/* Origin concepts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {originConcepts.map((item, i) => (
            <motion.span
              key={item.label}
              className="spark-badge px-5 md:px-6 py-2.5 md:py-3 font-mono text-xs md:text-sm cursor-pointer transition-all duration-300 hover:bg-spark-glow/20 border border-spark-glow/30"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                y: -2,
                borderColor: 'var(--spark-glow)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-2 inline-block opacity-80">
                {item.icon}
              </span>
              {item.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Philosophical Questions */}
      <motion.div
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mt-24 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="font-mono text-xs tracking-[0.4em] text-spark-glow/60 uppercase mb-10 text-center"
        >
          The Questions That Started It All
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-4">
          {philosophicalQuestions.map((question, i) => (
            <motion.div
              key={question}
              className="spark-card px-6 py-4 text-spark-text/90 font-serif italic text-sm md:text-base cursor-default border border-spark-glow/10 hover:border-spark-glow/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ 
                y: -4,
              }}
            >
              "{question}"
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Interactive Timeline */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-24"
        style={{ y: timelineY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.4em] text-spark-glow/60 uppercase mb-12 text-center"
        >
          The Evolution of Thought
        </motion.h3>
        
        <InteractiveTimeline events={evolutionTimeline} variant="vertical" />
      </motion.div>
      
      {/* Origin Concepts Grid */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-24"
        style={{ rotate: conceptsRotate }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.4em] text-spark-glow/60 uppercase mb-12 text-center"
        >
          The Elements of Creation
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {originConcepts.map((concept, i) => (
            <motion.div
              key={concept.label}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="spark-card text-center p-6 md:p-8 cursor-pointer group hover:bg-spark-glow/5 border border-transparent hover:border-spark-glow/20 transition-all"
              whileHover={{ 
                y: -8,
              }}
            >
              <motion.span 
                className="text-4xl md:text-5xl mb-4 block opacity-90"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {concept.icon}
              </motion.span>
              <h4 className="font-serif font-medium text-foreground group-hover:text-spark-glow transition-colors duration-300 text-lg mb-2">
                {concept.label}
              </h4>
              <p className="text-sm text-muted-foreground">{concept.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ y: quoteY }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <div className="text-6xl md:text-7xl text-spark-glow/20 font-serif mb-6">
          "
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl font-serif font-light text-foreground/90 leading-relaxed italic">
          The spark of curiosity is the most precious gift we're born with.
          <br />
          <span className="spark-glow">Never let it fade.</span>
        </p>
        <motion.p 
          className="mt-8 text-sm text-muted-foreground font-mono tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          — Origin Philosophy
        </motion.p>
      </motion.div>
    </section>
  );
}
