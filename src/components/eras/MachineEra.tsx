import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  cardHover, 
  easings 
} from '@/lib/animations';

const terminalLines = [
  { text: '> INITIALIZING RAJ.SYSTEM...', delay: 0 },
  { text: '> LOADING FOUNDATION: COMPUTER SCIENCE', delay: 0.3 },
  { text: '> PROCESSING: ALGORITHMS & DATA STRUCTURES', delay: 0.6 },
  { text: '> COMPILING: SYSTEMS ARCHITECTURE', delay: 0.9 },
  { text: '> OPTIMIZING: PERFORMANCE & SCALABILITY', delay: 1.2 },
  { text: '> STATUS: FOUNDATION COMPLETE', delay: 1.5 },
  { text: '> WHERE CODE MEETS CURIOSITY', delay: 1.8, highlight: true },
];

const milestones = [
  { 
    year: '2015', 
    title: 'First Line of Code', 
    description: 'The journey began with curiosity',
    details: 'Started with Python, building simple calculators and games. The moment I saw "Hello, World!" appear on screen, I knew I had found my calling.',
    achievement: 'Built first text-based adventure game'
  },
  { 
    year: '2017', 
    title: 'Computer Science Foundations', 
    description: 'Formal foundations laid',
    details: 'Dove deep into algorithms, data structures, and computational thinking. Discovered the beauty of elegant solutions to complex problems.',
    achievement: 'Graduated with honors in Computer Science'
  },
  { 
    year: '2019', 
    title: 'First Real Project', 
    description: 'From theory to practice',
    details: 'Built a full-stack web application for local businesses. Learned the difference between academic coding and real-world software development.',
    achievement: 'Deployed first production application'
  },
  {
    year: '2021',
    title: 'Open Source Contributor',
    description: 'Giving back to the community',
    details: 'Started contributing to major open source projects. Realized the power of collaborative development and shared knowledge.',
    achievement: 'First major pull request accepted'
  }
];

const techStack = [
  { name: 'Python', level: 95, description: 'Data science, AI/ML, backend development' },
  { name: 'JavaScript/TypeScript', level: 92, description: 'Full-stack web development, Node.js' },
  { name: 'React & Next.js', level: 90, description: 'Modern frontend frameworks and SSR' },
  { name: 'Node.js & Express', level: 88, description: 'Server-side JavaScript and APIs' },
  { name: 'SQL & NoSQL', level: 85, description: 'PostgreSQL, MongoDB, Redis' },
  { name: 'Cloud & DevOps', level: 82, description: 'AWS, Docker, Kubernetes, CI/CD' },
  { name: 'Go & Rust', level: 75, description: 'Systems programming and performance' },
  { name: 'GraphQL & REST', level: 88, description: 'API design and implementation' },
];

const concepts = [
  { 
    icon: '⚙️', 
    title: 'Algorithms', 
    desc: 'Efficient problem-solving patterns',
    details: 'From sorting and searching to dynamic programming and graph algorithms'
  },
  { 
    icon: '🏗️', 
    title: 'Architecture', 
    desc: 'Scalable system design',
    details: 'Microservices, event-driven systems, and distributed architectures'
  },
  { 
    icon: '🔄', 
    title: 'Data Structures', 
    desc: 'Optimal data organization',
    details: 'Trees, graphs, hash tables, and custom data structures for specific use cases'
  },
  { 
    icon: '🔒', 
    title: 'Security', 
    desc: 'Protection by design',
    details: 'Authentication, authorization, encryption, and secure coding practices'
  },
  {
    icon: '⚡',
    title: 'Performance',
    desc: 'Speed and efficiency',
    details: 'Optimization techniques, caching strategies, and performance monitoring'
  },
  {
    icon: '🧪',
    title: 'Testing',
    desc: 'Quality assurance',
    details: 'Unit testing, integration testing, TDD, and automated testing pipelines'
  }
];

