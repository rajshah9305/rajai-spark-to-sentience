import { motion } from 'framer-motion';

export default function HumanEra() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden era-human">
      {/* Desktop metaphor elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Window frames */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute left-[10%] top-[15%] w-72 h-48 border-2 border-human-text rounded-lg bg-white shadow-xl"
        >
          <div className="h-8 bg-human-warm border-b border-human-text/20 flex items-center px-3 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute right-[15%] top-[25%] w-64 h-40 border-2 border-human-text rounded-lg bg-white shadow-xl"
        >
          <div className="h-7 bg-human-accent/20 border-b border-human-text/20" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 0.08, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute left-[20%] bottom-[20%] w-80 h-52 border-2 border-human-text rounded-lg bg-white shadow-xl"
        >
          <div className="h-8 bg-gradient-to-r from-human-accent/30 to-human-accent/10 border-b border-human-text/20" />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.3em] text-human-accent uppercase mb-8"
        >
          Act III — The Human Era
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-light tracking-tight text-human-text mb-8"
        >
          Crafting experiences
          <br />
          <span className="text-human-accent">people love</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-human-text/70 font-light max-w-2xl mx-auto mb-12"
        >
          Technology should feel intuitive. Raj focuses on creating interfaces that 
          bridge the gap between complex systems and human understanding.
        </motion.p>
        
        {/* Skill areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {['Full-Stack Development', 'UI/UX Design', 'System Architecture'].map((feature) => (
            <div
              key={feature}
              className="px-6 py-3 bg-white rounded-full shadow-lg border border-human-text/10 text-human-text font-medium"
            >
              {feature}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
