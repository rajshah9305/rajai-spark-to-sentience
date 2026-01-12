import { motion } from 'framer-motion';

const skills = [
  { name: 'Full-Stack Development', icon: '⚡', description: 'End-to-end application architecture' },
  { name: 'UI/UX Design', icon: '✨', description: 'Intuitive user experiences' },
  { name: 'System Architecture', icon: '🔧', description: 'Scalable infrastructure design' },
  { name: 'API Development', icon: '🔗', description: 'RESTful & GraphQL services' },
  { name: 'Mobile Development', icon: '📱', description: 'Cross-platform applications' },
  { name: 'Performance Optimization', icon: '⚡', description: 'Speed & efficiency focused' },
];

const designPrinciples = [
  { title: 'Simplicity', desc: 'Remove complexity, not features', icon: '◯' },
  { title: 'Clarity', desc: 'Make every interaction obvious', icon: '◇' },
  { title: 'Delight', desc: 'Create moments of joy', icon: '★' },
  { title: 'Accessibility', desc: 'Design for everyone', icon: '∞' },
];

const caseStudies = [
  {
    title: 'E-Commerce Platform',
    description: 'Redesigned checkout flow reducing cart abandonment by 40%',
    metrics: ['40% ↓ abandonment', '2.5s load time', '98% satisfaction'],
    color: 'human-accent',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Complex data visualization made simple and actionable',
    metrics: ['50+ data points', 'Real-time updates', 'Mobile-first'],
    color: 'human-secondary',
  },
  {
    title: 'Mobile Application',
    description: 'Native-feeling cross-platform experience',
    metrics: ['4.8★ rating', '100K+ downloads', '60fps animations'],
    color: 'machine-green',
  },
];

export default function HumanEra() {
  return (
    <section className="relative min-h-[200vh] flex flex-col items-center justify-start overflow-hidden era-human pt-24 pb-20">
      {/* Soft gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-human-cream via-human-warm/50 to-human-cream pointer-events-none" />
      
      {/* Desktop metaphor elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      
      {/* Header Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mb-16">
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
          {skills.slice(0, 3).map((skill, i) => (
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
      
      {/* Design Principles */}
      <div className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-human-accent/70 uppercase mb-10 text-center"
        >
          Design Philosophy
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {designPrinciples.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-human-text/5 text-center hover:shadow-xl transition-shadow"
            >
              <span className="text-3xl text-human-accent block mb-3">{principle.icon}</span>
              <h4 className="font-display font-medium text-human-text mb-2">{principle.title}</h4>
              <p className="text-sm text-human-text/60">{principle.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Skills Detail Grid */}
      <div className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-human-accent/70 uppercase mb-10 text-center"
        >
          Core Competencies
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-human-text/10 hover:border-human-accent/30 transition-colors group"
            >
              <span className="text-2xl mb-3 block">{skill.icon}</span>
              <h4 className="font-display font-medium text-human-text group-hover:text-human-accent transition-colors">
                {skill.name}
              </h4>
              <p className="text-sm text-human-text/50 mt-1">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Case Studies */}
      <div className="relative z-10 w-full max-w-5xl px-4 md:px-6">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-human-accent/70 uppercase mb-10 text-center"
        >
          Impact Highlights
        </motion.h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-human-text/5 hover:shadow-xl transition-all group"
            >
              <div className={`w-12 h-1 rounded-full bg-${study.color} mb-4`} 
                style={{ backgroundColor: i === 0 ? 'hsl(220 85% 55%)' : i === 1 ? 'hsl(340 75% 55%)' : 'hsl(160 100% 45%)' }}
              />
              <h4 className="font-display text-lg font-medium text-human-text mb-2">{study.title}</h4>
              <p className="text-sm text-human-text/60 mb-4">{study.description}</p>
              <div className="flex flex-wrap gap-2">
                {study.metrics.map((metric) => (
                  <span key={metric} className="text-xs font-mono px-2 py-1 bg-human-warm rounded-md text-human-text/70">
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
