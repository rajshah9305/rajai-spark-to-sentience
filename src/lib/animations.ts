import { Variants, Transition } from 'framer-motion';

// Enhanced spring configurations
export const springConfigs = {
  gentle: { type: "spring", stiffness: 120, damping: 14 },
  bouncy: { type: "spring", stiffness: 400, damping: 17 },
  snappy: { type: "spring", stiffness: 500, damping: 30 },
  wobbly: { type: "spring", stiffness: 180, damping: 12 },
  stiff: { type: "spring", stiffness: 1000, damping: 100 },
} as const;

// Enhanced easing curves
export const easings = {
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
} as const;

// Reusable animation variants for consistency
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 }
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 }
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 40 }
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

export const slideInUp: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 }
};

// Enhanced micro-interactions
export const magneticHover: Variants = {
  initial: { x: 0, y: 0 },
  hover: { 
    x: 0, 
    y: -2,
    transition: springConfigs.gentle
  }
};

export const cardHover: Variants = {
  initial: { 
    scale: 1, 
    y: 0,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  },
  hover: { 
    scale: 1.02, 
    y: -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    transition: springConfigs.gentle
  },
  tap: { 
    scale: 0.98,
    transition: springConfigs.snappy
  }
};

export const buttonPress: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: springConfigs.bouncy
  },
  tap: { 
    scale: 0.95,
    transition: springConfigs.snappy
  }
};

export const iconBounce: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: 5,
    transition: springConfigs.bouncy
  },
  tap: { 
    scale: 0.9, 
    rotate: -5,
    transition: springConfigs.snappy
  }
};

export const textShimmer: Variants = {
  initial: { 
    backgroundPosition: '-200% 0' 
  },
  animate: {
    backgroundPosition: '200% 0',
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

export const morphingBlob: Variants = {
  initial: { 
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' 
  },
  animate: {
    borderRadius: [
      '60% 40% 30% 70% / 60% 30% 70% 40%',
      '30% 60% 70% 40% / 50% 60% 30% 60%',
      '40% 60% 60% 40% / 60% 40% 60% 40%',
      '60% 40% 30% 70% / 60% 30% 70% 40%'
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const floatingElement: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const rotatingGlow: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

// Stagger animations for lists
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export const staggerScale: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: springConfigs.bouncy
  }
};

// Advanced hover animations
export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

export const hoverGlow: Variants = {
  initial: { 
    boxShadow: '0 0 0px rgba(0,0,0,0)' 
  },
  hover: { 
    boxShadow: '0 0 30px hsl(var(--primary) / 0.3)' 
  }
};

export const hoverLift: Variants = {
  initial: { 
    y: 0,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  },
  hover: { 
    y: -4,
    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
    transition: springConfigs.gentle
  }
};

export const hoverTilt: Variants = {
  initial: { rotateX: 0, rotateY: 0 },
  hover: { 
    rotateX: 5, 
    rotateY: 5,
    transition: springConfigs.gentle
  }
};

// Text animations
export const typewriter = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    }
  }
};

export const typewriterChar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const textReveal: Variants = {
  initial: { 
    y: '100%',
    opacity: 0
  },
  animate: { 
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easings.easeOutCubic
    }
  }
};

export const letterSpacing: Variants = {
  initial: { letterSpacing: '0em' },
  animate: { 
    letterSpacing: '0.1em',
    transition: {
      duration: 0.6,
      ease: easings.easeOutCubic
    }
  }
};

// Loading animations
export const pulse: Variants = {
  initial: { opacity: 0.6 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  }
};

export const spin: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

export const breathe: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' }
};

export const slideTransition: Variants = {
  initial: { x: '100%' },
  animate: { 
    x: '0%',
    transition: {
      duration: 0.5,
      ease: easings.easeOutCubic
    }
  },
  exit: { 
    x: '-100%',
    transition: {
      duration: 0.5,
      ease: easings.easeInOutCubic
    }
  }
};

