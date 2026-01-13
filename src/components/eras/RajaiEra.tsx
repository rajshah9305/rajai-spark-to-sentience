import { motion } from 'framer-motion';
import { GithubIcon, Mail, LinkedinIcon, ExternalLink, ArrowUpRight, MapPin, Calendar, Award, Users, Code, Zap } from 'lucide-react';
import ContactForm from '../ContactForm';

const projects = [
  {
    title: 'AI-Powered Document Intelligence',
    description: 'Enterprise-grade document processing system using advanced NLP and computer vision to extract, classify, and analyze complex documents with 98% accuracy.',
    tech: ['GPT-4', 'LangChain', 'Vector DB', 'FastAPI', 'React'],
    link: '#',
    metrics: ['98% accuracy', '10M+ docs processed', '50% time saved'],
    status: 'Production',
    category: 'AI/ML'
  },
  {
    title: 'Scalable Microservices Platform',
    description: 'Cloud-native platform handling 1M+ daily requests with auto-scaling, monitoring, and CI/CD pipelines. Built for a fintech startup.',
    tech: ['Node.js', 'Kubernetes', 'PostgreSQL', 'Redis', 'AWS'],
    link: '#',
    metrics: ['1M+ requests/day', '99.9% uptime', '5ms avg response'],
    status: 'Production',
    category: 'Backend'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard processing streaming data from multiple sources with real-time visualizations and predictive insights.',
    tech: ['React', 'D3.js', 'WebSocket', 'Python', 'Apache Kafka'],
    link: '#',
    metrics: ['Real-time updates', '50+ data sources', '100K+ events/sec'],
    status: 'Production',
    category: 'Frontend'
  },
  {
    title: 'Open Source ML Framework',
    description: 'Contributing to the developer community through tools, libraries, and shared knowledge. Building the future together.',
    tech: ['Python', 'TensorFlow', 'Docker', 'GitHub Actions'],
    link: 'https://github.com/rajshah9305',
    metrics: ['1K+ stars', '50+ contributors', '10K+ downloads'],
    status: 'Active',
    category: 'Open Source'
  },
];

const signals = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/rajshah9305', username: 'rajshah9305', followers: '2.5K' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/rajshah', username: 'Raj Shah', followers: '5K+' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@rajai.org', username: 'hello@rajai.org', followers: 'Direct' },
];

const timeline = [
  { 
    year: '2025', 
    event: 'Founded RAJAI.ORG', 
    desc: 'AI-first development studio',
    details: 'Launched independent consultancy focusing on AI integration and scalable system architecture for startups and enterprises.'
  },
  { 
    year: '2024', 
    event: 'Senior AI Engineer', 
    desc: 'Leading ML infrastructure',
    details: 'Led a team of 8 engineers building production ML systems processing 10M+ daily transactions with 99.9% reliability.'
  },
  { 
    year: '2023', 
    event: 'Full-Stack Architect', 
    desc: 'Scaling enterprise systems',
    details: 'Architected microservices platform serving 1M+ users, reducing infrastructure costs by 40% while improving performance.'
  },
  { 
    year: '2022', 
    event: 'Software Engineer', 
    desc: 'Building production applications',
    details: 'Developed and deployed multiple full-stack applications, establishing expertise in modern web technologies and cloud platforms.'
  },
];

const values = [
  { 
    icon: '🎯', 
    title: 'Purpose-Driven', 
    desc: 'Building technology that matters',
    details: 'Every project starts with understanding the real problem and creating solutions that make a meaningful impact.'
  },
  { 
    icon: '🔬', 
    title: 'Continuous Learning', 
    desc: 'Always exploring new frontiers',
    details: 'Technology evolves rapidly. I dedicate time daily to learning new tools, techniques, and industry best practices.'
  },
  { 
    icon: '🤝', 
    title: 'Collaboration', 
    desc: 'Great things are built together',
    details: 'The best solutions emerge from diverse perspectives. I believe in inclusive, collaborative development processes.'
  },
  { 
    icon: '✨', 
    title: 'Excellence', 
    desc: 'Quality in every detail',
    details: 'From code architecture to user experience, I strive for excellence in every aspect of software development.'
  },
];

const services = [
  {
    title: 'AI & Machine Learning',
    description: 'Strategic AI implementation, custom ML models, and intelligent automation solutions for your business challenges.',
    icon: '🧠',
    features: ['Custom ML Models', 'AI Strategy Consulting', 'Data Pipeline Design', 'Model Deployment & Monitoring'],
    pricing: 'From $5K/month'
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end web applications with modern technologies, scalable architecture, and exceptional user experiences.',
    icon: '⚡',
    features: ['React/Next.js Frontend', 'Node.js/Python Backend', 'Database Design', 'API Development'],
    pricing: 'From $3K/month'
  },
  {
    title: 'System Architecture',
    description: 'Scalable, maintainable systems designed for growth, performance, and reliability at enterprise scale.',
    icon: '🏗️',
    features: ['Microservices Design', 'Cloud Infrastructure', 'Performance Optimization', 'Security Implementation'],
    pricing: 'From $4K/month'
  },
  {
    title: 'Technical Leadership',
    description: 'Engineering leadership, team mentoring, and technical strategy for growing technology organizations.',
    icon: '👥',
    features: ['Team Leadership', 'Technical Strategy', 'Code Reviews', 'Mentoring & Training'],
    pricing: 'From $6K/month'
  },
];

const stats = [
  { number: '50+', label: 'Projects Delivered', icon: Code },
  { number: '10M+', label: 'Users Impacted', icon: Users },
  { number: '99.9%', label: 'System Uptime', icon: Zap },
  { number: '5+', label: 'Years Experience', icon: Award },
];

