import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ExternalLink, ArrowUpRight, MapPin, Calendar, Download } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Applications',
    description: 'Building intelligent systems that leverage machine learning to solve complex problems',
    tech: ['Python', 'TensorFlow', 'React'],
    link: '#',
  },
  {
    title: 'Full-Stack Platforms',
    description: 'End-to-end web applications with modern architectures and seamless user experiences',
    tech: ['TypeScript', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Open Source',
    description: 'Contributing to the developer community through tools, libraries, and shared knowledge',
    tech: ['GitHub', 'Documentation', 'Community'],
    link: 'https://github.com/rajshah9305',
  },
];

const signals = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/rajshah9305', username: 'rajshah9305' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rajshah', username: 'Raj Shah' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@rajai.org', username: 'hello@rajai.org' },
];

const timeline = [
  { year: '2025', event: 'Founded RAJAI.ORG', desc: 'AI-first development studio' },
  { year: '2024', event: 'Senior AI Engineer', desc: 'Leading ML infrastructure' },
  { year: '2023', event: 'Full-Stack Architect', desc: 'Scaling enterprise systems' },
  { year: '2022', event: 'Software Engineer', desc: 'Building production applications' },
];

const values = [
  { icon: '🎯', title: 'Purpose-Driven', desc: 'Building technology that matters' },
  { icon: '🔬', title: 'Continuous Learning', desc: 'Always exploring new frontiers' },
  { icon: '🤝', title: 'Collaboration', desc: 'Great things are built together' },
  { icon: '✨', title: 'Excellence', desc: 'Quality in every detail' },
];

const services = [
  {
    title: 'AI Consulting',
    description: 'Strategic AI implementation and architecture guidance for your business',
    icon: '🧠',
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end application development from concept to deployment',
    icon: '💻',
  },
  {
    title: 'Technical Advisory',
    description: 'Expert guidance on technology decisions and team building',
    icon: '🎯',
  },
];

export default function RajaiEra() {
  return (
    <section className="relative min-h-[300vh] flex flex-col items-center justify-start overflow-hidden era-rajai py-20 md:py-24">
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
      
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 mb-20">
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
          className="text-xl md:text-2xl text-foreground font-medium text-center max-w-3xl mx-auto mb-10"
        >
          I design what comes next.
        </motion.p>
        
        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-mono text-rajai-muted"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Global / Remote
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Available for Projects
          </span>
        </motion.div>
      </div>
      
      {/* About Section */}
      <div className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-glass rounded-2xl p-8 md:p-10"
        >
          <h3 className="font-mono text-xs tracking-[0.3em] text-rajai-accent/70 uppercase mb-6">About</h3>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            I'm Raj Shah, a software engineer and AI architect passionate about building technology that makes a difference. 
            With expertise spanning full-stack development, machine learning, and system architecture, I transform complex 
            problems into elegant solutions.
          </p>
          <p className="text-base text-rajai-muted leading-relaxed">
            Through RAJAI.ORG, I help organizations navigate the AI revolution—from strategy to implementation. 
            Whether it's building intelligent applications, optimizing existing systems, or exploring new frontiers, 
            I bring a unique blend of technical depth and strategic thinking.
          </p>
        </motion.div>
      </div>
      
      {/* Values */}
      <div className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-rajai-accent/70 uppercase mb-10 text-center"
        >
          Core Values
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <span className="text-3xl mb-3 block">{value.icon}</span>
              <h4 className="font-display font-medium text-foreground mb-1">{value.title}</h4>
              <p className="text-sm text-rajai-muted">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Services */}
      <div className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-rajai-accent/70 uppercase mb-10 text-center"
        >
          Services
        </motion.h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="card-glass rounded-xl p-6 text-center hover:border-rajai-accent/30 transition-all"
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h4 className="font-display text-lg font-medium text-foreground mb-2">{service.title}</h4>
              <p className="text-sm text-rajai-muted">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Timeline */}
      <div className="relative z-10 w-full max-w-3xl px-4 md:px-6 mb-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-rajai-accent/70 uppercase mb-10 text-center"
        >
          Journey
        </motion.h3>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rajai-accent/30 via-rajai-accent/20 to-transparent" />
          
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex items-start gap-6 mb-8 pl-10 md:pl-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="font-mono text-sm text-rajai-accent">{item.year}</span>
                <h4 className="font-display font-medium text-foreground">{item.event}</h4>
                <p className="text-sm text-rajai-muted">{item.desc}</p>
              </div>
              
              <div className="absolute left-0 md:relative md:left-auto w-8 h-8 rounded-full bg-rajai-surface border-2 border-rajai-accent/50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-rajai-accent" />
              </div>
              
              <div className="flex-1 md:hidden">
                <span className="font-mono text-sm text-rajai-accent">{item.year}</span>
                <h4 className="font-display font-medium text-foreground">{item.event}</h4>
                <p className="text-sm text-rajai-muted">{item.desc}</p>
              </div>
              
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 mb-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-rajai-accent/70 uppercase mb-10 text-center"
        >
          Featured Work
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 md:gap-6"
        >
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
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
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      {/* CTA Section */}
      <div className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-glass rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-light text-foreground mb-4">
            Let's build something <span className="text-rajai-accent font-medium">extraordinary</span>
          </h3>
          <p className="text-rajai-muted mb-8 max-w-xl mx-auto">
            Whether you have a project in mind or just want to explore possibilities, I'd love to hear from you.
          </p>
          <motion.a
            href="mailto:hello@rajai.org"
            className="inline-flex items-center gap-2 px-8 py-4 bg-rajai-accent text-rajai-bg font-medium rounded-full hover:bg-rajai-accent-soft transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
      
      {/* Signals / Contact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center"
      >
        <p className="font-mono text-xs tracking-[0.25em] text-rajai-muted uppercase mb-8">
          Connect
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
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mt-24 md:mt-32"
      >
        <div className="mb-4">
          <span className="text-3xl font-display font-light">
            <span className="text-foreground">Raj</span>
            <span className="text-rajai-accent">ai</span>
          </span>
        </div>
        <p className="font-mono text-xs text-rajai-muted/40 tracking-widest">
          © 2025 RAJAI.ORG — Raj Shah
        </p>
        <p className="font-mono text-xs text-rajai-muted/30 mt-2">
          Designed & Built with Purpose
        </p>
      </motion.div>
    </section>
  );
}
