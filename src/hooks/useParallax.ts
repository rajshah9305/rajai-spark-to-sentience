import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxOptions {
  offset?: number;
  direction?: 'up' | 'down';
}

export function useParallax(options: ParallaxOptions = {}) {
  const { offset = 50, direction = 'up' } = options;
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [offset, -offset] : [-offset, offset]
  );
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  
  return { ref, y, opacity, scale, scrollYProgress };
}

export function useLayeredParallax() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Different speeds for layered parallax effect
  const layer1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const layer2 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const layer3 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  
  return { ref, layer1, layer2, layer3, scrollYProgress };
}