// Era-specific animations
export const sparkGlow: Variants = {
  initial: { 
    opacity: 0.6,
    filter: 'brightness(1) saturate(1)'
  },
  animate: {
    opacity: [0.6, 1, 0.6],
    filter: ['brightness(1) saturate(1)', 'brightness(1.2) saturate(1.5)', 'brightness(1) saturate(1)'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const neuralPulse: Variants = {
  initial: { 
    scale: 1,
    opacity: 0.7
  },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const machineFlicker: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0.8, 1, 0.9, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 3,
      ease: 'easeInOut'
    }
  }
};

export const humanWarmth: Variants = {
  initial: { 
    filter: 'hue-rotate(0deg) brightness(1)'
  },
  animate: {
    filter: [
      'hue-rotate(0deg) brightness(1)',
      'hue-rotate(5deg) brightness(1.05)',
      'hue-rotate(0deg) brightness(1)'
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Interactive micro-animations
export const rippleEffect = {
  initial: { scale: 0, opacity: 0.8 },
  animate: { 
    scale: 4, 
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOutCubic
    }
  }
};

export const magneticPull: Variants = {
  initial: { x: 0, y: 0 },
  hover: (custom: { x: number; y: number }) => ({
    x: custom.x * 0.3,
    y: custom.y * 0.3,
    transition: springConfigs.gentle
  })
};

export const parallaxScroll: Variants = {
  initial: { y: 0 },
  animate: (custom: number) => ({
    y: custom,
    transition: {
      duration: 0,
      ease: 'linear'
    }
  })
};

// Utility functions
export const createStaggerDelay = (index: number, baseDelay = 0.1) => ({
  delay: baseDelay * index
});

export const createViewportAnimation = (
  variants: Variants,
  options: { once?: boolean; margin?: string; threshold?: number } = {}
) => ({
  initial: 'initial',
  whileInView: 'animate',
  viewport: { 
    once: options.once ?? true, 
    margin: options.margin ?? '0px 0px -100px 0px',
    amount: options.threshold ?? 0.1
  },
  variants,
  transition: { duration: 0.6, ease: easings.easeOutCubic }
});

export const createHoverAnimation = (
  scale = 1.05,
  duration = 0.2
) => ({
  whileHover: { scale },
  whileTap: { scale: scale * 0.95 },
  transition: { duration, ease: easings.easeOutCubic }
});

// Performance-optimized animation settings
export const reducedMotionSettings = {
  transition: { duration: 0.01 },
  animate: { opacity: 1 },
  initial: { opacity: 0 }
};

// Check for reduced motion preference
export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Adaptive animation function
export const adaptiveAnimation = (normalAnimation: any, reducedAnimation = reducedMotionSettings) => {
  return shouldReduceMotion() ? reducedAnimation : normalAnimation;
};

// Animation orchestration
export const sequentialAnimation = (animations: any[], delay = 0.2) => ({
  animate: {
    transition: {
      staggerChildren: delay,
      delayChildren: 0.1
    }
  }
});

export const cascadeAnimation = (count: number, baseDelay = 0.1) => 
  Array.from({ length: count }, (_, i) => ({
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * baseDelay,
        duration: 0.6,
        ease: easings.easeOutCubic
      }
    }
  }));

// Gesture-based animations
export const swipeAnimation: Variants = {
  initial: { x: 0 },
  swipeLeft: { 
    x: -100,
    transition: springConfigs.snappy
  },
  swipeRight: { 
    x: 100,
    transition: springConfigs.snappy
  }
};

export const dragConstraints = {
  top: -50,
  left: -50,
  right: 50,
  bottom: 50,
};

// Complex orchestrated animations
export const heroEntrance: Variants = {
  initial: { 
    opacity: 0, 
    y: 60, 
    scale: 0.95 
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 1.2,
      ease: easings.easeOutCubic,
      staggerChildren: 0.2
    }
  }
};

export const cardStack: Variants = {
  initial: { 
    opacity: 0, 
    y: 60, 
    rotateX: -15 
  },
  animate: (custom: number) => ({ 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.8,
      ease: easings.easeOutCubic
    }
  })
};