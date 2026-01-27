import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  
  // Organic, flowing parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const symbolsY = useTransform(scrollYProgress, [0, 1], [40, -120]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.3, 1]);
  const timelineY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const quoteY = useTransform(scrollYProgress, [0, 1], [30, -60]);
  const conceptsRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[250vh] flex flex-col items-center justify-start overflow-hidden era-spark pt-32 pb-20"
    >
      <ParticleField color="#f59e0b" />
      
      {/* Layered ember glows - organic shapes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-spark-glow/20 via-spark-ember/10 to-transparent blur-[120px]"
          style={{ scale: glowScale }}
          animate={{ 
            opacity: [0.2, 0.35, 0.2],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-[400px] h-[300px] rounded-[60%_40%_70%_30%] bg-spark-pulse/15 blur-[100px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 60]) }}
          animate={{ 
            opacity: [0.1, 0.25, 0.1],
            rotate: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute w-[300px] h-[200px] rounded-[40%_60%_30%_70%] bg-spark-flame/12 blur-[80px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], [20, -80]), x: 100 }}
          animate={{ 
            opacity: [0.08, 0.2, 0.08],
            rotate: [0, 20, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      {/* Floating mathematical symbols with organic movement */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: symbolsY }}
      >
        {['∑', '∫', 'π', '∞', 'Δ', 'λ', '∂', 'φ', 'Ω', '∇'].map((symbol, i) => (
          <motion.span
            key={i}
            className="absolute text-spark-glow/12 text-4xl md:text-6xl font-spark select-none ember-float"
            style={{
              left: `${8 + (i * 9)}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.4}s`,
            }}
            animate={{
              opacity: [0.08, 0.22, 0.08],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {symbol}
          </motion.span>
        ))}
      </motion.div>
      
      {/* Hero Content with flowing animation */}
      <motion.div 
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl"
        style={{ y: heroY }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-spark text-xs md:text-sm tracking-[0.4em] text-spark-glow/70 uppercase mb-12 italic"
        >
          Act I — The Spark
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-spark font-light tracking-tight text-spark-text mb-10 leading-[1.15]"
        >
          In the beginning,
          <br />
          <motion.span 
            className="spark-glow font-medium inline-block"
            animate={{ 
              textShadow: [
                '0 0 25px hsl(28 100% 58% / 0.5)',
                '0 0 70px hsl(28 100% 58% / 0.8)',
                '0 0 25px hsl(28 100% 58% / 0.5)'
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            there was an idea
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-spark-text/70 font-spark font-light max-w-2xl mx-auto mb-16 leading-relaxed italic"
        >
          Before circuits and silicon, before algorithms and AI—there was pure thought. 
          The eternal human desire to extend the mind, to capture lightning in logic.
        </motion.p>
        
        {/* Origin concepts - organic flowing badges */}
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
              className="spark-badge px-5 md:px-6 py-2.5 md:py-3 font-mono text-xs md:text-sm cursor-pointer transition-all duration-500"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.1,
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="mr-2 inline-block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {item.icon}
              </motion.span>
              {item.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Philosophical Questions - floating thought bubbles */}
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
              className="spark-card px-6 py-4 text-spark-flame/90 font-serif italic text-sm md:text-base cursor-pointer"
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                y: -8,
              }}
              animate={{
                y: [0, -5, 0],
              }}
              style={{
                animationDelay: `${i * 0.5}s`,
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
      
      {/* Origin Concepts Grid with organic shapes */}
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
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              viewport={{ once: true }}
              className="spark-card text-center p-6 md:p-8 cursor-pointer group"
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                rotate: 2,
              }}
            >
              <motion.span 
                className="text-4xl md:text-5xl mb-4 block"
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.6 }}
              >
                {concept.icon}
              </motion.span>
              <h4 className="font-serif font-medium text-foreground group-hover:text-spark-glow transition-colors duration-500 text-lg mb-2">
                {concept.label}
              </h4>
              <p className="text-sm text-muted-foreground">{concept.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Quote with organic flow */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ y: quoteY }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.div 
          className="text-6xl md:text-7xl text-spark-glow/20 font-serif mb-6"
          animate={{ 
            scale: [1, 1.1, 1], 
            rotate: [0, 5, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          "
        </motion.div>
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
