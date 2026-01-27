import { motion } from 'framer-motion';

export default function SparkBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-spark-void">
      {/* 1. Base Noise Texture (Static) */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Deep Background Gradient (Vignette) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-spark-void/90 pointer-events-none" />

      {/* 3. Animated Gradient Orbs - Richer & Smoother */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-spark-glow/10 blur-[100px] mix-blend-screen"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-[10%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-spark-ember/10 blur-[120px] mix-blend-screen"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.2, 0.1],
          y: [0, -40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

       <motion.div
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-spark-flame/5 blur-[90px] mix-blend-screen"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.08, 0.15, 0.08],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* 4. Subtle "Drifting Embers" Layer (CSS Animation in index.css or simple drift here) */}
      {/* We'll simulate a few large, slow drifting light patches to give depth */}
      <motion.div
         className="absolute top-[20%] right-[20%] w-[20vw] h-[20vw] rounded-full bg-spark-pulse/5 blur-[60px]"
         animate={{
            y: [-20, 20, -20],
            opacity: [0, 0.1, 0],
         }}
         transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
         }}
      />

      {/* 5. Bottom Transition to Machine Era (Darkens at the very bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050A05] to-transparent pointer-events-none" />

      {/* 6. Very faint grid overlay to hint at structure emerging from chaos */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />
    </div>
  );
}