const testimonials = [
  {
    quote: "Raj's technical expertise and leadership transformed our entire development process. The AI solutions he built increased our efficiency by 300%.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc",
    company: "TechFlow"
  },
  {
    quote: "Working with Raj was exceptional. He delivered a complex microservices architecture that scaled seamlessly from 10K to 1M+ users.",
    author: "Michael Rodriguez",
    role: "Founder, ScaleUp",
    company: "ScaleUp"
  },
  {
    quote: "Raj's ability to translate business requirements into elegant technical solutions is unmatched. Highly recommend for any AI project.",
    author: "Dr. Emily Watson",
    role: "Head of Data Science, DataCorp",
    company: "DataCorp"
  }
];

export default function RajaiEra() {
  return (
    <section className="relative min-h-[400vh] flex flex-col items-center justify-start overflow-hidden era-rajai pt-24 pb-20">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, hsl(var(--primary)) 2px, transparent 2px),
              radial-gradient(circle at 80% 80%, hsl(var(--accent)) 1px, transparent 1px),
              radial-gradient(circle at 40% 60%, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px, 80px 80px, 60px 60px',
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center px-6 max-w-5xl mb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-primary/70 uppercase mb-10"
        >
          Act V — The Architect
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-8xl font-display font-light tracking-tight text-foreground mb-8 leading-tight"
        >
          Building the
          <br />
          <span className="text-primary font-normal">future</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Where innovation meets execution. I craft intelligent systems that bridge 
          the gap between human creativity and machine capability, turning ambitious 
          visions into scalable reality.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 rounded-xl bg-card/30 border border-border/30"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Location & Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-16"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/30 border border-border/30">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-primary">Available for Projects</span>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="relative z-10 w-full max-w-7xl px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-light text-foreground mb-8">
              About Raj
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                A technologist at heart, I've spent years exploring the intersection of 
                artificial intelligence, software engineering, and human-centered design. 
                My journey spans from building simple scripts to architecting systems 
                that serve millions of users.
              </p>
              <p>
                From building scalable web applications to architecting AI systems, 
                I believe in creating technology that amplifies human potential rather 
                than replacing it. Every line of code I write is guided by the principle 
                that technology should make life better, not more complicated.
              </p>
              <p>
                Currently focused on developing intelligent systems that solve real-world 
                problems while maintaining ethical standards and user privacy. I'm passionate 
                about mentoring the next generation of engineers and contributing to open 
                source projects that benefit the entire community.
              </p>
            </div>
          </div>
          
          {/* Enhanced Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/70 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{value.desc}</p>
                <p className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
                  {value.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="relative z-10 w-full max-w-7xl px-6 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-light text-center text-foreground mb-16"
        >
          Services & Expertise
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-card/30 border border-border/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl">{service.icon}</div>
                <div className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {service.pricing}
                </div>
              </div>
              <h3 className="text-xl font-display font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative z-10 w-full max-w-5xl px-6 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-light text-center text-foreground mb-16"
        >
          Professional Journey
        </motion.h2>
        
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-8 items-start"
            >
              <div className="flex-shrink-0 w-20 text-right">
                <span className="font-mono text-lg font-bold text-primary">{item.year}</span>
              </div>
              <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2 shadow-[0_0_20px_hsl(var(--primary)_/_0.5)]" />
              <div className="flex-1 pb-8">
                <h3 className="font-display text-xl font-medium text-foreground mb-2">{item.event}</h3>
                <p className="text-muted-foreground mb-3">{item.desc}</p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="relative z-10 w-full max-w-7xl px-6 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-light text-center text-foreground mb-16"
        >
          Featured Work
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-card/30 border border-border/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1 rounded-full text-xs font-mono ${
                    project.status === 'Production' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-mono bg-primary/20 text-primary">
                    {project.category}
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-xl font-display font-medium text-foreground group-hover:text-primary transition-colors mb-4">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.metrics.map((metric) => (
                  <span key={metric} className="px-3 py-1 text-xs font-mono bg-card/50 border border-border/50 rounded-full text-foreground">
                    {metric}
                  </span>
                ))}
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 w-full max-w-6xl px-6 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-light text-center text-foreground mb-16"
        >
          Client Testimonials
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card/30 border border-border/30"
            >
              <div className="text-4xl text-primary/30 mb-4">"</div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-medium text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-xs text-primary font-mono mt-1">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 w-full max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-light text-center text-foreground mb-16"
        >
          Let's Build Something Amazing
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-display font-medium text-foreground mb-8"
            >
              Start a Conversation
            </motion.h3>
            <ContactForm />
          </div>
          
          {/* Social Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl font-display font-medium text-foreground mb-8"
            >
              Connect & Follow
            </motion.h3>
            
            <div className="space-y-6">
              {signals.map((signal, i) => (
                <motion.a
                  key={signal.label}
                  href={signal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-6 rounded-xl bg-card/30 border border-border/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <signal.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="flex-1">
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {signal.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {signal.username}
                    </div>
                    <div className="text-xs text-primary font-mono mt-1">
                      {signal.followers} followers
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 p-8 rounded-2xl bg-primary/10 border border-primary/20"
            >
              <h4 className="font-display font-medium text-foreground mb-4">
                Ready to collaborate?
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                I'm always excited to work on innovative projects, provide technical consulting, 
                or discuss the future of technology. Whether you're a startup looking to scale 
                or an enterprise seeking AI integration, let's explore how we can work together.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-primary">
                <span className="px-3 py-1 bg-primary/20 rounded-full">AI/ML Projects</span>
                <span className="px-3 py-1 bg-primary/20 rounded-full">System Architecture</span>
                <span className="px-3 py-1 bg-primary/20 rounded-full">Technical Leadership</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}