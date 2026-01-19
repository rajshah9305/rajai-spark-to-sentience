import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Cpu, Network, Sparkles, Bot, LineChart } from 'lucide-react';

const focusAreas = [
  { name: 'Machine Learning', icon: Brain, desc: 'Predictive models & pattern recognition' },
  { name: 'Neural Networks', icon: Network, desc: 'Deep learning architectures' },
  { name: 'NLP & LLMs', icon: Sparkles, desc: 'Language understanding & generation' },
  { name: 'Computer Vision', icon: Cpu, desc: 'Image & video analysis' },
  { name: 'Automation', icon: Bot, desc: 'Intelligent workflow systems' },
  { name: 'MLOps', icon: LineChart, desc: 'Production ML pipelines' },
];

const aiProjects = [
  {
    title: 'Intelligent Document Analysis',
    description: 'AI-powered system that extracts, classifies, and summarizes complex documents with 95%+ accuracy',
    tech: ['GPT-4', 'LangChain', 'Vector DB'],
    icon: '📄',
    impact: '10x faster processing',
  },
  {
    title: 'Predictive Analytics Engine',
    description: 'Real-time forecasting system processing millions of data points for actionable business insights',
    tech: ['TensorFlow', 'Time Series', 'Python'],
    icon: '📊',
    impact: '30% cost reduction',
  },
  {
    title: 'Conversational AI Assistant',
    description: 'Context-aware chatbot with multi-turn dialogue and domain-specific knowledge integration',
    tech: ['RAG', 'Embeddings', 'Fine-tuning'],
    icon: '🤖',
    impact: '85% resolution rate',
  },
];

const capabilities = [
  { stat: '10M+', label: 'Data points processed', icon: '📊' },
  { stat: '95%+', label: 'Model accuracy', icon: '🎯' },
  { stat: '100x', label: 'Faster than manual', icon: '⚡' },
  { stat: '24/7', label: 'Autonomous operation', icon: '🔄' },
];

const aiPhilosophy = [
  { principle: 'Human-Centered', desc: 'AI should amplify human capabilities, not replace them' },
  { principle: 'Ethical First', desc: 'Build responsible AI with transparency and fairness' },
  { principle: 'Production Ready', desc: 'From prototype to production with reliability' },
  { principle: 'Continuous Learning', desc: 'Systems that adapt and improve over time' },
];

export default function AIEra() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const statsY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const areasY = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const projectsY = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const quoteY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const orbY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[280vh] flex flex-col items-center justify-start overflow-hidden era-ai pt-24 pb-20"
    >
      {/* Floating gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-80 md:w-96 h-80 md:h-96 rounded-full bg-ai-neural/15 blur-[120px]"
        style={{ y: orbY, scale: orbScale }}
        animate={{ opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 md:w-80 h-64 md:h-80 rounded-full bg-ai-synapse/12 blur-[100px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
        animate={{ opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-48 md:w-64 h-48 md:h-64 rounded-full bg-ai-glow/10 blur-[80px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [60, -120]) }}
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Header Content */}
      <motion.div 
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl mb-20"
        style={{ y: headerY }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-ai-neural/70 uppercase mb-10"
        >
          Act IV — The Thinking Machine
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-foreground mb-8 leading-tight"
        >
          Building systems
          <br />
          <motion.span 
            className="text-neural-glow font-normal"
            animate={{ 
              textShadow: [
                '0 0 20px hsl(var(--ai-neural) / 0.5)',
                '0 0 40px hsl(var(--ai-neural) / 0.8)',
                '0 0 20px hsl(var(--ai-neural) / 0.5)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            that think
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Raj works at the intersection of AI and engineering—creating intelligent 
          systems that learn, adapt, and solve real-world problems at scale.
        </motion.p>
        
        {/* AI focus areas badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2.5 md:gap-3"
        >
          {focusAreas.slice(0, 4).map((area, i) => (
            <motion.span
              key={area.name}
              className="px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-ai-neural/30 bg-ai-neural/5 text-ai-neural font-mono text-xs md:text-sm backdrop-blur-sm flex items-center gap-2"
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'hsl(var(--ai-neural))',
                backgroundColor: 'hsl(var(--ai-neural) / 0.1)',
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <area.icon className="w-3.5 h-3.5" />
              {area.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Capabilities Stats */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-24"
        style={{ y: statsY }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-5 rounded-xl bg-ai-neural/5 border border-ai-neural/20"
              whileHover={{ y: -4, borderColor: 'hsl(var(--ai-neural) / 0.4)' }}
            >
              <span className="text-2xl mb-2 block">{cap.icon}</span>
              <motion.div 
                className="text-2xl md:text-3xl font-display font-bold text-ai-neural mb-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {cap.stat}
              </motion.div>
              <div className="text-xs text-muted-foreground font-mono">{cap.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Focus Areas Detail */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-24"
        style={{ y: areasY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-ai-neural/50 uppercase mb-10 text-center"
        >
          AI Expertise
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-ai-neural/5 border border-ai-neural/20 rounded-xl p-5 hover:border-ai-neural/40 transition-all group"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-lg bg-ai-neural/10 flex items-center justify-center mb-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <area.icon className="w-5 h-5 text-ai-neural" />
              </motion.div>
              <h4 className="font-display font-medium text-foreground group-hover:text-ai-neural transition-colors">
                {area.name}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* AI Philosophy */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="font-mono text-xs tracking-[0.3em] text-ai-neural/50 uppercase mb-10 text-center">
          AI Philosophy
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {aiPhilosophy.map((item, i) => (
            <motion.div
              key={item.principle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4"
            >
              <h4 className="font-display font-medium text-ai-neural mb-1">{item.principle}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* AI Projects */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-24"
        style={{ y: projectsY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-ai-neural/50 uppercase mb-10 text-center"
        >
          AI Projects
        </motion.h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {aiProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="card-glass rounded-xl p-6 hover:border-ai-neural/40 transition-all group"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.span 
                  className="text-3xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {project.icon}
                </motion.span>
                <span className="text-xs font-mono px-2 py-1 bg-ai-synapse/10 rounded text-ai-synapse">
                  {project.impact}
                </span>
              </div>
              <h4 className="font-display text-lg font-medium text-foreground group-hover:text-ai-neural transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2 py-1 bg-ai-neural/10 rounded-md text-ai-neural/80 border border-ai-neural/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* AI Philosophy Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ y: quoteY }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.div 
          className="text-6xl text-ai-neural/30 mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          "
        </motion.div>
        <p className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed italic">
          AI is not about replacing human intelligence,
          <br />
          <span className="text-ai-neural">but amplifying it.</span>
        </p>
        <p className="mt-6 text-sm text-muted-foreground font-mono">— The RAJAI Philosophy</p>
      </motion.div>
    </section>
  );
}
