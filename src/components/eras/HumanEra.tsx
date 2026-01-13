import { motion } from 'framer-motion';

const skills = [
  { name: 'Full-Stack Development', icon: '⚡', description: 'End-to-end application architecture', level: 95 },
  { name: 'UI/UX Design', icon: '✨', description: 'Intuitive user experiences', level: 88 },
  { name: 'System Architecture', icon: '🔧', description: 'Scalable infrastructure design', level: 92 },
  { name: 'API Development', icon: '🔗', description: 'RESTful & GraphQL services', level: 90 },
  { name: 'Mobile Development', icon: '📱', description: 'Cross-platform applications', level: 85 },
  { name: 'Performance Optimization', icon: '⚡', description: 'Speed & efficiency focused', level: 93 },
];

const designPrinciples = [
  { 
    title: 'Simplicity', 
    desc: 'Remove complexity, not features', 
    icon: '◯',
    details: 'Clean interfaces that focus on what matters most to users'
  },
  { 
    title: 'Clarity', 
    desc: 'Make every interaction obvious', 
    icon: '◇',
    details: 'Clear visual hierarchy and intuitive navigation patterns'
  },
  { 
    title: 'Delight', 
    desc: 'Create moments of joy', 
    icon: '★',
    details: 'Thoughtful animations and micro-interactions that surprise'
  },
  { 
    title: 'Accessibility', 
    desc: 'Design for everyone', 
    icon: '∞',
    details: 'Inclusive design that works for users of all abilities'
  },
];

const caseStudies = [
  {
    title: 'E-Commerce Platform Redesign',
    description: 'Complete UX overhaul of checkout flow reducing cart abandonment by 40% and increasing conversion rates',
    metrics: ['40% ↓ abandonment', '2.5s load time', '98% satisfaction', '+25% conversion'],
    color: 'human-accent',
    impact: 'Increased revenue by $2M annually',
    technologies: ['React', 'Next.js', 'Stripe API', 'Analytics'],
  },
  {
    title: 'Enterprise Dashboard Analytics',
    description: 'Complex data visualization made simple and actionable for C-suite executives and analysts',
    metrics: ['50+ data points', 'Real-time updates', 'Mobile-first', '10x faster insights'],
    color: 'human-secondary',
    impact: 'Reduced decision-making time by 60%',
    technologies: ['D3.js', 'WebSocket', 'Python', 'PostgreSQL'],
  },
  {
    title: 'Cross-Platform Mobile App',
    description: 'Native-feeling cross-platform experience with seamless offline capabilities',
    metrics: ['4.8★ rating', '100K+ downloads', '60fps animations', '99.9% uptime'],
    color: 'machine-green',
    impact: 'Featured in App Store "Best of 2024"',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
  },
];

const userFeedback = [
  {
    quote: "The new interface is so intuitive, I didn't need any training. It just makes sense.",
    user: "Marketing Manager",
    rating: 5
  },
  {
    quote: "Finally, a dashboard that shows me what I need to know without the clutter.",
    user: "Data Analyst", 
    rating: 5
  },
  {
    quote: "The mobile app feels faster than most native apps I use daily.",
    user: "Product Manager",
    rating: 5
  }
];

const designProcess = [
  { step: '01', title: 'Research', desc: 'Understanding users and their pain points' },
  { step: '02', title: 'Ideate', desc: 'Exploring solutions through rapid prototyping' },
  { step: '03', title: 'Design', desc: 'Creating beautiful, functional interfaces' },
  { step: '04', title: 'Test', desc: 'Validating with real users and data' },
  { step: '05', title: 'Iterate', desc: 'Continuous improvement based on feedback' },
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
      
      {/* Enhanced Design Principles */}
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
              className="group bg-white rounded-2xl p-6 shadow-lg border border-human-text/5 text-center hover:shadow-xl hover:border-human-accent/20 transition-all duration-300"
            >
              <span className="text-3xl text-human-accent block mb-3 group-hover:scale-110 transition-transform">{principle.icon}</span>
              <h4 className="font-display font-medium text-human-text mb-2 group-hover:text-human-accent transition-colors">{principle.title}</h4>
              <p className="text-sm text-human-text/60 mb-3">{principle.desc}</p>
              <p className="text-xs text-human-text/40 group-hover:text-human-text/60 transition-colors">{principle.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Skills Detail Grid */}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-human-text/10 hover:border-human-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <div>
                    <h4 className="font-display font-medium text-human-text group-hover:text-human-accent transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-human-text/50">{skill.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-mono font-bold text-human-accent">{skill.level}%</div>
                </div>
              </div>
              <div className="w-full bg-human-text/10 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-human-accent to-human-secondary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Design Process */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 mb-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-human-accent/70 uppercase mb-10 text-center"
        >
          Design Process
        </motion.h3>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {designProcess.map((process, i) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center max-w-32"
            >
              <div className="w-12 h-12 rounded-full bg-human-accent text-white font-mono font-bold flex items-center justify-center mb-3 text-sm">
                {process.step}
              </div>
              <h4 className="font-display font-medium text-human-text mb-2">{process.title}</h4>
              <p className="text-xs text-human-text/60 leading-relaxed">{process.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Case Studies */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 mb-20">
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
              className="group bg-white rounded-2xl p-6 shadow-lg border border-human-text/5 hover:shadow-xl hover:border-human-accent/20 transition-all duration-300"
            >
              <div className={`w-12 h-1 rounded-full mb-4`} 
                style={{ backgroundColor: i === 0 ? 'hsl(220 85% 55%)' : i === 1 ? 'hsl(340 75% 55%)' : 'hsl(160 100% 45%)' }}
              />
              <h4 className="font-display text-lg font-medium text-human-text mb-2 group-hover:text-human-accent transition-colors">{study.title}</h4>
              <p className="text-sm text-human-text/60 mb-4 leading-relaxed">{study.description}</p>
              
              <div className="mb-4">
                <div className="text-xs font-mono text-human-accent font-medium mb-2">Impact:</div>
                <div className="text-sm text-human-text/80">{study.impact}</div>
              </div>
              
              <div className="mb-4">
                <div className="text-xs font-mono text-human-accent font-medium mb-2">Key Metrics:</div>
                <div className="flex flex-wrap gap-2">
                  {study.metrics.map((metric) => (
                    <span key={metric} className="text-xs font-mono px-2 py-1 bg-human-warm rounded-md text-human-text/70">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-xs font-mono text-human-accent font-medium mb-2">Technologies:</div>
                <div className="flex flex-wrap gap-1">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-human-accent/10 text-human-accent rounded border border-human-accent/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* User Feedback */}
      <div className="relative z-10 w-full max-w-5xl px-4 md:px-6">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-human-accent/70 uppercase mb-10 text-center"
        >
          User Feedback
        </motion.h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {userFeedback.map((feedback, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 rounded-xl p-6 border border-human-text/10 shadow-lg"
            >
              <div className="flex mb-3">
                {Array.from({ length: feedback.rating }).map((_, j) => (
                  <span key={j} className="text-human-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-sm text-human-text/80 italic mb-3 leading-relaxed">"{feedback.quote}"</p>
              <div className="text-xs text-human-text/60 font-medium">{feedback.user}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
