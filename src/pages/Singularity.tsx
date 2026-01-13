import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, Flame, Waves, Sparkles } from 'lucide-react';

export default function Singularity() {
  const [activeNode, setActiveNode] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 15 });
  
  const rotateX = useTransform(springY, [-500, 500], [15, -15]);
  const rotateY = useTransform(springX, [-500, 500], [-15, 15]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const nodes = [
    { 
      icon: Zap, 
      label: 'IGNITION', 
      color: 'from-[#CCFF00] to-[#FFD700]',
      glow: 'shadow-[0_0_80px_#CCFF00]',
      position: 'top-[15%] left-[20%]'
    },
    { 
      icon: Flame, 
      label: 'BURN', 
      color: 'from-[#FF4F00] to-[#FF8C00]',
      glow: 'shadow-[0_0_100px_#FF4F00]',
      position: 'top-[25%] right-[15%]'
    },
    { 
      icon: Waves, 
      label: 'FLOW', 
      color: 'from-[#003B46] to-[#07575B]',
      glow: 'shadow-[0_0_90px_#07575B]',
      position: 'bottom-[30%] left-[25%]'
    },
    { 
      icon: Sparkles, 
      label: 'SHIMMER', 
      color: 'from-[#C0C0C0] to-[#E8E8E8]',
      glow: 'shadow-[0_0_70px_#C0C0C0]',
      position: 'bottom-[20%] right-[20%]'
    },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-black"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(204, 255, 0, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255, 79, 0, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(0, 59, 70, 0.05) 0%, transparent 70%)
        `,
      }}
    >
      {/* Aggressive noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* REVOLUTIONARY BOTTOM NAVIGATION */}
      <motion.nav 
        className="fixed bottom-0 left-0 right-0 h-32 backdrop-blur-3xl z-50 border-t-4"
        style={{
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 100%)',
          borderImage: 'linear-gradient(90deg, #CCFF00, #FF4F00, #003B46, #C0C0C0) 1',
          transform: 'perspective(1000px) rotateX(-5deg)',
          transformOrigin: 'bottom',
        }}
      >
        <div className="flex items-center justify-around h-full px-8">
          {['VOID', 'CHAOS', 'ORDER', 'TRANSCEND'].map((item) => (
            <motion.button
              key={item}
              className="relative group"
              whileHover={{ scale: 1.3, rotate: 15 }}
              whileTap={{ scale: 0.8, rotate: -15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#CCFF00] to-[#FF4F00] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300" />
              <span className="relative text-2xl font-bold tracking-wider bg-gradient-to-r from-[#CCFF00] via-[#FF4F00] to-[#C0C0C0] bg-clip-text text-transparent">
                {item}
              </span>
              {/* Aggressive pulse on hover */}
              <motion.div
                className="absolute -inset-4 border-2 border-[#CCFF00] rounded-lg opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* 3D MORPHING CENTRAL CORE */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Outer ring with heavy blur */}
        <motion.div
          className="relative w-[600px] h-[600px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Multiple layered rings for depth */}
          {[0, 1, 2, 3].map((layer) => (
            <motion.div
              key={layer}
              className="absolute inset-0 rounded-full border-4"
              style={{
                borderImage: `linear-gradient(${layer * 90}deg, #CCFF00, #FF4F00, #003B46, #C0C0C0) 1`,
                transform: `translateZ(${layer * -50}px) scale(${1 - layer * 0.1})`,
                filter: `blur(${layer * 8}px)`,
                opacity: 0.6 - layer * 0.1,
              }}
              animate={{
                rotate: -360,
                scale: [1 - layer * 0.1, 1.1 - layer * 0.1, 1 - layer * 0.1],
              }}
              transition={{
                rotate: { duration: 20 - layer * 3, repeat: Infinity, ease: 'linear' },
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
          ))}
        </motion.div>

        {/* Floating nodes in 3D space */}
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            className={`absolute ${node.position} -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${i * 100}px)`,
            }}
            whileHover={{ scale: 2, z: 200 }}
            onHoverStart={() => setActiveNode(i)}
            animate={{
              y: [0, -30, 0],
              rotateY: [0, 360],
            }}
            transition={{
              y: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' },
              rotateY: { duration: 8 + i * 2, repeat: Infinity, ease: 'linear' },
            }}
          >
            <motion.div
              className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${node.color} ${node.glow} flex items-center justify-center`}
              animate={{
                boxShadow: activeNode === i 
                  ? [`0 0 80px ${node.color.split('-')[1].replace('[', '').replace(']', '')}`, `0 0 150px ${node.color.split('-')[1].replace('[', '').replace(']', '')}`, `0 0 80px ${node.color.split('-')[1].replace('[', '').replace(']', '')}`]
                  : [],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <node.icon className="w-16 h-16 text-black" strokeWidth={3} />
              
              {/* Aggressive ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-4"
                style={{ borderColor: node.color.split('-')[1].replace('[', '').replace(']', '') }}
                animate={{
                  scale: [1, 2.5],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            </motion.div>
            
            {/* Label with glitch effect */}
            <motion.div
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
              animate={{
                x: [-2, 2, -2],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <span className={`text-xl font-bold tracking-widest bg-gradient-to-r ${node.color} bg-clip-text text-transparent`}>
                {node.label}
              </span>
            </motion.div>
          </motion.div>
        ))}

        {/* Central pulsing core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, #CCFF00, #FF4F00, #003B46)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* DIAGONAL FLOATING SIDEBAR */}
      <motion.div
        className="fixed right-0 top-1/4 w-96 h-96 backdrop-blur-3xl border-l-4 border-b-4 z-40"
        style={{
          background: 'linear-gradient(135deg, rgba(204, 255, 0, 0.05), rgba(255, 79, 0, 0.05))',
          borderImage: 'linear-gradient(135deg, #CCFF00, #FF4F00) 1',
          transform: 'rotate(-15deg) translateX(80px)',
          boxShadow: '0 0 100px rgba(204, 255, 0, 0.3)',
        }}
        whileHover={{
          rotate: 0,
          translateX: 0,
          transition: { type: 'spring', stiffness: 100 },
        }}
      >
        <div className="p-8 space-y-6 transform rotate-15">
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-[#CCFF00] to-[#FF4F00] bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            SYSTEM STATUS
          </motion.h2>
          
          {['NEURAL', 'FUSION', 'QUANTUM'].map((stat, i) => (
            <motion.div
              key={stat}
              className="relative overflow-hidden rounded-lg border-2 border-[#003B46] p-4"
              whileHover={{ 
                scale: 1.1,
                borderColor: '#CCFF00',
                boxShadow: '0 0 40px #CCFF00',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#C0C0C0] font-bold">{stat}</span>
                <span className="text-[#CCFF00] font-mono">{Math.floor(Math.random() * 100)}%</span>
              </div>
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-[#003B46] to-[#CCFF00]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: Math.random() }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                style={{ transformOrigin: 'left' }}
              />
              
              {/* Scanning line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent opacity-30"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CHAOTIC FLOATING PARTICLES */}
      {Array.from({ length: 30 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: ['#CCFF00', '#FF4F00', '#003B46', '#C0C0C0'][index % 4],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
          }}
          animate={{
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
            scale: [1, 2, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* AGGRESSIVE CTA - TOP CENTER */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 z-50"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9, rotate: -5 }}
      >
        <Button
          size="lg"
          className="relative overflow-hidden px-12 py-6 text-2xl font-bold border-4 rounded-none"
          style={{
            background: 'linear-gradient(135deg, #000000, #1a1a1a)',
            borderImage: 'linear-gradient(135deg, #CCFF00, #FF4F00, #003B46) 1',
            boxShadow: '0 0 60px #CCFF00, 0 0 100px #FF4F00',
          }}
        >
          <motion.span
            className="relative z-10 bg-gradient-to-r from-[#CCFF00] via-[#FF4F00] to-[#C0C0C0] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ENTER THE VOID
          </motion.span>
          
          {/* Glitch overlay */}
          <motion.div
            className="absolute inset-0 bg-[#CCFF00] mix-blend-multiply"
            animate={{
              opacity: [0, 0.3, 0],
              x: [-5, 5, -5],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        </Button>
      </motion.div>

      {/* Living text that breathes */}
      <motion.div
        className="absolute top-1/3 left-[10%] max-w-md"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.h1 
          className="text-7xl font-black leading-tight"
          style={{
            textShadow: '0 0 30px #CCFF00, 0 0 60px #FF4F00',
          }}
        >
          {['THE', 'INTERFACE', 'SCREAMS'].map((word, i) => (
            <motion.div
              key={word}
              className="bg-gradient-to-r from-[#CCFF00] via-[#FF4F00] to-[#003B46] bg-clip-text text-transparent"
              animate={{
                x: [-3, 3, -3],
                y: i === 1 ? [-5, 5, -5] : 0,
              }}
              transition={{
                duration: 0.3 + i * 0.1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              {word}
            </motion.div>
          ))}
        </motion.h1>
      </motion.div>
    </div>
  );
}