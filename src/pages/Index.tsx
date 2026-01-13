import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import EraNavigation from '@/components/EraNavigation';
import SparkEra from '@/components/eras/SparkEra';
import MachineEra from '@/components/eras/MachineEra';
import HumanEra from '@/components/eras/HumanEra';
import AIEra from '@/components/eras/AIEra';
import RajaiEra from '@/components/eras/RajaiEra';

const ERAS = ['Spark', 'Machine', 'Human', 'AI', 'Rajai'];

export default function Index() {
  const [currentEra, setCurrentEra] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Derive current era from scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const eraIndex = Math.min(
        Math.floor(latest * ERAS.length),
        ERAS.length - 1
      );
      setCurrentEra(eraIndex);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  const handleEraClick = (index: number) => {
    const sections = document.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Progress bar
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative bg-background scrollbar-hide">
      {/* Revolutionary Portal Button */}
      <Link to="/singularity">
        <motion.div
          className="fixed top-8 right-8 z-50"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#CCFF00] to-[#FF4F00] text-black font-bold text-lg border-2 border-black shadow-[0_0_30px_#CCFF00]"
          >
            ENTER SINGULARITY
          </Button>
        </motion.div>
      </Link>
      
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Era navigation */}
      <EraNavigation 
        currentEra={currentEra} 
        eras={ERAS} 
        onEraClick={handleEraClick}
      />
      
      {/* Era sections */}
      <SparkEra />
      <MachineEra />
      <HumanEra />
      <AIEra />
      <RajaiEra />
    </div>
  );
}
