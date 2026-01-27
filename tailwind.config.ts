import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        serif: ['Cormorant Garamond', 'serif'],
        body: ['Outfit', 'sans-serif'],
        spark: ['Cormorant Garamond', 'serif'],
        machine: ['Space Mono', 'monospace'],
        ai: ['Outfit', 'sans-serif'],
        rajai: ['Syne', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Era I: The Spark — Warm sunset/fire palette
        spark: {
          void: "hsl(var(--spark-void))",
          glow: "hsl(var(--spark-glow))",
          pulse: "hsl(var(--spark-pulse))",
          ember: "hsl(var(--spark-ember))",
          flame: "hsl(var(--spark-flame))",
          smoke: "hsl(var(--spark-smoke))",
          text: "hsl(var(--spark-text))",
        },
        // Era II: The Machine — Matrix phosphor green
        machine: {
          black: "hsl(var(--machine-black))",
          phosphor: "hsl(var(--machine-phosphor))",
          dim: "hsl(var(--machine-dim))",
          bright: "hsl(var(--machine-bright))",
          amber: "hsl(var(--machine-amber))",
          grid: "hsl(var(--machine-grid))",
          text: "hsl(var(--machine-text))",
        },
        // Era III: The Mind — Deep ocean teal
        ai: {
          void: "hsl(var(--ai-void))",
          neural: "hsl(var(--ai-neural))",
          synapse: "hsl(var(--ai-synapse))",
          pulse: "hsl(var(--ai-pulse))",
          glow: "hsl(var(--ai-glow))",
          dark: "hsl(var(--ai-dark))",
          text: "hsl(var(--ai-text))",
        },
        // Era IV: The Architect — Luxury champagne gold
        rajai: {
          bg: "hsl(var(--rajai-bg))",
          surface: "hsl(var(--rajai-surface))",
          gold: "hsl(var(--rajai-gold))",
          cream: "hsl(var(--rajai-cream))",
          muted: "hsl(var(--rajai-muted))",
          highlight: "hsl(var(--rajai-highlight))",
          warm: "hsl(var(--rajai-warm))",
          accent: "hsl(var(--rajai-accent))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Spark animations
        "ember-float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)", opacity: "0.6" },
          "50%": { transform: "translateY(-30px) rotate(10deg)", opacity: "1" },
        },
        "ember-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(35 100% 55% / 0.3)" },
          "50%": { boxShadow: "0 0 60px hsl(35 100% 55% / 0.6)" },
        },
        // Machine animations
        "terminal-blink": {
          "0%, 45%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(2px, -2px)" },
          "60%": { transform: "translate(-2px, -2px)" },
          "80%": { transform: "translate(2px, 2px)" },
        },
        // AI animations
        "neural-pulse": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(2)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "0.6" },
        },
        "synapse-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "orb-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(10px, -20px) scale(1.05)" },
          "50%": { transform: "translate(-10px, -30px) scale(1.1)" },
          "75%": { transform: "translate(-20px, -10px) scale(1.05)" },
        },
        // Rajai animations
        "gold-shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "elegant-fade": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "breathe": {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.98)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        // Shared
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Spark
        "ember-float": "ember-float 8s ease-in-out infinite",
        "ember-pulse": "ember-pulse 3s ease-in-out infinite",
        // Machine
        "terminal-blink": "terminal-blink 1.2s infinite",
        "scan-line": "scan-line 3s linear infinite",
        "glitch": "glitch 0.3s ease-in-out",
        // AI
        "neural-pulse": "neural-pulse 2.5s ease-out infinite",
        "synapse-flow": "synapse-flow 8s ease infinite",
        "orb-float": "orb-float 12s ease-in-out infinite",
        // Rajai
        "gold-shimmer": "gold-shimmer 3s linear infinite",
        "elegant-fade": "elegant-fade 0.8s ease-out forwards",
        "breathe": "breathe 4s ease-in-out infinite",
        // Shared
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "float": "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
