import { useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Magnetic hover effect hook
export const useMagneticHover = (strength = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      
      x.set(deltaX);
      y.set(deltaY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y, strength]);

  return { ref, x: springX, y: springY };
};

// Parallax scroll effect hook
export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

// Mouse position tracking hook
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

// Cursor follower hook
export const useCursorFollower = (delay = 0.1) => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const updateCursor = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }, delay * 1000);
    };

    window.addEventListener('mousemove', updateCursor);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      clearTimeout(timeoutId);
    };
  }, [cursorX, cursorY, delay]);

  return { x: springX, y: springY };
};

// Intersection observer hook for animations
export const useIntersectionObserver = (
  threshold = 0.1,
  rootMargin = '0px'
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isIntersecting };
};

// Ripple effect hook
export const useRipple = () => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const addRipple = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 600);
  };

  return { ripples, addRipple };
};

// Tilt effect hook
export const useTilt = (maxTilt = 15) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      
      x.set(deltaX);
      y.set(deltaY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y]);

  return { ref, rotateX, rotateY };
};

// Scroll velocity hook
export const useScrollVelocity = () => {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTimestamp = useRef(0);

  useEffect(() => {
    const updateVelocity = () => {
      const currentScrollY = window.scrollY;
      const currentTimestamp = Date.now();
      
      const deltaY = currentScrollY - lastScrollY.current;
      const deltaTime = currentTimestamp - lastTimestamp.current;
      
      if (deltaTime > 0) {
        const currentVelocity = Math.abs(deltaY / deltaTime);
        setVelocity(currentVelocity);
      }
      
      lastScrollY.current = currentScrollY;
      lastTimestamp.current = currentTimestamp;
    };

    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(updateVelocity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return velocity;
};

// Gesture recognition hook
export const useGesture = () => {
  const [gesture, setGesture] = useState<'swipeLeft' | 'swipeRight' | 'swipeUp' | 'swipeDown' | null>(null);
  const startPos = useRef({ x: 0, y: 0 });
  const threshold = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    startPos.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - startPos.current.x;
    const deltaY = touch.clientY - startPos.current.y;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > threshold) {
        setGesture(deltaX > 0 ? 'swipeRight' : 'swipeLeft');
      }
    } else {
      if (Math.abs(deltaY) > threshold) {
        setGesture(deltaY > 0 ? 'swipeDown' : 'swipeUp');
      }
    }

    setTimeout(() => setGesture(null), 100);
  };

  return { gesture, handleTouchStart, handleTouchEnd };
};

// Elastic drag hook
export const useElasticDrag = (bounds = { left: -100, right: 100, top: -100, bottom: 100 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleDragEnd = () => {
    x.set(0);
    y.set(0);
  };

  return {
    x: springX,
    y: springY,
    dragConstraints: bounds,
    dragElastic: 0.2,
    onDragEnd: handleDragEnd
  };
};

// Morphing shape hook
export const useMorphingShape = (shapes: string[], duration = 3000) => {
  const [currentShape, setCurrentShape] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape(prev => (prev + 1) % shapes.length);
    }, duration);

    return () => clearInterval(interval);
  }, [shapes.length, duration]);

  return shapes[currentShape];
};

// Audio reactive hook (for future audio integration)
export const useAudioReactive = (audioContext?: AudioContext) => {
  const [amplitude, setAmplitude] = useState(0);
  const [frequency, setFrequency] = useState(0);

  useEffect(() => {
    if (!audioContext) return;

    // Audio analysis implementation would go here
    // This is a placeholder for future audio-reactive features
    
    // Simulate some audio data for demonstration
    const interval = setInterval(() => {
      setAmplitude(Math.random() * 100);
      setFrequency(Math.random() * 1000);
    }, 100);
    
    return () => {
      clearInterval(interval);
    };
  }, [audioContext]);

  return { amplitude, frequency };
};

// Performance monitoring for animations
export const useAnimationPerformance = () => {
  const [fps, setFps] = useState(60);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    let rafId: number;

    const measureFPS = () => {
      frameCount.current++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime.current >= 1000) {
        setFps(frameCount.current);
        frameCount.current = 0;
        lastTime.current = currentTime;
      }
      
      rafId = requestAnimationFrame(measureFPS);
    };

    rafId = requestAnimationFrame(measureFPS);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return { fps };
};

// Utility functions for micro-interactions
export const createSpringTransition = (stiffness = 300, damping = 30) => ({
  type: "spring" as const,
  stiffness,
  damping
});

export const createEaseTransition = (duration = 0.3, ease = [0.25, 0.1, 0.25, 1]) => ({
  duration,
  ease
});

export const debounceAnimation = (callback: () => void, delay = 100) => {
  let timeoutId: NodeJS.Timeout;
  
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
};

export const throttleAnimation = (callback: () => void, limit = 16) => {
  let inThrottle: boolean;
  
  return () => {
    if (!inThrottle) {
      callback();
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};