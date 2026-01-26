import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import InteractiveTimeline from '@/components/InteractiveTimeline';

// Act III: The Mind - The emergence of artificial intelligence
const aiMilestones = [
  { year: '1950', title: 'Turing Test', description: 'Alan Turing poses the question: Can machines think? His test becomes the benchmark for machine intelligence.', era: 'ai' as const, icon: '🧠' },
  { year: '1957', title: 'Perceptron', description: 'Frank Rosenblatt creates the first neural network model, inspired by biological neurons.', era: 'ai' as const, icon: '🔗' },
  { year: '1980s', title: 'Expert Systems', description: 'Rule-based AI systems boom in industries, encoding human expertise into machines.', era: 'ai' as const, icon: '📚' },
  { year: '1997', title: 'Deep Blue', description: 'IBM\'s chess computer defeats world champion Garry Kasparov, proving machines can master strategy.', era: 'ai' as const, icon: '♟️' },
  { year: '2012', title: 'Deep Learning', description: 'AlexNet wins ImageNet, igniting the deep learning revolution that transforms AI.', era: 'ai' as const, icon: '🎯' },
  { year: '2020s', title: 'GPT Era', description: 'Large language models emerge, capable of human-like text generation and reasoning.', era: 'ai' as const, icon: '💬' },
];

const aiCapabilities = [
  { icon: '🧠', label: 'Reasoning', desc: 'Logic beyond brute force computation' },
  { icon: '👁️', label: 'Perception', desc: 'Understanding the visual world' },
  { icon: '💬', label: 'Language', desc: 'Generating human-like communication' },
  { icon: '🎨', label: 'Creativity', desc: 'Producing art, music, and novel ideas' },
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
  'What comes after AGI?',
];

export default function AIEra() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const statsY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const capabilitiesY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const questionsY = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const quoteY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[280vh] flex flex-col items-center justify-start overflow-hidden era-ai pt-24 pb-20"
    >
      {/* Floating neural orbs with fluid animation */}
      <motion.div 
        className="absolute top-1/5 left-1/4 w-[350px] md:w-[450px] h-[350px] md:h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--ai-neural) / 0.15) 0%, hsl(var(--ai-synapse) / 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ 
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[280px] md:w-[350px] h-[280px] md:h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--ai-synapse) / 0.12) 0%, hsl(var(--ai-pulse) / 0.04) 50%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ 
          x: [0, -40, 30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-[200px] md:w-[250px] h-[200px] md:h-[250px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--ai-glow) / 0.1) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
        animate={{ 
          x: [0, 20, -30, 0],
          y: [0, -20, 40, 0],
          opacity: [0.6, 1, 0.7, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      
      {/* Neural connection lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute neural-line"
            style={{
              width: '100%',
              top: `${20 + i * 15}%`,
              transform: `rotate(${-5 + i * 2}deg)`,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Header Content */}
      <motion.div 
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl mb-20"
        style={{ y: headerY }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.5em] text-ai-neural/80 uppercase mb-12"
        >
          Act III — The Mind
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-foreground mb-10 leading-tight"
        >
          And then machines
          <br />
          <motion.span 
            className="ai-glow font-medium inline-block"
            animate={{ 
              textShadow: [
                '0 0 20px hsl(175 80% 45% / 0.5)',
                '0 0 50px hsl(175 80% 45% / 0.8)',
                '0 0 20px hsl(175 80% 45% / 0.5)'
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            began to think
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          The emergence of artificial intelligence marks humanity's boldest attempt—
          to create minds from mathematics, consciousness from computation.
        </motion.p>
        
        {/* AI capabilities badges - fluid design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {aiCapabilities.map((cap, i) => (
            <motion.span
              key={cap.label}
              className="ai-badge px-5 md:px-6 py-2.5 md:py-3 font-mono text-xs md:text-sm flex items-center gap-2 cursor-pointer transition-all duration-500"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.08,
                y: -4,
              }}
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {cap.icon}
              </motion.span>
              {cap.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      
      {/* AI Stats - fluid cards */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-24"
        style={{ y: statsY }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {aiStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="ai-card text-center p-6 cursor-pointer"
              whileHover={{ 
                y: -6,
                scale: 1.03,
              }}
            >
              <motion.div 
                className="text-2xl md:text-3xl font-display font-bold text-ai-neural mb-2"
                animate={{
                  textShadow: [
                    '0 0 10px hsl(175 80% 45% / 0.3)',
                    '0 0 20px hsl(175 80% 45% / 0.5)',
                    '0 0 10px hsl(175 80% 45% / 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* AI Milestones Timeline */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-24"
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.4em] text-ai-neural/60 uppercase mb-12 text-center"
        >
          The Path to Intelligence
        </motion.h3>
        
        <InteractiveTimeline events={aiMilestones} variant="horizontal" />
      </motion.div>
      
      {/* AI Capabilities Detail - fluid cards */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-24"
        style={{ y: capabilitiesY }}
      >
        <h3 className="font-mono text-xs tracking-[0.4em] text-ai-neural/60 uppercase mb-12 text-center">
          What AI Can Do
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {aiCapabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="ai-card text-center p-6 cursor-pointer group"
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <motion.span 
                className="text-3xl md:text-4xl mb-4 block"
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              >
                {cap.icon}
              </motion.span>
              <h4 className="font-display font-medium text-ai-neural mb-2 group-hover:ai-glow transition-all">
                {cap.label}
              </h4>
              <p className="text-xs text-muted-foreground">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* AI Questions - floating bubbles */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-24"
        style={{ y: questionsY }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.4em] text-ai-neural/60 uppercase mb-12 text-center"
        >
          The Questions We're Still Asking
        </motion.h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {aiQuestions.map((question, i) => (
            <motion.div
              key={question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="ai-card px-6 py-4 text-ai-glow/90 font-light italic cursor-pointer"
              whileHover={{ 
                scale: 1.06, 
                y: -6,
              }}
              animate={{
                y: [0, -4, 0],
              }}
              style={{
                animationDelay: `${i * 0.5}s`,
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
          className="text-6xl md:text-7xl text-ai-neural/20 mb-6"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          "
        </motion.div>
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 leading-relaxed italic">
          AI is not about replacing human intelligence,
          <br />
          <span className="ai-glow">but amplifying it.</span>
        </p>
        <motion.p 
          className="mt-8 text-sm text-muted-foreground font-mono tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          — The RAJAI Philosophy
        </motion.p>
      </motion.div>
    </section>
  );
}
