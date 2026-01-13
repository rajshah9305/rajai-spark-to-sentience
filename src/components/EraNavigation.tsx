import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

interface EraNavigationProps {
  currentEra: number;
  eras: string[];
  onEraClick: (index: number) => void;
}

export default function EraNavigation({ currentEra, eras, onEraClick }: EraNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleEraClick = useCallback((index: number) => {
    onEraClick(index);
    setIsMobileMenuOpen(false);
  }, [onEraClick]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-5"
        role="navigation"
        aria-label="Era navigation"
      >
        {eras.map((era, index) => (
          <button
            key={era}
            onClick={() => onEraClick(index)}
            className="group flex items-center gap-3 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            aria-label={`Navigate to ${era} era`}
            aria-current={currentEra === index ? 'page' : undefined}
          >
            <span 
              className={`text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                currentEra === index 
                  ? 'opacity-100 text-primary translate-x-0' 
                  : 'opacity-0 group-hover:opacity-80 group-focus-visible:opacity-80 text-muted-foreground translate-x-2 group-hover:translate-x-0 group-focus-visible:translate-x-0'
              }`}
            >
              {era}
            </span>
            <div className="relative">
              <motion.div 
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentEra === index 
                    ? 'bg-primary' 
                    : 'bg-muted-foreground/30 group-hover:bg-muted-foreground/60 group-focus-visible:bg-muted-foreground/60'
                }`}
                animate={{
                  scale: currentEra === index ? 1.4 : 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
              {currentEra === index && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/30"
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="fixed top-6 right-6 z-50 p-3 bg-background/80 backdrop-blur-sm border border-border rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors hover:bg-background/90"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-navigation-title"
            >
              <div className="flex items-center justify-center min-h-screen p-6">
                <motion.nav
                  id="mobile-navigation"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                  className="flex flex-col gap-8 text-center"
                  role="navigation"
                  aria-label="Mobile era navigation"
                >
                  <motion.h2
                    id="mobile-navigation-title"
                    variants={fadeInUp}
                    className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4"
                  >
                    Navigate to Era
                  </motion.h2>
                  {eras.map((era, index) => (
                    <motion.button
                      key={era}
                      variants={staggerItem}
                      onClick={() => handleEraClick(index)}
                      className={`text-2xl font-mono uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-4 py-2 ${
                        currentEra === index 
                          ? 'text-primary' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      aria-label={`Navigate to ${era} era`}
                      aria-current={currentEra === index ? 'page' : undefined}
                    >
                      {era}
                      {currentEra === index && (
                        <motion.div
                          className="w-2 h-2 bg-primary rounded-full mx-auto mt-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </motion.button>
                  ))}
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}