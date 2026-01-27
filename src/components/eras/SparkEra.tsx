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
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const symbolsY = useTransform(scrollYProgress, [0, 1], [20, -100]);
  const timelineY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const quoteY = useTransform(scrollYProgress, [0.6, 1], [50, -20]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[220vh] flex flex-col items-center justify-start overflow-hidden era-spark pt-32 pb-20"
    >
      <SparkBackground />
      
      {/* Floating mathematical symbols - Positioned on sides to avoid text overlap */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: symbolsY }}
      >
        {['∑', '∫', 'π', '∞', 'Δ', 'λ', '∂', 'φ', 'Ω', '∇'].map((symbol, i) => (
          <motion.span
            key={i}
            className="absolute text-spark-glow/10 text-5xl md:text-7xl font-spark select-none mix-blend-screen"
            style={{
              left: i % 2 === 0 ? `${5 + Math.random() * 10}%` : undefined,
              right: i % 2 !== 0 ? `${5 + Math.random() * 10}%` : undefined,
              top: `${10 + (i * 8)}%`,
            }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {symbol}
          </motion.span>
        ))}
      </motion.div>
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center px-4 md:px-6 max-w-5xl mb-32"
        style={{ y: heroY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inline-block mb-8"
        >
           <span className="font-spark text-xs md:text-sm tracking-[0.4em] text-spark-glow/90 uppercase border-b border-spark-glow/30 pb-2">
            Act I — The Spark
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-spark font-light tracking-tight text-spark-text mb-12 leading-[1.1]"
        >
          In the beginning,
          <br />
          <motion.span 
            className="spark-glow font-normal inline-block mt-2"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(234,88,12,0.3)",
                "0 0 40px rgba(234,88,12,0.6)",
                "0 0 20px rgba(234,88,12,0.3)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            there was an idea.
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-spark-text/80 font-spark font-light max-w-2xl mx-auto leading-relaxed"
        >
          Before circuits and silicon, before algorithms and AI—there was pure thought. 
          The eternal human desire to extend the mind, to capture lightning in logic.
        </motion.p>
      </motion.div>
      
      {/* Philosophical Questions - More organic layout */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-4 md:px-6 mb-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {philosophicalQuestions.map((question, i) => (
            <motion.div
              key={question}
              className="group relative p-6 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-spark-glow/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="relative z-10 font-serif italic text-lg md:text-xl text-spark-text/70 group-hover:text-spark-text transition-colors duration-300">
                "{question}"
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Interactive Timeline */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-32"
        style={{ y: timelineY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.4em] text-spark-glow/60 uppercase mb-16 text-center"
        >
          The Evolution of Thought
        </motion.h3>
        
        <InteractiveTimeline events={evolutionTimeline} variant="vertical" />
      </motion.div>
      
      {/* Origin Concepts Grid - Refined */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-32"
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {originConcepts.map((concept, i) => (
            <motion.div
              key={concept.label}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative p-8 text-center group"
            >
              <div className="absolute inset-0 border border-spark-glow/20 bg-spark-void/40 backdrop-blur-sm transition-all duration-500 group-hover:border-spark-glow/50 group-hover:bg-spark-glow/5"
                   style={{ borderRadius: "2rem 0 2rem 0" }} // Organic leaf-like shape
              />

              <div className="relative z-10">
                <motion.div
                  className="text-4xl md:text-5xl mb-6 inline-block"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {concept.icon}
                </motion.div>
                <h4 className="font-serif font-medium text-2xl text-spark-text group-hover:text-spark-glow transition-colors duration-300 mb-3">
                  {concept.label}
                </h4>
                <p className="text-sm text-spark-text/60 font-light leading-relaxed">{concept.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Quote & Transition Cue */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ y: quoteY }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center pb-20"
      >
        <div className="text-6xl md:text-7xl text-spark-glow/20 font-serif mb-6 leading-none">
          "
        </div>
        <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-spark-text/90 leading-tight italic">
          The spark of curiosity is the most precious gift we're born with.
          <br />
          <span className="spark-glow text-shadow-glow">Never let it fade.</span>
        </p>
        <motion.p 
          className="mt-8 text-sm text-spark-text/50 font-mono tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          — Origin Philosophy
        </motion.p>

        {/* Transition visual cue */}
        <motion.div
          className="mt-24 flex flex-col items-center justify-center opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-spark-glow/0 via-spark-glow/50 to-emerald-500/50" />
          <span className="text-[10px] font-mono tracking-widest text-emerald-500/50 mt-4 uppercase">
            Entering The Machine Age
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
