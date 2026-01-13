import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  cardHover, 
  buttonPress, 
  floatingElement,
  sparkGlow,
  textShimmer,
  morphingBlob,
  rippleEffect,
  easings
} from '@/lib/animations';
import { 
  useMagneticHover, 
  useRipple, 
  useTilt, 
  useIntersectionObserver 
} from '@/lib/micro-interactions';

export default function AnimationShowcase() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const { ripples, addRipple } = useRipple();
  const magneticCard = useMagneticHover(0.1);
  const tiltCard = useTilt(10);
  const { ref: showcaseRef, isIntersecting } = useIntersectionObserver(0.2);

  const demos = [
    {
      id: 'magnetic',
      title: 'Magnetic Hover',
      description: 'Elements that follow your cursor with spring physics',
      component: (
        <motion.div
          ref={magneticCard.ref}
          style={{ x: magneticCard.x, y: magneticCard.y }}
          className="w-24 h-24 bg-primary/20 rounded-xl flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          🧲
        </motion.div>
      )
    },
    {
      id: 'tilt',
      title: '3D Tilt Effect',
      description: 'Cards that tilt based on mouse position',
      component: (
        <motion.div
          ref={tiltCard.ref}
          style={{ rotateX: tiltCard.rotateX, rotateY: tiltCard.rotateY }}
          className="w-24 h-24 bg-accent/20 rounded-xl flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          📱
        </motion.div>
      )
    },
    {
      id: 'ripple',
      title: 'Ripple Effect',
      description: 'Click to create expanding ripples',
      component: (
        <motion.div
          className="w-24 h-24 bg-secondary/20 rounded-xl flex items-center justify-center cursor-pointer relative overflow-hidden"
          onClick={addRipple}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence>
            {ripples.map((ripple) => (
              <motion.div
                key={ripple.id}
                className="absolute w-4 h-4 bg-primary/30 rounded-full"
                style={{
                  left: ripple.x - 8,
                  top: ripple.y - 8,
                }}
                variants={rippleEffect}
                initial="initial"
                animate="animate"
                exit="initial"
              />
            ))}
          </AnimatePresence>
          💧
        </motion.div>
      )
    },
    {
      id: 'morph',
      title: 'Morphing Shape',
      description: 'Organic shape transformations',
      component: (
        <motion.div
          variants={morphingBlob}
          initial="initial"
          animate="animate"
          className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center cursor-pointer"
        >
          🌊
        </motion.div>
      )
    },
    {
      id: 'glow',
      title: 'Spark Glow',
      description: 'Pulsing glow effects',
      component: (
        <motion.div
          variants={sparkGlow}
          initial="initial"
          animate="animate"
          className="w-24 h-24 bg-spark-glow/20 rounded-xl flex items-center justify-center cursor-pointer"
          style={{ filter: 'brightness(1.2)' }}
        >
          ✨
        </motion.div>
      )
    },
    {
      id: 'float',
      title: 'Floating Animation',
      description: 'Gentle floating motion',
      component: (
        <motion.div
          variants={floatingElement}
          initial="initial"
          animate="animate"
          className="w-24 h-24 bg-muted/20 rounded-xl flex items-center justify-center cursor-pointer"
        >
          🎈
        </motion.div>
      )
    }
  ];

  return (
    <motion.div
      ref={showcaseRef}
      className="max-w-4xl mx-auto p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: easings.easeOutCubic }}
    >
      <motion.h2 
        className="text-3xl font-display font-light text-center mb-4"
        variants={textShimmer}
        animate="animate"
      >
        Animation Showcase
      </motion.h2>
      
      <motion.p 
        className="text-muted-foreground text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Interactive micro-animations and effects
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {demos.map((demo, index) => (
          <motion.div
            key={demo.id}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.6,
              ease: easings.easeOutCubic
            }}
            onHoverStart={() => setActiveDemo(demo.id)}
            onHoverEnd={() => setActiveDemo(null)}
          >
            <motion.div
              className="mb-4 flex justify-center"
              variants={cardHover}
              whileHover="hover"
              whileTap="tap"
            >
              {demo.component}
            </motion.div>
            
            <motion.h3 
              className="font-medium text-foreground mb-2"
              animate={{ 
                color: activeDemo === demo.id ? 'hsl(var(--primary))' : 'hsl(var(--foreground))'
              }}
            >
              {demo.title}
            </motion.h3>
            
            <motion.p 
              className="text-sm text-muted-foreground"
              animate={{ 
                opacity: activeDemo === demo.id ? 1 : 0.7
              }}
            >
              {demo.description}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Interactive buttons showcase */}
      <motion.div 
        className="mt-16 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          variants={buttonPress}
          whileHover="hover"
          whileTap="tap"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
        >
          Primary Button
        </motion.button>
        
        <motion.button
          className="px-6 py-3 border border-border rounded-lg font-medium hover-lift"
          whileHover={{ 
            borderColor: 'hsl(var(--primary))',
            color: 'hsl(var(--primary))'
          }}
        >
          Secondary Button
        </motion.button>
        
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium elastic-scale"
        >
          Gradient Button
        </motion.button>
      </motion.div>

      {/* Text effects showcase */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.h3 
          className="text-2xl font-display mb-4 text-shimmer"
        >
          Shimmer Text Effect
        </motion.h3>
        
        <motion.p 
          className="text-lg gradient-text font-medium"
        >
          Gradient Text Animation
        </motion.p>
      </motion.div>
    </motion.div>
  );
}