import { motion } from 'framer-motion';

export default function SparkBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-spark-void">
      {/* Subtle Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial Mask for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spark-void/40 to-spark-void pointer-events-none" />

      {/* Animated Gradient Orbs - Organic Flow */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-spark-glow/5 blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-spark-ember/5 blur-[140px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

       <motion.div
        className="absolute top-[30%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-spark-flame/3 blur-[100px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          opacity: [0.05, 0.08, 0.05],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />

      {/* Very subtle grid overlay (optional, keeping it extremely faint) */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem'
        }}
      />
    </div>
  );
}
