import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/rajshah9305' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rajshah' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/rajshah' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@rajai.org' },
];

// Updated for 4-act story structure
const quickLinks = [
  { label: 'The Spark', era: 0, desc: 'Where ideas begin' },
  { label: 'The Machine', era: 1, desc: 'Computing revolution' },
  { label: 'The Mind', era: 2, desc: 'AI emergence' },
  { label: 'The Architect', era: 3, desc: 'Raj Shah' },
];

interface FooterProps {
  onEraClick?: (index: number) => void;
}

export default function Footer({ onEraClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-rajai-bg/80 backdrop-blur-xl border-t border-rajai-gold/15">
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
              <h3 className="text-3xl font-rajai font-bold mb-4 tracking-tight">
                <span className="raj-signature">RAJ</span>
                <span className="text-rajai-gold">AI</span>
                <span className="text-rajai-muted font-light">.org</span>
              </h3>
              <p className="text-rajai-muted text-sm leading-relaxed mb-6 font-body">
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
                    className="w-10 h-10 rounded-full border border-rajai-gold/25 bg-rajai-surface/50 flex items-center justify-center text-rajai-muted hover:text-rajai-gold hover:border-rajai-gold/50 transition-all"
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
              <h4 className="font-rajai text-xs tracking-[0.25em] text-rajai-gold/80 uppercase mb-6 font-semibold">
                The Journey
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={link.label}>
                    <motion.button
                      onClick={() => onEraClick?.(link.era)}
                      className="text-sm text-rajai-muted hover:text-rajai-gold transition-colors group flex items-center gap-2 font-body"
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-xs text-rajai-gold/50 font-rajai font-bold">0{link.era + 1}</span>
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
              <h4 className="font-rajai text-xs tracking-[0.25em] text-rajai-gold/80 uppercase mb-6 font-semibold">
                Let's Connect
              </h4>
              <p className="text-sm text-rajai-muted mb-6 font-body">
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </p>
              <motion.a
                href="mailto:hello@rajai.org"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-rajai-gold text-rajai-bg rounded-full text-sm font-rajai font-bold hover:bg-rajai-highlight transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </motion.a>
              
              <div className="mt-6 pt-6 border-t border-rajai-gold/15">
                <a
                  href="https://github.com/rajshah9305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-rajai-muted hover:text-rajai-gold transition-colors font-body"
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
          className="pt-8 border-t border-rajai-gold/15 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-rajai-muted font-body">
            © {currentYear} Raj Shah. All rights reserved.
          </p>
          
          <p className="text-xs text-rajai-muted flex items-center gap-1 font-body">
            Crafted with <Heart className="w-3 h-3 text-rajai-gold animate-pulse" /> using React, Framer Motion & Tailwind
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-rajai text-rajai-muted/50 font-semibold">
              v2.0.25
            </span>
            <div className="w-2 h-2 rounded-full bg-ai-neural animate-pulse" />
            <span className="text-xs text-rajai-muted/50 font-body">Systems Operational</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rajai-gold/30 to-transparent" />
    </footer>
  );
}
