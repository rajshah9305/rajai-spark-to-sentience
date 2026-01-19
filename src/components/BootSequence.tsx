import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

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
  { text: 'Welcome to the journey of Raj Shah.', delay: 2400, highlight: true },
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isExiting, setIsExiting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const handleSkip = useCallback(() => {
    setIsExiting(true);
    setTimeout(onComplete, 400);
  }, [onComplete]);

  useEffect(() => {
    // Show lines progressively
    const timers: NodeJS.Timeout[] = [];
    
    bootLines.forEach((line, index) => {
      timers.push(setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay));
    });

    // Start exit animation after all lines
    timers.push(setTimeout(() => {
      setIsExiting(true);
    }, 3200));

    // Complete boot sequence
    timers.push(setTimeout(() => {
      onComplete();
    }, 4000));

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(cursorInterval);
    };
  }, [onComplete]);

  // Keyboard skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSkip]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
          onClick={handleSkip}
        >
          {/* Scanline effect */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 0% / 0.1) 2px, hsl(0 0% 0% / 0.1) 4px)`,
            }}
          />
          
          {/* CRT glow effect */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)_/_0.04)_0%,transparent_70%)]"
            animate={{ opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Terminal container */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full max-w-2xl mx-4 md:mx-6 bg-card/90 backdrop-blur-xl rounded-2xl border border-border/60 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-muted/30">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-3 h-3 rounded-full bg-destructive/80"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-primary/80"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-machine-green/80"
                  whileHover={{ scale: 1.2 }}
                />
                <span className="ml-3 font-mono text-xs text-muted-foreground">rajai-terminal</span>
              </div>
              <motion.button
                onClick={handleSkip}
                className="px-3 py-1 text-xs font-mono text-muted-foreground hover:text-foreground border border-border/50 rounded-md hover:bg-muted/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Skip [Enter]
              </motion.button>
            </div>

            {/* Terminal content */}
            <div className="p-5 md:p-6 min-h-[320px] font-mono text-sm">
              {bootLines.slice(0, visibleLines).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`mb-1.5 flex items-start ${
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
                    <>
                      <span className="text-primary/50 mr-2">{'>'}</span>
                      <span>{line.text}</span>
                    </>
                  )}
                </motion.div>
              ))}
              
              {/* Blinking cursor */}
              <motion.span
                className="inline-block w-2 h-4 bg-primary ml-1 rounded-sm"
                animate={{ opacity: cursorVisible ? 1 : 0 }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Progress bar */}
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-ai-neural to-primary rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(visibleLines / bootLines.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs font-mono text-muted-foreground/50">
                  {Math.round((visibleLines / bootLines.length) * 100)}% complete
                </span>
                <span className="text-xs font-mono text-muted-foreground/50">
                  Click anywhere or press Enter to skip
                </span>
              </div>
            </div>
          </motion.div>

          {/* Brand watermark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 text-center"
          >
            <span className="font-display text-lg tracking-[0.4em] text-primary/60">
              RAJ<span className="text-muted-foreground/60">AI</span>.ORG
            </span>
          </motion.div>

          {/* Corner decorations */}
          <motion.div 
            className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-primary/20 rounded-tl-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.div 
            className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-primary/20 rounded-tr-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.div 
            className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-primary/20 rounded-bl-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-primary/20 rounded-br-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
