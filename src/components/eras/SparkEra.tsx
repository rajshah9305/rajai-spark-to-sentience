import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParticleField from '@/components/ParticleField';

const milestones = [
  { year: '1995', title: 'The First Spark', description: 'A curious mind begins exploring the world of technology' },
  { year: '2005', title: 'Digital Awakening', description: 'First lines of code written, igniting a lifelong passion' },
  { year: '2010', title: 'The Builder Emerges', description: 'From consumer to creator, building digital experiences' },
  { year: '2015', title: 'Professional Foundation', description: 'Formal education meets practical application' },
];

const inspirations = [
  { icon: '🔬', label: 'Science', desc: 'Understanding the universe' },
  { icon: '🧮', label: 'Mathematics', desc: 'The language of patterns' },
  { icon: '🎨', label: 'Design', desc: 'Beauty in functionality' },
  { icon: '🚀', label: 'Innovation', desc: 'Pushing boundaries' },
  { icon: '📚', label: 'Philosophy', desc: 'Questioning everything' },
  { icon: '🌌', label: 'Cosmos', desc: 'Infinite possibilities' },
];

const curiosityStats = [
  { value: '1000+', label: 'Books read' },
  { value: '∞', label: 'Questions asked' },
  { value: '15+', label: 'Years learning' },
  { value: '42', label: 'The answer' },
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
          Act I — The Origin
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-foreground mb-8 leading-tight"
        >
          Every journey begins
          <br />
          <motion.span 
            className="text-amber-glow font-normal"
            animate={{ textShadow: ['0 0 20px hsl(45 100% 60% / 0.5)', '0 0 40px hsl(45 100% 60% / 0.7)', '0 0 20px hsl(45 100% 60% / 0.5)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            with a spark
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          From early curiosity to boundless exploration, this is where the story begins—
          a relentless drive to understand, create, and transform ideas into reality.
        </motion.p>
        
        {/* Inspiration badges with enhanced animations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2.5 md:gap-3"
        >
          {inspirations.slice(0, 4).map((item, i) => (
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
      
      {/* Curiosity Stats */}
      <motion.div
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mt-20 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {curiosityStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-display font-bold text-spark-glow mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Inspirations Grid with parallax */}
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
          Sources of Wonder
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {inspirations.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-spark-glow/5 border border-spark-glow/20 rounded-xl p-5 hover:border-spark-glow/40 transition-all group cursor-pointer"
              whileHover={{ y: -6, scale: 1.02, boxShadow: '0 10px 40px hsl(45 100% 60% / 0.15)' }}
            >
              <motion.span 
                className="text-2xl mb-3 block"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                whileHover={{ scale: 1.3, rotate: 15 }}
              >
                {item.icon}
              </motion.span>
              <h4 className="font-display font-medium text-foreground group-hover:text-spark-glow transition-colors">
                {item.label}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Timeline with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-3xl px-4 md:px-6 mb-20"
        style={{ y: timelineY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-spark-glow/50 uppercase mb-10 text-center"
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
                <motion.span 
                  className="font-mono text-sm text-spark-glow"
                  whileHover={{ scale: 1.1 }}
                >
                  {milestone.year}
                </motion.span>
                <h4 className="text-xl font-display font-medium text-foreground mt-1">{milestone.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
              </motion.div>
              
              {/* Center dot */}
              <motion.div 
                className="relative z-10 w-4 h-4 rounded-full bg-spark-glow shadow-[0_0_20px_hsl(45_100%_60%_/_0.5)]"
                whileHover={{ scale: 1.5 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-spark-glow"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </motion.div>
              
              <div className="flex-1" />
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
