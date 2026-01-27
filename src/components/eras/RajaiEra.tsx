import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, MapPin, Calendar, ArrowUpRight, Code, Briefcase, GraduationCap, Zap } from 'lucide-react';
import GitHubProjects from '@/components/GitHubProjects';

const signals = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/rajshah9305', username: '@rajshah9305' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rajshah', username: 'Raj Shah' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@rajai.org', username: 'hello@rajai.org' },
];

const timeline = [
  { year: '2025', event: 'Founded RAJAI.ORG', desc: 'AI-first development studio focused on intelligent solutions', icon: Zap },
  { year: '2024', event: 'Senior AI Engineer', desc: 'Leading ML infrastructure and AI product development', icon: Code },
  { year: '2023', event: 'Full-Stack Architect', desc: 'Designing and scaling enterprise-grade systems', icon: Briefcase },
  { year: '2022', event: 'Software Engineer', desc: 'Building production applications at scale', icon: GraduationCap },
];

const values = [
  { icon: '🎯', title: 'Purpose-Driven', desc: 'Building technology that creates real impact' },
  { icon: '🔬', title: 'Continuous Learning', desc: 'Always exploring new frontiers in tech' },
  { icon: '🤝', title: 'Collaboration', desc: 'Great things are built together' },
  { icon: '✨', title: 'Excellence', desc: 'Obsessive attention to quality and detail' },
];

const services = [
  {
    title: 'AI Consulting',
    description: 'Strategic AI implementation, architecture design, and roadmap planning for your organization',
    icon: '🧠',
    features: ['AI Strategy', 'Architecture Design', 'Model Selection'],
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end application development from concept to production deployment',
    icon: '💻',
    features: ['React/Next.js', 'Node.js/Python', 'Cloud Infrastructure'],
  },
  {
    title: 'Technical Advisory',
    description: 'Expert guidance on technology decisions, team building, and engineering culture',
    icon: '🎯',
    features: ['Tech Strategy', 'Code Reviews', 'Team Mentorship'],
  },
];

