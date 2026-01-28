import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import BootSequence from '@/components/BootSequence';
import EraNavigation from '@/components/EraNavigation';
import SparkEra from '@/components/eras/SparkEra';
import MachineEra from '@/components/eras/MachineEra';
import MindEra from '@/components/eras/MindEra';
import ArchitectEra from '@/components/eras/ArchitectEra';
import StoryTransition from '@/components/StoryTransition';
import Footer from '@/components/Footer';

// 4-Act Story Structure: From idea to architect
const ERAS = ['Spark', 'Machine', 'Mind', 'Architect'];

const STORY_TRANSITIONS = [
  { from: 'The Spark', to: 'The Machine', text: 'From abstract thought emerged the desire to compute...' },
  { from: 'The Machine', to: 'The Mind', text: 'From silicon and circuits, intelligence began to emerge...' },
  { from: 'The Mind', to: 'The Architect', text: 'And from this convergence, a builder was forged...' },
];

export default function Index() {
  const [showBoot, setShowBoot] = useState(true);
  const [currentEra, setCurrentEra] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Refs for specific Era sections for precise tracking
  const sparkRef = useRef(null);
  const machineRef = useRef(null);
  const mindRef = useRef(null);
  const architectRef = useRef(null);

  // Track visibility of each era (trigger when 30% visible)
  const isSparkInView = useInView(sparkRef, { amount: 0.3 });
  const isMachineInView = useInView(machineRef, { amount: 0.3 });
  const isMindInView = useInView(mindRef, { amount: 0.3 });
  const isArchitectInView = useInView(architectRef, { amount: 0.3 });

  // Sync currentEra state with visible section
  useEffect(() => {
    if (showBoot) return;
    
    // Check in reverse order so later sections take precedence if multiple are visible
    if (isArchitectInView) setCurrentEra(3);
    else if (isMindInView) setCurrentEra(2);
    else if (isMachineInView) setCurrentEra(1);
    else if (isSparkInView) setCurrentEra(0);
  }, [isSparkInView, isMachineInView, isMindInView, isArchitectInView, showBoot]);
  
  const handleEraClick = useCallback((index: number) => {
    const eraIds = ['era-spark', 'era-machine', 'era-mind', 'era-architect'];
    const element = document.getElementById(eraIds[index]);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);
  
  const handleBootComplete = useCallback(() => {
    setShowBoot(false);
    document.body.style.overflow = 'unset';
  }, []);
  
  useEffect(() => {
    if (showBoot) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showBoot]);
  
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <AnimatePresence>
        {showBoot && <BootSequence onComplete={handleBootComplete} />}
      </AnimatePresence>

      <div 
        ref={containerRef} 
        className={`relative bg-background ${showBoot ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
      >
        {/* Progress bar - distinct era colors */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-spark-glow via-machine-phosphor via-ai-neural to-rajai-gold z-50 origin-left"
          style={{ scaleX }}
        />
        
        {/* Era navigation */}
        <EraNavigation 
          currentEra={currentEra} 
          eras={ERAS} 
          onEraClick={handleEraClick}
        />
        
        {/* Story content with transitions */}
        <div className="scroll-snap-container">
          {/* Act I: The Spark */}
          <section id="era-spark" ref={sparkRef}>
            <SparkEra />
          </section>
          <StoryTransition 
            fromEra={STORY_TRANSITIONS[0].from}
            toEra={STORY_TRANSITIONS[0].to}
            transitionText={STORY_TRANSITIONS[0].text}
            className="story-transition bg-gradient-to-b from-spark-ember/5 via-transparent to-machine-phosphor/8"
          />
          
          {/* Act II: The Machine */}
          <section id="era-machine" ref={machineRef}>
            <MachineEra />
          </section>
          <StoryTransition 
            fromEra={STORY_TRANSITIONS[1].from}
            toEra={STORY_TRANSITIONS[1].to}
            transitionText={STORY_TRANSITIONS[1].text}
            className="story-transition bg-gradient-to-b from-machine-dim/5 via-transparent to-ai-neural/8"
          />
          
          {/* Act III: The Mind */}
          <section id="era-mind" ref={mindRef}>
            <MindEra />
          </section>
          <StoryTransition 
            fromEra={STORY_TRANSITIONS[2].from}
            toEra={STORY_TRANSITIONS[2].to}
            transitionText={STORY_TRANSITIONS[2].text}
            className="story-transition bg-gradient-to-b from-ai-synapse/5 via-transparent to-rajai-gold/8"
          />
          
          {/* Act IV: The Architect (Raj Shah) */}
          <section id="era-architect" ref={architectRef}>
            <ArchitectEra />
          </section>
        </div>
        
        <Footer onEraClick={handleEraClick} />
      </div>
    </>
  );
}
