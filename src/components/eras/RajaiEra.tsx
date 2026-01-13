import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { useRef } from 'react';
import GitHubProjects from '@/components/GitHubProjects';

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
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transforms for different sections
  const heroY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const aboutY = useTransform(scrollYProgress, [0, 1], [80, -60]);
  const valuesY = useTransform(scrollYProgress, [0, 1], [60, -80]);
  const servicesY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const timelineY = useTransform(scrollYProgress, [0, 1], [40, -70]);
  const projectsY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [20, -40]);
  const glowY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[300vh] flex flex-col items-center justify-start overflow-hidden era-rajai py-20 md:py-24"
    >
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
      
      {/* Multi-layered accent glows with parallax */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[300px] md:h-[450px] bg-rajai-accent/6 blur-[150px] rounded-full"
        style={{ y: glowY }}
        animate={{ opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-rajai-highlight/4 blur-[120px] rounded-full"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Hero Content with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-6xl px-4 md:px-6 mb-20"
        style={{ y: heroY }}
      >
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
          <motion.span 
            className="text-rajai-accent"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ai
          </motion.span>
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
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: 'hsl(var(--rajai-accent))' }}
          >
            <MapPin className="w-4 h-4" /> Global / Remote
          </motion.span>
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: 'hsl(var(--rajai-accent))' }}
          >
            <Calendar className="w-4 h-4" /> Available for Projects
          </motion.span>
        </motion.div>
      </motion.div>
      
      {/* About Section with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-20"
        style={{ y: aboutY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-glass rounded-2xl p-8 md:p-10"
          whileHover={{ scale: 1.01 }}
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
      </motion.div>
      
      {/* Values with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20"
        style={{ y: valuesY }}
      >
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
              whileHover={{ y: -6 }}
            >
              <motion.span 
                className="text-3xl mb-3 block"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              >
                {value.icon}
              </motion.span>
              <h4 className="font-display font-medium text-foreground mb-1">{value.title}</h4>
              <p className="text-sm text-rajai-muted">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Services with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20"
        style={{ y: servicesY }}
      >
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
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.span 
                className="text-4xl mb-4 block"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {service.icon}
              </motion.span>
              <h4 className="font-display text-lg font-medium text-foreground mb-2">{service.title}</h4>
              <p className="text-sm text-rajai-muted">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Timeline with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-3xl px-4 md:px-6 mb-20"
        style={{ y: timelineY }}
      >
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
              
              <motion.div 
                className="absolute left-0 md:relative md:left-auto w-8 h-8 rounded-full bg-rajai-surface border-2 border-rajai-accent/50 flex items-center justify-center"
                whileHover={{ scale: 1.2, borderColor: 'hsl(var(--rajai-accent))' }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-rajai-accent"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </motion.div>
              
              <div className="flex-1 md:hidden">
                <span className="font-mono text-sm text-rajai-accent">{item.year}</span>
                <h4 className="font-display font-medium text-foreground">{item.event}</h4>
                <p className="text-sm text-rajai-muted">{item.desc}</p>
              </div>
              
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* GitHub Projects Grid with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-6xl px-4 md:px-6 mb-20"
        style={{ y: projectsY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-rajai-accent/70 uppercase mb-10 text-center"
        >
          GitHub Projects
        </motion.h3>
        
        <GitHubProjects />
      </motion.div>
      
      {/* CTA Section with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-20"
        style={{ y: ctaY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-glass rounded-2xl p-8 md:p-12 text-center"
          whileHover={{ scale: 1.01 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-light text-foreground mb-4">
            Let's build something <motion.span 
              className="text-rajai-accent font-medium"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              extraordinary
            </motion.span>
          </h3>
          <p className="text-rajai-muted mb-8 max-w-xl mx-auto">
            Whether you have a project in mind or just want to explore possibilities, I'd love to hear from you.
          </p>
          <motion.a
            href="mailto:hello@rajai.org"
            className="inline-flex items-center gap-2 px-8 py-4 bg-rajai-accent text-rajai-bg font-medium rounded-full hover:bg-rajai-accent-soft transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
      
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
          {signals.map((signal, i) => (
            <motion.a
              key={signal.label}
              href={signal.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 md:gap-3 px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-border hover:border-rajai-accent/50 bg-rajai-surface/60 backdrop-blur-sm transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
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
            <motion.span 
              className="text-rajai-accent"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ai
            </motion.span>
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
