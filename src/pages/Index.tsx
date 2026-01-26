import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import BootSequence from '@/components/BootSequence';
import EraNavigation from '@/components/EraNavigation';
import SparkEra from '@/components/eras/SparkEra';
import MachineEra from '@/components/eras/MachineEra';
import AIEra from '@/components/eras/AIEra';
import RajaiEra from '@/components/eras/RajaiEra';
import StoryTransition from '@/components/StoryTransition';
import Footer from '@/components/Footer';

// 4-Act Story Structure: From idea to architect
const ERAS = ['Spark', 'Machine', 'AI', 'Rajai'];

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
  
  useEffect(() => {
    if (showBoot) return;
    
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Account for transitions between eras (7 total sections)
      const totalSections = ERAS.length + STORY_TRANSITIONS.length;
      const sectionIndex = Math.floor(latest * totalSections);
      // Map section to era (0,1 -> 0, 2,3 -> 1, 4,5 -> 2, 6 -> 3)
      const eraIndex = Math.min(Math.floor(sectionIndex / 2), ERAS.length - 1);
      setCurrentEra(eraIndex);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, showBoot]);
  
  const handleEraClick = useCallback((index: number) => {
    const sections = document.querySelectorAll('section, .story-transition');
    const targetSection = index * 2; // Account for transitions
    sections[targetSection]?.scrollIntoView({ behavior: 'smooth' });
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
          <SparkEra />
          <StoryTransition 
            fromEra={STORY_TRANSITIONS[0].from}
            toEra={STORY_TRANSITIONS[0].to}
            transitionText={STORY_TRANSITIONS[0].text}
            className="story-transition bg-gradient-to-b from-spark-ember/5 via-transparent to-machine-phosphor/8"
          />
          
          {/* Act II: The Machine */}
          <MachineEra />
          <StoryTransition 
            fromEra={STORY_TRANSITIONS[1].from}
            toEra={STORY_TRANSITIONS[1].to}
            transitionText={STORY_TRANSITIONS[1].text}
            className="story-transition bg-gradient-to-b from-machine-dim/5 via-transparent to-ai-neural/8"
          />
          
          {/* Act III: The Mind (AI) */}
          <AIEra />
          <StoryTransition 
            fromEra={STORY_TRANSITIONS[2].from}
            toEra={STORY_TRANSITIONS[2].to}
            transitionText={STORY_TRANSITIONS[2].text}
            className="story-transition bg-gradient-to-b from-ai-synapse/5 via-transparent to-rajai-gold/8"
          />
          
          {/* Act IV: The Architect (Raj Shah) */}
          <RajaiEra />
        </div>
        
        <Footer onEraClick={handleEraClick} />
      </div>
    </>
  );
}
