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
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
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
        // Era-specific colors - refined palette
        spark: {
          void: "hsl(var(--spark-void))",
          glow: "hsl(var(--spark-glow))",
          pulse: "hsl(var(--spark-pulse))",
          secondary: "hsl(var(--spark-secondary))",
        },
        machine: {
          black: "hsl(var(--machine-black))",
          amber: "hsl(var(--machine-amber))",
          green: "hsl(var(--machine-green))",
          phosphor: "hsl(var(--machine-phosphor))",
          cyan: "hsl(var(--machine-cyan))",
        },
        human: {
          cream: "hsl(var(--human-cream))",
          warm: "hsl(var(--human-warm))",
          text: "hsl(var(--human-text))",
          accent: "hsl(var(--human-accent))",
          secondary: "hsl(var(--human-secondary))",
        },
        ai: {
          deep: "hsl(var(--ai-deep))",
          neural: "hsl(var(--ai-neural))",
          synapse: "hsl(var(--ai-synapse))",
          glow: "hsl(var(--ai-glow))",
          electric: "hsl(var(--ai-electric))",
        },
        rajai: {
          bg: "hsl(var(--rajai-bg))",
          surface: "hsl(var(--rajai-surface))",
          text: "hsl(var(--rajai-text))",
          muted: "hsl(var(--rajai-muted))",
          accent: "hsl(var(--rajai-accent))",
          "accent-soft": "hsl(var(--rajai-accent-soft))",
          highlight: "hsl(var(--rajai-highlight))",
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
        "pulse-glow": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.02)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
          "75%": { opacity: "0.92" },
        },
        "terminal-blink": {
          "0%, 45%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "neural-pulse": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(2)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "0.6" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(100px) rotate(-360deg)" },
        },
        "breathe": {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.98)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
        "float": "float 8s ease-in-out infinite",
        "flicker": "flicker 0.12s infinite",
        "terminal-blink": "terminal-blink 1.2s infinite",
        "neural-pulse": "neural-pulse 2.5s ease-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "shimmer": "shimmer 3s linear infinite",
        "orbit": "orbit 20s linear infinite",
        "breathe": "breathe 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;