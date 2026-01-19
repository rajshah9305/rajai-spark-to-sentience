import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootLines = [
  { text: 'RAJAI.SYS v2.0.25', delay: 0 },
  { text: 'Initializing quantum processors...', delay: 200 },
  { text: 'Loading neural pathways... OK', delay: 400 },
  { text: 'Calibrating creative cores... OK', delay: 600 },
  { text: 'Syncing experience matrix... OK', delay: 800 },
  { text: 'Mounting portfolio drives...', delay: 1000 },
  { text: '  /spark    [MOUNTED]', delay: 1150 },
  { text: '  /machine  [MOUNTED]', delay: 1300 },
  { text: '  /human    [MOUNTED]', delay: 1450 },
  { text: '  /ai       [MOUNTED]', delay: 1600 },
  { text: '  /rajai    [MOUNTED]', delay: 1750 },
  { text: 'All systems operational.', delay: 2000 },
  { text: 'Welcome, Explorer.', delay: 2400, highlight: true },
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isExiting, setIsExiting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Show lines progressively
    bootLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
    });

    // Start exit animation after all lines
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3200);

    // Complete boot sequence
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      clearInterval(cursorInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[hsl(235,30%,3%)] flex items-center justify-center overflow-hidden"
        >
          {/* Scanline effect */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 0% / 0.1) 2px, hsl(0 0% 0% / 0.1) 4px)`,
            }}
          />
          
          {/* CRT glow effect */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(200_100%_55%_/_0.03)_0%,transparent_70%)]"
            animate={{ opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(hsl(200 100% 55%) 1px, transparent 1px),
                linear-gradient(90deg, hsl(200 100% 55%) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Terminal container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full max-w-2xl mx-4 md:mx-6 bg-[hsl(235,30%,5%)] rounded-xl border border-border/40 shadow-2xl overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-[hsl(235,25%,8%)]">
              <motion.div
                className="w-3 h-3 rounded-full bg-destructive/80"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-spark-glow/80"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-machine-green/80"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
              <span className="ml-3 font-mono text-xs text-muted-foreground">rajai-terminal</span>
            </div>

            {/* Terminal content */}
            <div className="p-4 md:p-6 min-h-[300px] font-mono text-sm">
              {bootLines.slice(0, visibleLines).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`mb-1.5 ${
                    line.highlight 
                      ? 'text-primary font-medium' 
                      : line.text.includes('[MOUNTED]') 
                        ? 'text-machine-green/80' 
                        : line.text.includes('OK')
                          ? 'text-ai-neural/80'
                          : 'text-muted-foreground'
                  }`}
                >
                  {line.text.startsWith('  ') ? (
                    <span className="ml-4">{line.text}</span>
                  ) : (
                    <span className="text-primary/50">{'>'}</span>
                  )}
                  {!line.text.startsWith('  ') && (
                    <span className="ml-2">{line.text}</span>
                  )}
                </motion.div>
              ))}
              
              {/* Blinking cursor */}
              <motion.span
                className="inline-block w-2 h-4 bg-primary ml-1"
                animate={{ opacity: cursorVisible ? 1 : 0 }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Progress bar */}
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <div className="h-1 bg-muted/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-ai-neural to-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(visibleLines / bootLines.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Brand watermark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 text-center"
          >
            <span className="font-display text-sm tracking-[0.3em] text-muted-foreground/50">
              RAJAI.ORG
            </span>
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/20" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/20" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/20" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
