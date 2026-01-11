import { motion } from 'framer-motion';
import ParticleField from '../ParticleField';

export default function SparkEra() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden era-spark">
      <ParticleField color="#f59e0b" />
      
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-spark-glow/10 blur-[120px] animate-pulse-glow" />
      </div>
      
      {/* Floating symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['∑', '∫', 'π', '∞', 'Δ', 'λ', '∂', 'φ'].map((symbol, i) => (
          <motion.span
            key={i}
            className="absolute text-spark-glow/20 text-4xl md:text-6xl font-light"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {symbol}
          </motion.span>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="font-mono text-sm tracking-[0.3em] text-spark-glow/60 uppercase mb-8"
      >
        Act I — The Spark
      </motion.p>
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight text-foreground mb-8"
      >
        Every vision begins
        <br />
        <span className="text-amber-glow">with a spark</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto"
      >
        From curiosity to creation. This is the journey of Raj Shah—
        tracing the evolution of technology to architect what comes next.
      </motion.p>
    </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border border-spark-glow/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-spark-glow"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
