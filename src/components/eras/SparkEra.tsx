import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParticleField from '../ParticleField';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  sparkGlow, 
  floatingElement,
  cardHover,
  textReveal,
  heroEntrance,
  springConfigs,
  easings
} from '@/lib/animations';
import { useMagneticHover, useIntersectionObserver } from '@/lib/micro-interactions';

const sparkStats = [
  { number: '10+', label: 'Years Coding', description: 'From first "Hello World" to complex systems' },
  { number: '50+', label: 'Projects Built', description: 'Each one teaching something new' },
  { number: '∞', label: 'Curiosity Level', description: 'Always asking "what if?" and "how can we improve?"' },
];

const philosophies = [
  {
    icon: '💡',
    title: 'Curiosity-Driven',
    description: 'Every great innovation starts with asking "what if?" and "why not?"',
    detail: 'The spark of curiosity ignites the journey from idea to reality.'
  },
  {
    icon: '🎯',
    title: 'Purpose-First',
    description: 'Technology should solve real problems and make life genuinely better',
    detail: 'Building with intention, not just for the sake of building.'
  },
  {
    icon: '🌱',
    title: 'Growth-Minded',
    description: 'Embracing challenges as opportunities to learn and evolve',
    detail: 'Every failure is a lesson, every success is a stepping stone.'
  },
  {
    icon: '🤝',
    title: 'Community-Focused',
    description: 'The best solutions emerge from collaboration and shared knowledge',
    detail: 'Together we can build something greater than the sum of our parts.'
  }
];

export default function SparkEra() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const { ref: heroRef, isIntersecting: heroVisible } = useIntersectionObserver(0.3);
  const magneticHero = useMagneticHover(0.1);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden era-spark"
    >
      {/* Enhanced animated background with parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        {/* Constellation of dots with improved animations */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-spark-glow/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={sparkGlow}
            initial="initial"
            animate="animate"
            transition={{
              delay: Math.random() * 3,
              duration: 4 + Math.random() * 3,
            }}
          />
        ))}
        
        {/* Enhanced connecting lines with stagger animation */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + i * 10}%`}
              y1={`${30 + (i % 3) * 20}%`}
              x2={`${30 + i * 8}%`}
              y2={`${40 + (i % 4) * 15}%`}
              stroke="hsl(45 100% 60%)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              transition={{ 
                duration: 2, 
                delay: i * 0.2,
                ease: easings.easeOutCubic
              }}
              viewport={{ once: true }}
            />
          ))}
        </svg>
      </motion.div>
      
      {/* Enhanced ambient glow with morphing effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-spark-glow/8 blur-[150px]"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.08, 0.15, 0.08],
            rotate: [0, 180, 360],
            borderRadius: [
              '60% 40% 30% 70% / 60% 30% 70% 40%',
              '30% 60% 70% 40% / 50% 60% 30% 60%',
              '60% 40% 30% 70% / 60% 30% 70% 40%'
            ]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            borderRadius: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>
      
      {/* Hero Content with enhanced animations */}
      <motion.div 
        ref={heroRef}
        className="relative z-10 text-center px-6 max-w-6xl"
        variants={heroEntrance}
        initial="initial"
        animate={heroVisible ? "animate" : "initial"}
      >
        <motion.div
          ref={magneticHero.ref}
          style={{ x: magneticHero.x, y: magneticHero.y }}
        >
          <motion.p
            variants={textReveal}
            className="font-mono text-xs md:text-sm tracking-[0.4em] text-spark-glow/70 uppercase mb-10"
          >
            Act I — The Spark
          </motion.p>
          
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-light tracking-tight text-foreground mb-8 leading-tight"
          >
            Every vision begins
            <br />
            <motion.span 
              className="text-amber-glow font-normal"
              whileHover={{ 
                textShadow: "0 0 20px hsl(45 100% 60% / 0.8)",
                transition: springConfigs.gentle
              }}
            >
              with a spark
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed mb-16"
          >
            From curiosity to creation. This is the journey of Raj Shah—a story of 
            relentless learning, bold experimentation, and the unwavering belief that 
            technology can make the world better.
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Section with hover effects */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto"
        >
          {sparkStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: springConfigs.bouncy
              }}
              whileTap={{ scale: 0.95 }}
              className="text-center p-8 rounded-xl bg-spark-glow/5 border border-spark-glow/20 hover:border-spark-glow/40 transition-colors cursor-pointer group"
            >
              <motion.div 
                className="text-4xl md:text-5xl font-display font-bold text-spark-glow mb-3"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 15px hsl(45 100% 60% / 0.6)"
                }}
              >
                {stat.number}
              </motion.div>
              <div className="font-mono text-sm text-spark-glow/80 mb-3 group-hover:text-spark-glow transition-colors">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto"
        >
          {philosophies.map((philosophy, i) => (
            <motion.div
              key={philosophy.title}
              variants={staggerItem}
              whileHover={{
                scale: 1.02,
                y: -3,
                transition: springConfigs.gentle
              }}
              className="p-8 rounded-xl bg-spark-glow/5 border border-spark-glow/20 hover:border-spark-glow/40 transition-colors cursor-pointer group"
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
              >
                {philosophy.icon}
              </motion.div>
              <h3 className="text-xl font-display font-medium text-foreground mb-3 group-hover:text-spark-glow transition-colors">
                {philosophy.title}
              </h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                {philosophy.description}
              </p>
              <p className="text-sm text-muted-foreground/70 italic group-hover:text-muted-foreground transition-colors">
                {philosophy.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Enhanced quote section with floating animation */}
      <motion.div
        variants={floatingElement}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 mb-20 text-center"
      >
        <motion.div
          className="bg-spark-glow/5 border border-spark-glow/20 rounded-2xl p-8 md:p-12"
          whileHover={{
            borderColor: 'hsl(45 100% 60% / 0.4)',
            boxShadow: '0 0 40px hsl(45 100% 60% / 0.1)',
            transition: springConfigs.gentle
          }}
        >
          <motion.div 
            className="text-6xl text-spark-glow/40 mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            "
          </motion.div>
          <motion.p 
            className="text-xl md:text-3xl font-light text-foreground/90 leading-relaxed italic mb-4"
            whileHover={{ scale: 1.02 }}
          >
            The best way to predict the future is to invent it.
          </motion.p>
          <p className="text-sm text-muted-foreground font-mono">— Alan Kay</p>
          <motion.div 
            className="mt-6 text-sm text-muted-foreground/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            This quote has guided every line of code, every design decision, 
            and every problem I've chosen to solve.
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Enhanced scroll indicator with magnetic effect */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-spark-glow/40 flex items-start justify-center p-2"
            whileHover={{ borderColor: 'hsl(45 100% 60% / 0.8)' }}
          >
            <motion.div
              className="w-1.5 h-3 rounded-full bg-spark-glow"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.span 
            className="text-xs font-mono text-spark-glow/60 tracking-wider"
            whileHover={{ letterSpacing: '0.2em' }}
          >
            SCROLL
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
