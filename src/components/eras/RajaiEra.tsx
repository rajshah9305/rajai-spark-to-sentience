import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neural Architecture',
    description: 'Deep learning systems for autonomous decision-making',
    tech: ['Python', 'TensorFlow', 'CUDA'],
  },
  {
    title: 'Distributed Systems',
    description: 'Scalable infrastructure for real-time processing',
    tech: ['Go', 'Kubernetes', 'gRPC'],
  },
  {
    title: 'Generative Interfaces',
    description: 'AI-powered creative tools and experiences',
    tech: ['TypeScript', 'React', 'WebGL'],
  },
];

const signals = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/rajshah9305', username: '@rajshah9305' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rajshah', username: 'Connect' },
  { icon: Mail, label: 'Email', href: 'mailto:raj@rajai.org', username: 'raj@rajai.org' },
];

export default function RajaiEra() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden era-rajai py-24">
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--rajai-accent)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--rajai-accent)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rajai-accent/5 blur-[150px] rounded-full" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.3em] text-rajai-accent/60 uppercase mb-8 text-center"
        >
          Act V — The Architect
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight text-center mb-6"
        >
          <span className="text-foreground">Raj</span>
          <span className="text-rajai-accent">ai</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-rajai-muted font-light text-center max-w-3xl mx-auto mb-4"
        >
          I don't just use systems.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl text-foreground font-medium text-center max-w-3xl mx-auto mb-20"
        >
          I design what comes next.
        </motion.p>
        
        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="card-glass rounded-xl p-6 group cursor-pointer"
              whileHover={{ y: -5, borderColor: 'hsl(var(--rajai-accent) / 0.3)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-display font-medium text-foreground group-hover:text-rajai-accent transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-rajai-muted group-hover:text-rajai-accent transition-colors" />
              </div>
              <p className="text-rajai-muted text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-rajai-surface rounded text-rajai-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Signals / Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <p className="font-mono text-xs tracking-[0.2em] text-rajai-muted uppercase mb-8">
            Signals
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {signals.map((signal) => (
              <motion.a
                key={signal.label}
                href={signal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-rajai-accent/50 bg-rajai-surface/50 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <signal.icon className="w-5 h-5 text-rajai-muted group-hover:text-rajai-accent transition-colors" />
                <span className="font-mono text-sm text-foreground group-hover:text-rajai-accent transition-colors">
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
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <p className="font-mono text-xs text-rajai-muted/40 tracking-wider">
            © 2024 RAJAI.ORG — From Spark to Sentience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
