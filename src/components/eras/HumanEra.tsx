import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'UI/UX Design', icon: '🎨', description: 'Creating intuitive interfaces' },
  { name: 'React Ecosystem', icon: '⚛️', description: 'Modern frontend architecture' },
  { name: 'Product Thinking', icon: '💡', description: 'User-centric solutions' },
  { name: 'Responsive Design', icon: '📱', description: 'Cross-device experiences' },
  { name: 'Motion Design', icon: '✨', description: 'Delightful interactions' },
  { name: 'Accessibility', icon: '♿', description: 'Inclusive experiences' },
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
    impact: '+45% conversion rate',
    description: 'Redesigned checkout flow reducing friction and cart abandonment',
    tags: ['UX Research', 'A/B Testing', 'React'],
  },
  {
    title: 'SaaS Dashboard',
    impact: '-60% support tickets',
    description: 'Intuitive analytics interface with self-service features',
    tags: ['Data Viz', 'Design System', 'TypeScript'],
  },
  {
    title: 'Mobile App',
    impact: '4.8★ rating',
    description: 'Consumer app with focus on speed and delightful micro-interactions',
    tags: ['React Native', 'Motion', 'Accessibility'],
  },
];

const impactStats = [
  { value: '10M+', label: 'Users impacted' },
  { value: '45%', label: 'Avg. conversion lift' },
  { value: '4.8★', label: 'User satisfaction' },
  { value: '200+', label: 'Interfaces designed' },
];

export default function HumanEra() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const principlesY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const skillsY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const casesY = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const windowsY = useTransform(scrollYProgress, [0, 1], [80, -40]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[280vh] flex flex-col items-center justify-start overflow-hidden era-human pt-24 pb-20"
    >
      {/* Soft gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-human-cream via-human-warm to-human-cream" />
      <motion.div 
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-human-accent/5 rounded-full blur-[120px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-human-secondary/5 rounded-full blur-[100px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 70]) }}
      />
      
      {/* Floating windows with parallax - Desktop metaphor */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: windowsY }}
      >
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
            <div className="h-2 bg-human-text/10 rounded w-2/3" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 2 }}
          whileInView={{ opacity: 0.1, x: 0, rotate: 2 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute right-[8%] md:right-[15%] top-[20%] w-48 md:w-64 h-32 md:h-40 border-2 border-human-text/30 rounded-xl bg-white/90 shadow-xl transform"
        >
          <div className="h-6 md:h-7 bg-human-warm border-b border-human-text/15 rounded-t-xl flex items-center px-3 gap-1.5">
            <div className="w-2 h-2 rounded-full bg-human-accent/50" />
            <div className="w-2 h-2 rounded-full bg-human-accent/30" />
            <div className="w-2 h-2 rounded-full bg-human-accent/20" />
          </div>
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
      </motion.div>
      
      {/* Hero Content with parallax */}
      <motion.div 
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl mb-20"
        style={{ y: heroY }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-human-accent/70 uppercase mb-10"
        >
          Act III — The Craft
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-human-text mb-8 leading-tight"
        >
          Designing for
          <br />
          <motion.span 
            className="text-human-accent font-normal"
            whileHover={{ scale: 1.02 }}
          >
            humans first
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-human-text/60 font-light max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Technology is only as valuable as the experiences it enables. 
          Building interfaces that people love to use, one thoughtful detail at a time.
        </motion.p>
        
        {/* Design principles badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2.5 md:gap-3"
        >
          {designPrinciples.map((principle, i) => (
            <motion.span
              key={principle.title}
              className="px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-human-accent/30 bg-human-accent/5 text-human-accent font-mono text-xs md:text-sm cursor-pointer"
              whileHover={{ 
                scale: 1.08, 
                borderColor: 'hsl(var(--human-accent))',
                backgroundColor: 'hsl(var(--human-accent) / 0.15)',
                boxShadow: '0 4px 20px hsl(var(--human-accent) / 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span className="mr-2">{principle.icon}</span>
              {principle.title}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Impact Stats */}
      <motion.div
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-human-text/10"
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="text-2xl md:text-3xl font-display font-bold text-human-accent mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-human-text/50 font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Design Principles Detail with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20"
        style={{ y: principlesY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-human-accent/70 uppercase mb-10 text-center"
        >
          Design Philosophy
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {designPrinciples.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-human-text/10 hover:border-human-accent/30 transition-all group cursor-pointer"
              whileHover={{ y: -6, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
            >
              <motion.span 
                className="text-4xl mb-4 block text-human-accent/80 font-light"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {principle.icon}
              </motion.span>
              <h4 className="font-display font-medium text-human-text group-hover:text-human-accent transition-colors">
                {principle.title}
              </h4>
              <p className="text-sm text-human-text/50 mt-2">{principle.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Skills Grid with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20"
        style={{ y: skillsY }}
      >
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
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-human-text/10 hover:border-human-accent/30 transition-colors group cursor-pointer"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <motion.span 
                className="text-2xl mb-3 block"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {skill.icon}
              </motion.span>
              <h4 className="font-display font-medium text-human-text group-hover:text-human-accent transition-colors">
                {skill.name}
              </h4>
              <p className="text-sm text-human-text/50 mt-1">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Case Studies with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6"
        style={{ y: casesY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-human-accent/70 uppercase mb-10 text-center"
        >
          Impact Stories
        </motion.h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/90 rounded-xl p-6 border border-human-text/10 hover:border-human-accent/30 transition-all group cursor-pointer"
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
            >
              <motion.span 
                className="inline-block px-3 py-1 bg-human-accent/10 text-human-accent text-sm font-mono rounded-full mb-4"
                whileHover={{ scale: 1.05 }}
              >
                {study.impact}
              </motion.span>
              <h4 className="font-display text-lg font-medium text-human-text group-hover:text-human-accent transition-colors mb-2">
                {study.title}
              </h4>
              <p className="text-sm text-human-text/60 mb-4">{study.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {study.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 bg-human-warm rounded text-human-text/60">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
