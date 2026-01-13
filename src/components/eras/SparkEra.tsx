import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParticleField from '../ParticleField';

const milestones = [
  { year: '2015', title: 'First Line of Code', description: 'The journey began with curiosity' },
  { year: '2017', title: 'Computer Science', description: 'Formal foundations laid' },
  { year: '2019', title: 'First Project', description: 'From theory to practice' },
];

const inspirations = [
  { icon: '🔬', label: 'Science' },
  { icon: '🧮', label: 'Mathematics' },
  { icon: '🎨', label: 'Design' },
  { icon: '🚀', label: 'Innovation' },
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

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[200vh] flex flex-col items-center justify-start overflow-hidden era-spark pt-32 pb-20"
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
      </div>
      
      {/* Floating symbols with parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: symbolsY }}
      >
        {['∑', '∫', 'π', '∞', 'Δ', 'λ', '∂', 'φ', 'Ω', '∇'].map((symbol, i) => (
          <motion.span
            key={i}
            className="absolute text-spark-glow/15 text-3xl md:text-5xl font-light select-none"
            style={{
              left: `${8 + (i * 9)}%`,
              top: `${15 + (i % 4) * 22}%`,
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
        className="relative z-10 text-center px-6 max-w-4xl"
        style={{ y: heroY }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-spark-glow/70 uppercase mb-10"
        >
          Act I — The Spark
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-foreground mb-8 leading-tight"
        >
          Every vision begins
          <br />
          <motion.span 
            className="text-amber-glow font-normal"
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            with a spark
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed mb-16"
        >
          From curiosity to creation. This is the journey of Raj Shah—
          tracing the evolution of technology to architect what comes next.
        </motion.p>
        
        {/* Inspiration badges with stagger animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20"
        >
          {inspirations.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-spark-glow/10 border border-spark-glow/20"
              whileHover={{ scale: 1.08, borderColor: 'hsl(45 100% 60% / 0.5)', y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              >
                {item.icon}
              </motion.span>
              <span className="text-sm font-mono text-spark-glow/80">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Timeline Section with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-6 mt-10"
        style={{ y: timelineY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center font-mono text-xs tracking-[0.3em] text-spark-glow/50 uppercase mb-12"
        >
          The Beginning
        </motion.h3>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-spark-glow/30 via-spark-glow/20 to-transparent" />
          
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center gap-6 mb-12 ${
                i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <motion.div 
                className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}
                whileHover={{ scale: 1.02 }}
              >
                <span className="font-mono text-sm text-spark-glow">{milestone.year}</span>
                <h4 className="text-xl font-display font-medium text-foreground mt-1">{milestone.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
              </motion.div>
              
              {/* Center dot */}
              <div className="relative z-10 w-4 h-4 rounded-full bg-spark-glow shadow-[0_0_20px_hsl(45_100%_60%_/_0.5)]">
                <motion.div
                  className="absolute inset-0 rounded-full bg-spark-glow"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>
              
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Quote section with parallax */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ y: quoteY }}
        className="relative z-10 max-w-3xl mx-auto px-6 mt-20 text-center"
      >
        <motion.div 
          className="text-5xl text-spark-glow/30 mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          "
        </motion.div>
        <p className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed italic">
          The best way to predict the future is to invent it.
        </p>
        <p className="mt-4 text-sm text-muted-foreground font-mono">— Alan Kay</p>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border border-spark-glow/40 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-2.5 rounded-full bg-spark-glow"
            animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
