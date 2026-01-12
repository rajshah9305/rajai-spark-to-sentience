import { motion } from 'framer-motion';
import ParticleField from '../ParticleField';

export default function SparkEra() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden era-spark">
      <ParticleField color="#facc15" />
      
      {/* Multi-layered ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full bg-spark-glow/15 blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-[300px] h-[300px] rounded-full bg-spark-secondary/10 blur-[80px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
      
      {/* Floating symbols with better positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
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
          <span className="text-amber-glow font-normal">with a spark</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
        >
          From curiosity to creation. This is the journey of Raj Shah—
          tracing the evolution of technology to architect what comes next.
        </motion.p>
      </div>
      
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