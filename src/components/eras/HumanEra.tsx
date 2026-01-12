import { motion } from 'framer-motion';

const skills = [
  { name: 'Full-Stack Development', icon: '⚡' },
  { name: 'UI/UX Design', icon: '✨' },
  { name: 'System Architecture', icon: '🔧' },
];

export default function HumanEra() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden era-human">
      {/* Soft gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-human-cream via-human-warm/50 to-human-cream pointer-events-none" />
      
      {/* Desktop metaphor elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Window frames */}
        <motion.div
          initial={{ opacity: 0, x: -80, rotate: -3 }}
          whileInView={{ opacity: 0.12, x: 0, rotate: -3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-[5%] md:left-[10%] top-[12%] w-56 md:w-72 h-40 md:h-48 border-2 border-human-text/40 rounded-xl bg-white/90 shadow-xl transform"
        >
          <div className="h-7 md:h-8 bg-gradient-to-r from-human-accent/20 to-human-secondary/10 border-b border-human-text/15 flex items-center px-3 gap-1.5 rounded-t-xl">
            <div className="w-2.5 h-2.5 rounded-full bg-human-secondary" />
            <div className="w-2.5 h-2.5 rounded-full bg-spark-glow" />
            <div className="w-2.5 h-2.5 rounded-full bg-machine-green" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-2 bg-human-text/10 rounded w-3/4" />
            <div className="h-2 bg-human-text/10 rounded w-1/2" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 2 }}
          whileInView={{ opacity: 0.1, x: 0, rotate: 2 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute right-[8%] md:right-[15%] top-[20%] w-48 md:w-64 h-32 md:h-40 border-2 border-human-text/30 rounded-xl bg-white/90 shadow-xl transform"
        >
          <div className="h-6 md:h-7 bg-human-warm border-b border-human-text/15 rounded-t-xl" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 80, rotate: -1 }}
          whileInView={{ opacity: 0.08, y: 0, rotate: -1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-[15%] md:left-[20%] bottom-[15%] md:bottom-[20%] w-64 md:w-80 h-44 md:h-52 border-2 border-human-text/30 rounded-xl bg-white/90 shadow-xl transform"
        >
          <div className="h-7 md:h-8 bg-gradient-to-r from-human-accent/15 to-transparent border-b border-human-text/15 rounded-t-xl" />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-human-accent uppercase mb-10"
        >
          Act III — The Human Era
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-human-text mb-8 leading-tight"
        >
          Crafting experiences
          <br />
          <span className="text-human-accent font-normal">people love</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-human-text/70 font-light max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Technology should feel intuitive. Raj focuses on creating interfaces that 
          bridge the gap between complex systems and human understanding.
        </motion.p>
        
        {/* Skill areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="px-5 md:px-6 py-3 md:py-3.5 bg-white rounded-full shadow-lg border border-human-text/8 text-human-text font-medium flex items-center gap-2 md:gap-2.5"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span className="text-base md:text-lg">{skill.icon}</span>
              <span className="text-sm md:text-base">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}