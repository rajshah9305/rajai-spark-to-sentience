import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import BootSequence from '@/components/BootSequence';
import EraNavigation from '@/components/EraNavigation';
import SparkEra from '@/components/eras/SparkEra';
import MachineEra from '@/components/eras/MachineEra';
import HumanEra from '@/components/eras/HumanEra';
import AIEra from '@/components/eras/AIEra';
import RajaiEra from '@/components/eras/RajaiEra';

const ERAS = ['Spark', 'Machine', 'Human', 'AI', 'Rajai'];

export default function Index() {
  const [showBoot, setShowBoot] = useState(true);
  const [currentEra, setCurrentEra] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Derive current era from scroll position
  useEffect(() => {
    if (showBoot) return;
    
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const eraIndex = Math.min(
        Math.floor(latest * ERAS.length),
        ERAS.length - 1
      );
      setCurrentEra(eraIndex);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, showBoot]);
  
  const handleEraClick = useCallback((index: number) => {
    const sections = document.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  }, []);
  
  const handleBootComplete = useCallback(() => {
    setShowBoot(false);
    // Enable scrolling after boot
    document.body.style.overflow = 'unset';
  }, []);
  
  // Disable scrolling during boot
  useEffect(() => {
    if (showBoot) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showBoot]);
  
  // Progress bar
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Boot Sequence */}
      <AnimatePresence>
        {showBoot && <BootSequence onComplete={handleBootComplete} />}
      </AnimatePresence>

      <div 
        ref={containerRef} 
        className={`relative bg-background ${showBoot ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
      >
        {/* Progress bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-ai-neural to-ai-synapse z-50 origin-left"
          style={{ scaleX }}
        />
        
        {/* Era navigation */}
        <EraNavigation 
          currentEra={currentEra} 
          eras={ERAS} 
          onEraClick={handleEraClick}
        />
        
        {/* Era sections with scroll-snap */}
        <div className="scroll-snap-container">
          <SparkEra />
          <MachineEra />
          <HumanEra />
          <AIEra />
          <RajaiEra />
        </div>
      </div>
    </>
  );
}