const achievements = [
  {
    title: 'Algorithmic Excellence',
    description: 'Solved 500+ coding challenges across multiple platforms',
    metric: '500+',
    icon: '🏆'
  },
  {
    title: 'System Design',
    description: 'Architected scalable systems handling millions of requests',
    metric: '1M+',
    icon: '🏗️'
  },
  {
    title: 'Code Quality',
    description: 'Maintained 95%+ test coverage across all projects',
    metric: '95%',
    icon: '✅'
  }
];

export default function MachineEra() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [activeLines, setActiveLines] = useState<number[]>([]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCursorVisible(v => !v);
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[300vh] flex flex-col items-center justify-start overflow-hidden era-machine scanlines pt-24 pb-20">
      {/* Enhanced animated grid background */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--machine-cyan) / 0.6) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--machine-cyan) / 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Enhanced glow orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-machine-cyan/8 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-machine-green/6 blur-[100px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Enhanced punch card decoration */}
      <motion.div 
        className="absolute left-4 md:left-10 top-1/4 w-32 md:w-48 h-56 md:h-72 opacity-20"
        initial={{ opacity: 0, x: -80, rotate: -5 }}
        whileInView={{ opacity: 0.2, x: 0, rotate: -5 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-machine-black/20 border border-machine-cyan/30 rounded-lg p-4">
          <div className="grid grid-cols-8 gap-1">
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.div
                key={i}
                className={`w-1.5 md:w-2 h-2.5 md:h-3 rounded-sm ${
                  Math.random() > 0.6 ? 'bg-machine-cyan' : 'bg-transparent border border-machine-cyan/20'
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.005 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Header */}
      <div className="relative z-10 w-full max-w-5xl px-4 md:px-6 mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-machine-cyan/70 uppercase mb-10 text-center"
        >
          Act II — The Machine
        </motion.p>
        
        {/* Enhanced terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-machine-black/95 border border-machine-cyan/30 rounded-2xl overflow-hidden shadow-2xl mb-12"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-3 px-6 py-4 bg-machine-cyan/8 border-b border-machine-cyan/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-machine-amber/90" />
              <div className="w-3 h-3 rounded-full bg-machine-green/80" />
              <div className="w-3 h-3 rounded-full bg-machine-cyan/60" />
            </div>
            <span className="ml-4 font-mono text-xs text-machine-cyan/60 tracking-wider">
              TERMINAL v2.0 — Building the Foundation
            </span>
          </div>
          
          {/* Terminal content */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base">
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: line.delay }}
                viewport={{ once: true }}
                className={`mb-3 ${
                  line.highlight 
                    ? 'text-phosphor text-lg md:text-xl font-medium mt-8' 
                    : 'text-machine-cyan/80'
                }`}
              >
                {line.text}
              </motion.div>
            ))}
            <span className={`inline-block w-3 h-6 bg-machine-cyan ml-1 transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-center text-foreground mb-6"
        >
          Building the <span className="text-phosphor font-normal">foundation</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-lg text-machine-cyan/70 font-light max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Mastering the fundamentals—systems programming, computational thinking, 
          and the art of turning logic into reality. Every algorithm learned, 
          every data structure mastered, building toward something greater.
        </motion.p>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-machine-cyan/5 border border-machine-cyan/20 rounded-xl"
            >
              <span className="text-3xl mb-3 block">{achievement.icon}</span>
              <div className="text-2xl font-display font-bold text-machine-cyan mb-2">
                {achievement.metric}
              </div>
              <h4 className="font-mono text-sm text-machine-cyan font-medium mb-2">
                {achievement.title}
              </h4>
              <p className="text-xs text-machine-cyan/60">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Origin Story Timeline */}
      <div className="relative z-10 w-full max-w-6xl px-6 mb-20">
        <motion.h3
          initial={{ opacity: 0, letterSpacing: '0em' }}
          whileInView={{ 
            opacity: 1, 
            letterSpacing: '0.3em',
            transition: {
              duration: 1,
              ease: easings.easeOutCubic
            }
          }}
          viewport={{ once: true }}
          className="text-center font-mono text-sm tracking-[0.3em] text-machine-cyan/50 uppercase mb-16"
        >
          The Origin Story
        </motion.h3>
        
        <div className="relative">
          {/* Enhanced timeline line with animated gradient */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-machine-cyan/40 via-machine-green/30 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: easings.easeOutCubic }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
          />
          
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.2,
                ease: easings.easeOutCubic
              }}
              viewport={{ once: true }}
              className={`relative flex items-start gap-8 mb-16 ${
                i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <motion.div 
                className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}
                variants={cardHover}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="bg-machine-cyan/5 border border-machine-cyan/20 rounded-xl p-6 hover:border-machine-cyan/40 transition-colors cursor-pointer">
                  <motion.span 
                    className="font-mono text-sm text-machine-cyan font-bold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {milestone.year}
                  </motion.span>
                  <motion.h4 
                    className="text-xl md:text-2xl font-display font-medium text-foreground mt-2 mb-3"
                    whileHover={{ x: i % 2 === 0 ? -5 : 5 }}
                  >
                    {milestone.title}
                  </motion.h4>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {milestone.details}
                  </p>
                  <motion.div 
                    className="inline-flex items-center gap-2 px-3 py-1 bg-machine-cyan/10 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-machine-cyan rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs font-mono text-machine-cyan/80">
                      {milestone.achievement}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Enhanced center dot with ripple effect */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div 
                  className="w-6 h-6 rounded-full bg-machine-cyan shadow-[0_0_30px_hsl(var(--machine-cyan)_/_0.6)] flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-full bg-machine-cyan/30"
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
                {/* Additional ripple layers */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-machine-cyan/20"
                  animate={{ scale: [1, 3, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 + 1 }}
                />
              </div>
              
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Core Concepts Grid */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 mb-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.3em] text-machine-cyan/50 uppercase mb-12 text-center"
        >
          Core Engineering Principles
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {concepts.map((concept, i) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-machine-cyan/5 border border-machine-cyan/20 rounded-xl p-6 hover:border-machine-cyan/40 hover:bg-machine-cyan/8 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{concept.icon}</span>
              <h4 className="font-mono text-base text-machine-cyan font-medium mb-2">
                {concept.title}
              </h4>
              <p className="text-sm text-machine-cyan/60 mb-3">
                {concept.desc}
              </p>
              <p className="text-xs text-machine-cyan/40 group-hover:text-machine-cyan/60 transition-colors">
                {concept.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Tech Stack */}
      <div className="relative z-10 w-full max-w-4xl px-4 md:px-6 mb-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.3em] text-machine-cyan/50 uppercase mb-12 text-center"
        >
          Technical Arsenal
        </motion.h3>
        
        <div className="space-y-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="font-mono text-base text-machine-cyan font-medium">
                    {tech.name}
                  </span>
                  <p className="text-xs text-machine-cyan/50 mt-1">
                    {tech.description}
                  </p>
                </div>
                <span className="font-mono text-sm text-machine-cyan/70 font-bold">
                  {tech.level}%
                </span>
              </div>
              <div className="h-3 bg-machine-cyan/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-machine-cyan via-machine-green to-machine-phosphor rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1.5, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Code Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.3em] text-machine-cyan/50 uppercase mb-8"
        >
          Code Philosophy
        </motion.h3>
        
        <div className="bg-machine-black/60 border border-machine-cyan/30 rounded-2xl p-8 md:p-12">
          <pre className="font-mono text-sm md:text-base text-machine-cyan/90 text-left overflow-x-auto leading-relaxed">
{`class Engineer {
  constructor() {
    this.principles = {
      clean: true,
      efficient: true,
      scalable: true,
      documented: true,
      tested: true,
      maintainable: true
    };
    
    this.mindset = "Always learning, always improving";
  }
  
  solve(problem) {
    const solution = this.analyze(problem)
      .design()
      .implement()
      .test()
      .optimize();
      
    return solution.withDocumentation();
  }
  
  buildSomethingGreat() {
    return this.solve(worldProblems);
  }
}`}
          </pre>
          
          <div className="mt-8 text-sm text-machine-cyan/60 italic">
            "Code is poetry written for machines to execute and humans to understand."
          </div>
        </div>
      </motion.div>
    </section>
  );
}
