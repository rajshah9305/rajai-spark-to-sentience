import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Cpu, Network, Sparkles, Bot, LineChart } from 'lucide-react';

// Act III: The Mind - The emergence of artificial intelligence
const aiMilestones = [
  { name: 'Turing Test', icon: Brain, desc: 'Can machines think? (1950)', year: '1950' },
  { name: 'Perceptron', icon: Network, desc: 'First neural network model', year: '1957' },
  { name: 'Expert Systems', icon: Cpu, desc: 'Knowledge-based AI boom', year: '1980s' },
  { name: 'Deep Blue', icon: Bot, desc: 'AI defeats chess champion', year: '1997' },
  { name: 'Deep Learning', icon: Sparkles, desc: 'Neural networks renaissance', year: '2012' },
  { name: 'GPT Era', icon: LineChart, desc: 'Language models transform AI', year: '2020s' },
];

const aiCapabilities = [
  { icon: '🧠', label: 'Reasoning', desc: 'Logic and problem-solving beyond brute force' },
  { icon: '👁️', label: 'Perception', desc: 'Seeing and understanding the visual world' },
  { icon: '💬', label: 'Language', desc: 'Understanding and generating human language' },
  { icon: '🎨', label: 'Creativity', desc: 'Generating art, music, and novel ideas' },
];

const aiStats = [
  { value: '175B', label: 'Parameters in GPT-3' },
  { value: '1T+', label: 'Training tokens' },
  { value: '∞', label: 'Potential applications' },
  { value: 'NOW', label: 'The AI moment' },
];

const aiQuestions = [
  'What does it mean to think?',
  'Can silicon learn like neurons?',
  'Where is the line between tool and mind?',
  'What comes after artificial general intelligence?',
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
          Act III — The Mind
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-foreground mb-8 leading-tight"
        >
          And then machines
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
            began to think
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          The emergence of artificial intelligence marks humanity's boldest attempt—
          to create minds from mathematics, consciousness from computation.
        </motion.p>
        
        {/* AI capabilities badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2.5 md:gap-3"
        >
          {aiCapabilities.map((cap, i) => (
            <motion.span
              key={cap.label}
              className="px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-ai-neural/30 bg-ai-neural/5 text-ai-neural font-mono text-xs md:text-sm backdrop-blur-sm flex items-center gap-2"
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'hsl(var(--ai-neural))',
                backgroundColor: 'hsl(var(--ai-neural) / 0.1)',
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span>{cap.icon}</span>
              {cap.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      
      {/* AI Stats */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-24"
        style={{ y: statsY }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {aiStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-5 rounded-xl bg-ai-neural/5 border border-ai-neural/20"
              whileHover={{ y: -4, borderColor: 'hsl(var(--ai-neural) / 0.4)' }}
            >
              <motion.div 
                className="text-2xl md:text-3xl font-display font-bold text-ai-neural mb-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* AI Milestones */}
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
          The Path to Intelligence
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {aiMilestones.map((milestone, i) => (
            <motion.div
              key={milestone.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-ai-neural/5 border border-ai-neural/20 rounded-xl p-5 hover:border-ai-neural/40 transition-all group"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-3">
                <motion.div 
                  className="w-10 h-10 rounded-lg bg-ai-neural/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <milestone.icon className="w-5 h-5 text-ai-neural" />
                </motion.div>
                <span className="font-mono text-xs text-ai-neural/60">{milestone.year}</span>
              </div>
              <h4 className="font-display font-medium text-foreground group-hover:text-ai-neural transition-colors">
                {milestone.name}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">{milestone.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* AI Capabilities Detail */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="font-mono text-xs tracking-[0.3em] text-ai-neural/50 uppercase mb-10 text-center">
          What AI Can Do
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {aiCapabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-5 bg-ai-neural/5 border border-ai-neural/20 rounded-xl hover:border-ai-neural/40 transition-all"
              whileHover={{ y: -4 }}
            >
              <span className="text-3xl mb-3 block">{cap.icon}</span>
              <h4 className="font-display font-medium text-ai-neural mb-1">{cap.label}</h4>
              <p className="text-xs text-muted-foreground">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* AI Questions */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-24"
        style={{ y: projectsY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-ai-neural/50 uppercase mb-10 text-center"
        >
          The Questions We're Still Asking
        </motion.h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {aiQuestions.map((question, i) => (
            <motion.div
              key={question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-ai-neural/5 border border-ai-neural/20 rounded-full text-ai-neural/80 font-light italic"
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'hsl(var(--ai-neural))',
                boxShadow: '0 0 30px hsl(var(--ai-neural) / 0.2)',
              }}
            >
              "{question}"
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
