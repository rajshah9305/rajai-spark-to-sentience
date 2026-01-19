import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/rajshah9305' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rajshah' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/rajshah' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@rajai.org' },
];

const quickLinks = [
  { label: 'The Spark', era: 0 },
  { label: 'The Machine', era: 1 },
  { label: 'The Human Era', era: 2 },
  { label: 'The AI Era', era: 3 },
  { label: 'Rajai', era: 4 },
];

interface FooterProps {
  onEraClick?: (index: number) => void;
}

export default function Footer({ onEraClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card/50 backdrop-blur-xl border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display font-light mb-4">
                <span className="text-foreground">Raj</span>
                <span className="text-primary">ai</span>
                <span className="text-muted-foreground">.org</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                From Spark to Sentience — A journey through the evolution of technology, 
                creativity, and the systems that shape our future.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border/50 bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
                The Journey
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={link.label}>
                    <motion.button
                      onClick={() => onEraClick?.(link.era)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center gap-2"
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-xs text-primary/50 font-mono">0{link.era + 1}</span>
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
                Let's Connect
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </p>
              <motion.a
                href="mailto:hello@rajai.org"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </motion.a>
              
              <div className="mt-6 pt-6 border-t border-border/30">
                <a
                  href="https://github.com/rajshah9305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View my projects on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-muted-foreground">
            © {currentYear} Raj Shah. All rights reserved.
          </p>
          
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-primary animate-pulse" /> using React, Framer Motion & Tailwind
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-muted-foreground/50">
              v2.0.25
            </span>
            <div className="w-2 h-2 rounded-full bg-machine-green animate-pulse" />
            <span className="text-xs text-muted-foreground/50">Systems Operational</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
}
