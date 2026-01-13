// Performance monitoring and optimization utilities

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
  memoryUsage?: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    interactionTime: 0
  };

  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
    this.measurePageLoad();
  }

  private initializeObservers() {
    // Measure paint timing
    if ('PerformanceObserver' in window) {
      try {
        const paintObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.renderTime = entry.startTime;
            }
          });
        });
        paintObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(paintObserver);
      } catch (error) {
        console.warn('Paint observer not supported:', error);
      }

      // Measure user interactions
      try {
        const interactionObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.duration > 100) { // Log slow interactions
              console.warn('Slow interaction detected:', entry);
            }
          });
        });
        interactionObserver.observe({ entryTypes: ['event'] });
        this.observers.push(interactionObserver);
      } catch (error) {
        console.warn('Interaction observer not supported:', error);
      }
    }
  }

  private measurePageLoad() {
    if ('performance' in window && 'timing' in performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const timing = performance.timing;
          this.metrics.loadTime = timing.loadEventEnd - timing.navigationStart;
          
          // Measure memory usage if available
          if ('memory' in performance) {
            this.metrics.memoryUsage = (performance as any).memory.usedJSHeapSize;
          }
        }, 0);
      });
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  logMetrics() {
    console.group('Performance Metrics');
    console.log('Load Time:', this.metrics.loadTime, 'ms');
    console.log('Render Time:', this.metrics.renderTime, 'ms');
    console.log('Interaction Time:', this.metrics.interactionTime, 'ms');
    if (this.metrics.memoryUsage) {
      console.log('Memory Usage:', (this.metrics.memoryUsage / 1024 / 1024).toFixed(2), 'MB');
    }
    console.groupEnd();
  }

  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Lazy loading utility
export const lazyLoad = (callback: () => void, threshold = 0.1) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.disconnect();
          }
        });
      },
      { threshold }
    );
    return observer;
  } else {
    // Fallback for browsers without IntersectionObserver
    callback();
    return null;
  }
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Image optimization utility
export const optimizeImage = (src: string, width?: number, height?: number, quality = 80) => {
  // In a real app, this would integrate with a service like Cloudinary or ImageKit
  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  params.append('q', quality.toString());
  
  return `${src}?${params.toString()}`;
};

// Preload critical resources
export const preloadResource = (href: string, as: string, type?: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Bundle size analyzer (development only)
export const analyzeBundleSize = () => {
  if (process.env.NODE_ENV === 'development') {
    console.group('Bundle Analysis');
    
    // Analyze loaded scripts
    const scripts = Array.from(document.querySelectorAll('script[src]')) as HTMLScriptElement[];
    scripts.forEach((script) => {
      console.log('Script:', script.src);
    });
    
    // Analyze loaded stylesheets
    const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]')) as HTMLLinkElement[];
    stylesheets.forEach((link) => {
      console.log('Stylesheet:', link.href);
    });
    
    console.groupEnd();
  }
};

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export utilities
export { PerformanceMonitor };

// Web Vitals measurement (simplified)
export const measureWebVitals = () => {
  // Largest Contentful Paint
  if ('PerformanceObserver' in window) {
    try {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP measurement not supported');
    }

    // Cumulative Layout Shift
    try {
      new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log('CLS:', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS measurement not supported');
    }
  }
};