const expertise = [
  { category: 'Languages', items: ['TypeScript', 'Python', 'JavaScript', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis'] },
  { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI'] },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Vercel', 'Docker'] },
];

export default function RajaiEra() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const aboutY = useTransform(scrollYProgress, [0, 1], [60, -50]);
  const valuesY = useTransform(scrollYProgress, [0, 1], [50, -60]);
  const servicesY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const timelineY = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const projectsY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[350vh] flex flex-col items-center justify-start overflow-hidden era-rajai py-20 md:py-24"
    >
      {/* Subtle premium grid */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--rajai-gold)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--rajai-gold)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Multi-layered premium glows */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[400px] md:h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, hsl(var(--rajai-gold) / 0.08) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[350px] md:w-[450px] h-[350px] md:h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--rajai-highlight) / 0.05) 0%, transparent 50%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-10 w-full max-w-6xl px-4 md:px-6 mb-28"
        style={{ y: heroY }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-rajai text-xs md:text-sm tracking-[0.5em] text-rajai-gold/75 uppercase mb-12 font-semibold"
        >
          Act IV — The Architect
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-9xl font-rajai font-bold tracking-tighter text-center mb-8"
        >
          <span className="raj-signature">RAJ</span>
          <span className="inline-block w-4 md:w-8" />
          <motion.span 
            className="rajai-glow"
            animate={{ 
              opacity: [1, 0.85, 1],
              textShadow: [
                '0 0 15px hsl(42 85% 58% / 0.45)',
                '0 0 40px hsl(42 85% 58% / 0.65)',
                '0 0 15px hsl(42 85% 58% / 0.45)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            SHAH
          </motion.span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <p className="text-lg md:text-xl text-rajai-muted font-rajai font-light mb-3 tracking-wide">
            I don't just use systems.
          </p>
          <p className="text-xl md:text-2xl text-rajai-cream font-rajai font-semibold tracking-tight">
            I architect what comes next.
          </p>
        </motion.div>
        
        {/* Quick Stats - premium badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-mono text-rajai-muted"
        >
          <motion.span 
            className="rajai-badge flex items-center gap-2 px-5 py-2.5 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <MapPin className="w-4 h-4 text-rajai-gold" /> Global / Remote
          </motion.span>
          <motion.span 
            className="rajai-badge flex items-center gap-2 px-5 py-2.5 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Calendar className="w-4 h-4 text-rajai-gold" /> Available for Projects
          </motion.span>
        </motion.div>
      </motion.div>
      
      {/* About Section - premium card */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-28"
        style={{ y: aboutY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rajai-card rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-rajai text-xs tracking-[0.35em] text-rajai-gold/85 uppercase mb-8 font-semibold">About</h3>
          <p className="text-lg md:text-xl text-rajai-cream/90 leading-relaxed mb-6 font-body font-light">
            I'm <span className="raj-signature">Raj Shah</span>, a software engineer and AI architect with a passion for building technology that makes a genuine difference. 
            From full-stack development to machine learning systems, I transform complex challenges into elegant, scalable solutions.
          </p>
          <p className="text-base md:text-lg text-rajai-muted leading-relaxed font-body">
            Through <span className="text-rajai-gold font-rajai font-semibold">RAJAI.ORG</span>, I help organizations navigate the AI revolution—from strategy to production. 
            Whether it's architecting intelligent applications, optimizing systems at scale, or exploring new frontiers, 
            I bring deep technical expertise combined with strategic product thinking.
          </p>
        </motion.div>
      </motion.div>
      
      {/* Expertise Grid - refined pills */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="font-rajai text-xs tracking-[0.35em] text-rajai-gold/85 uppercase mb-12 text-center font-semibold">
          Technical Expertise
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {expertise.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rajai-card rounded-xl p-5"
              whileHover={{ y: -4 }}
            >
              <h4 className="font-rajai text-xs text-rajai-gold mb-4 tracking-wider font-semibold">{category.category}</h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span 
                    key={item} 
                    className="text-xs text-rajai-muted px-2.5 py-1 bg-rajai-warm/50 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Values - elegant icons */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-28"
        style={{ y: valuesY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-rajai text-xs tracking-[0.35em] text-rajai-gold/85 uppercase mb-12 text-center font-semibold"
        >
          Core Values
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 md:p-8 rounded-xl cursor-pointer group hover:bg-rajai-warm/30 transition-all duration-500"
              whileHover={{ y: -8 }}
            >
              <motion.span 
                className="text-3xl md:text-4xl mb-4 block"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.6 }}
              >
                {value.icon}
              </motion.span>
              <h4 className="font-rajai font-semibold text-rajai-cream mb-2 group-hover:text-rajai-gold transition-colors">
                {value.title}
              </h4>
              <p className="text-sm text-rajai-muted font-body">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Services - premium cards with shimmer */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-28"
        style={{ y: servicesY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-rajai text-xs tracking-[0.35em] text-rajai-gold/85 uppercase mb-12 text-center font-semibold"
        >
          Services
        </motion.h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rajai-card rounded-xl p-7 text-center group cursor-pointer"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.span 
                className="text-4xl md:text-5xl mb-5 block"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {service.icon}
              </motion.span>
              <h4 className="font-rajai text-xl font-bold text-rajai-cream mb-3 group-hover:text-rajai-gold transition-colors duration-500">
                {service.title}
              </h4>
              <p className="text-sm text-rajai-muted mb-5 leading-relaxed font-body">{service.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {service.features.map((feature) => (
                  <span 
                    key={feature}
                    className="text-xs font-rajai px-3 py-1.5 bg-rajai-gold/12 rounded-md text-rajai-gold/90 font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Timeline - elegant vertical */}
      <motion.div 
        className="relative z-10 w-full max-w-3xl px-4 md:px-6 mb-28"
        style={{ y: timelineY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.4em] text-rajai-gold/80 uppercase mb-12 text-center"
        >
          Journey
        </motion.h3>
        
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rajai-gold/50 via-rajai-gold/30 to-transparent" />
          
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -35 : 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex items-start gap-6 mb-12 pl-14 md:pl-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="font-mono text-sm text-rajai-gold font-medium">{item.year}</span>
                <h4 className="font-serif font-medium text-foreground text-xl mt-1">{item.event}</h4>
                <p className="text-sm text-rajai-muted mt-1">{item.desc}</p>
              </div>
              
              <motion.div 
                className="absolute left-0 md:relative md:left-auto w-12 h-12 rounded-full bg-rajai-surface border-2 border-rajai-gold/40 flex items-center justify-center z-10"
                whileHover={{ scale: 1.15, borderColor: 'hsl(var(--rajai-gold))' }}
              >
                <item.icon className="w-5 h-5 text-rajai-gold" />
              </motion.div>
              
              <div className="flex-1 md:hidden">
                <span className="font-mono text-sm text-rajai-gold font-medium">{item.year}</span>
                <h4 className="font-serif font-medium text-foreground text-lg">{item.event}</h4>
                <p className="text-sm text-rajai-muted">{item.desc}</p>
              </div>
              
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* GitHub Projects */}
      <motion.div 
        className="relative z-10 w-full max-w-6xl px-4 md:px-6 mb-28"
        style={{ y: projectsY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.4em] text-rajai-gold/80 uppercase mb-5 text-center"
        >
          Open Source Projects
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-rajai-muted text-sm mb-12 max-w-xl mx-auto"
        >
          Check out my latest work on GitHub — from AI experiments to full-stack applications.
        </motion.p>
        
        <GitHubProjects />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://github.com/rajshah9305"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-rajai-gold hover:text-foreground transition-colors group"
            whileHover={{ x: 4 }}
          >
            <Github className="w-4 h-4" />
            View all repositories on GitHub
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Contact / CTA */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="rajai-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 gold-shimmer opacity-30" />
          
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl md:text-3xl font-serif font-light text-foreground mb-4"
              animate={{
                textShadow: [
                  '0 0 0px transparent',
                  '0 0 20px hsl(45 90% 55% / 0.3)',
                  '0 0 0px transparent',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Let's Build Something <span className="rajai-glow font-medium">Extraordinary</span>
            </motion.h3>
            <p className="text-rajai-muted mb-8 max-w-xl mx-auto">
              Whether you need AI expertise, technical leadership, or a full-stack solution,
              I'm here to help turn your vision into reality.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {signals.map((signal, i) => (
                <motion.a
                  key={signal.label}
                  href={signal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rajai-badge flex items-center gap-3 px-5 py-3 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <signal.icon className="w-5 h-5 text-rajai-gold group-hover:text-foreground transition-colors" />
                  <span className="text-sm font-medium">{signal.username}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
