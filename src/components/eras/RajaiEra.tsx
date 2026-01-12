import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Applications',
    description: 'Building intelligent systems that leverage machine learning to solve complex problems',
    tech: ['Python', 'TensorFlow', 'React'],
  },
  {
    title: 'Full-Stack Platforms',
    description: 'End-to-end web applications with modern architectures and seamless user experiences',
    tech: ['TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Open Source',
    description: 'Contributing to the developer community through tools, libraries, and shared knowledge',
    tech: ['GitHub', 'Documentation', 'Community'],
  },
];

const signals = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/rajshah9305', username: 'rajshah9305' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rajshah', username: 'Raj Shah' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@rajai.org', username: 'hello@rajai.org' },
];

export default function RajaiEra() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden era-rajai py-20 md:py-24">
      {/* Subtle animated grid */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--rajai-accent)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--rajai-accent)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Multi-layered accent glows */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[300px] md:h-[450px] bg-rajai-accent/6 blur-[150px] rounded-full"
        animate={{ opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-rajai-highlight/4 blur-[120px] rounded-full"
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-rajai-accent/70 uppercase mb-10 text-center"
        >
          Act V — The Architect
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight text-center mb-6"
        >
          <span className="text-foreground">Raj</span>
          <span className="text-rajai-accent">ai</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-rajai-muted font-light text-center max-w-3xl mx-auto mb-3"
        >
          I don't just use systems.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-foreground font-medium text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          I design what comes next.
        </motion.p>
        
        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="card-glass rounded-xl p-5 md:p-6 group cursor-pointer relative overflow-hidden"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-rajai-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base md:text-lg font-display font-medium text-foreground group-hover:text-rajai-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-rajai-muted group-hover:text-rajai-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-rajai-muted text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-rajai-surface rounded-md text-rajai-muted border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Signals / Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <p className="font-mono text-xs tracking-[0.25em] text-rajai-muted uppercase mb-8">
            Signals
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {signals.map((signal) => (
              <motion.a
                key={signal.label}
                href={signal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 md:gap-3 px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-border hover:border-rajai-accent/50 bg-rajai-surface/60 backdrop-blur-sm transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <signal.icon className="w-4 h-4 md:w-5 md:h-5 text-rajai-muted group-hover:text-rajai-accent transition-colors duration-300" />
                <span className="font-mono text-xs md:text-sm text-foreground group-hover:text-rajai-accent transition-colors duration-300">
                  {signal.username}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* Footer signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24 md:mt-32"
        >
          <p className="font-mono text-xs text-rajai-muted/40 tracking-widest">
            © 2025 RAJAI.ORG — Raj Shah
          </p>
        </motion.div>
      </div>
    </section>
  );
}