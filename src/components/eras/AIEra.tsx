import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const focusAreas = [
  { name: 'Machine Learning', icon: '🧠', desc: 'Predictive models & pattern recognition' },
  { name: 'Neural Networks', icon: '🔮', desc: 'Deep learning architectures' },
  { name: 'NLP & LLMs', icon: '💬', desc: 'Language understanding & generation' },
  { name: 'Computer Vision', icon: '👁️', desc: 'Image & video analysis' },
  { name: 'Automation', icon: '⚡', desc: 'Intelligent workflow systems' },
  { name: 'MLOps', icon: '🔧', desc: 'Production ML pipelines' },
];

const aiProjects = [
  {
    title: 'Intelligent Document Analysis',
    description: 'AI-powered system that extracts, classifies, and summarizes complex documents with 95%+ accuracy',
    tech: ['GPT-4', 'LangChain', 'Vector DB'],
    icon: '📄',
  },
  {
    title: 'Predictive Analytics Engine',
    description: 'Real-time forecasting system processing millions of data points for actionable insights',
    tech: ['TensorFlow', 'Time Series', 'Python'],
    icon: '📊',
  },
  {
    title: 'Conversational AI Assistant',
    description: 'Context-aware chatbot with multi-turn dialogue and domain-specific knowledge',
    tech: ['RAG', 'Embeddings', 'Fine-tuning'],
    icon: '🤖',
  },
];

const capabilities = [
  { stat: '10M+', label: 'Data points processed' },
  { stat: '95%+', label: 'Model accuracy' },
  { stat: '100x', label: 'Faster than manual' },
  { stat: '24/7', label: 'Autonomous operation' },
];

export default function AIEra() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transforms
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
      className="relative min-h-[250vh] flex flex-col items-center justify-start overflow-hidden era-ai pt-24 pb-20"
    >
      {/* Floating gradient orbs with parallax */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-80 md:w-96 h-80 md:h-96 rounded-full bg-ai-neural/12 blur-[120px]"
        style={{ y: orbY, scale: orbScale }}
        animate={{ opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 md:w-80 h-64 md:h-80 rounded-full bg-ai-synapse/10 blur-[100px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-48 md:w-64 h-48 md:h-64 rounded-full bg-ai-glow/8 blur-[80px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [60, -120]) }}
        animate={{ opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Header Content with parallax */}
      <motion.div 
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl mb-16"
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
          <span className="text-neural-glow font-normal">that think</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Raj works at the intersection of AI and engineering—creating intelligent 
          systems that learn, adapt, and solve real-world problems.
        </motion.p>
        
        {/* AI focus areas badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2.5 md:gap-3"
        >
          {focusAreas.slice(0, 4).map((area) => (
            <motion.span
              key={area.name}
              className="px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-ai-neural/30 bg-ai-neural/5 text-ai-neural font-mono text-xs md:text-sm backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'hsl(200, 100%, 55%)',
                backgroundColor: 'hsl(200, 100%, 55%, 0.1)',
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {area.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Capabilities Stats with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-20"
        style={{ y: statsY }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div 
                className="text-3xl md:text-4xl font-display font-bold text-ai-neural mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {cap.stat}
              </motion.div>
              <div className="text-sm text-muted-foreground font-mono">{cap.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Focus Areas Detail with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20"
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
              <motion.span 
                className="text-2xl mb-3 block"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
              >
                {area.icon}
              </motion.span>
              <h4 className="font-display font-medium text-foreground group-hover:text-ai-neural transition-colors">
                {area.name}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* AI Projects with parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-20"
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
              <motion.span 
                className="text-3xl mb-4 block"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {project.icon}
              </motion.span>
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
      
      {/* AI Philosophy Quote with parallax */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ y: quoteY }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.div 
          className="text-5xl text-ai-neural/30 mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          "
        </motion.div>
        <p className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed italic">
          AI is not about replacing human intelligence, but amplifying it.
        </p>
        <p className="mt-4 text-sm text-muted-foreground font-mono">— The RAJAI Philosophy</p>
      </motion.div>
    </section>
  );
}
