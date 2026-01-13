import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { db } from '@/lib/database';
import { 
  fadeInUp, 
  buttonPress, 
  cardHover, 
  springConfigs,
  easings 
} from '@/lib/animations';
import { useRipple, useMagneticHover } from '@/lib/micro-interactions';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { ripples, addRipple } = useRipple();
  const magneticButton = useMagneticHover(0.2);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors below');
      return;
    }

    setIsSubmitting(true);

    try {
      await db.insertContact(formData);
      
      setIsSubmitted(true);
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      }, 3000);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
      toast.error(errorMessage);
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        variants={cardHover}
        initial="initial"
        animate="hover"
        className="flex flex-col items-center justify-center p-8 text-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 2,
            ease: easings.easeOutCubic
          }}
        >
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        </motion.div>
        <motion.h3 
          className="text-xl font-display font-medium text-foreground mb-2"
          variants={fadeInUp}
        >
          Message Sent!
        </motion.h3>
        <motion.p 
          className="text-muted-foreground"
          variants={fadeInUp}
        >
          Thank you for reaching out. I'll get back to you within 24 hours.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6 relative"
      noValidate
    >
      {/* Ripple effects container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              className="absolute w-4 h-4 bg-primary/20 rounded-full"
              style={{
                left: ripple.x - 8,
                top: ripple.y - 8,
              }}
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 20, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: easings.easeOutCubic }}
            />
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        whileHover={{ y: -2 }}
        transition={springConfigs.gentle}
      >
        <motion.label 
          htmlFor="name" 
          className="block text-sm font-medium text-foreground mb-2"
          animate={{ 
            color: focusedField === 'name' ? 'hsl(var(--primary))' : 'hsl(var(--foreground))'
          }}
        >
          Name *
        </motion.label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.name 
              ? 'border-destructive focus:ring-destructive/50 focus:border-destructive' 
              : 'border-border focus:ring-primary/50 focus:border-primary'
          }`}
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          whileFocus={{ scale: 1.02 }}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={springConfigs.gentle}
              id="name-error"
              className="mt-2 text-sm text-destructive flex items-center gap-1"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <AlertCircle className="w-4 h-4" />
              </motion.div>
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        whileHover={{ y: -2 }}
        transition={springConfigs.gentle}
      >
        <motion.label 
          htmlFor="email" 
          className="block text-sm font-medium text-foreground mb-2"
          animate={{ 
            color: focusedField === 'email' ? 'hsl(var(--primary))' : 'hsl(var(--foreground))'
          }}
        >
          Email *
        </motion.label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
            errors.email 
              ? 'border-destructive focus:ring-destructive/50 focus:border-destructive' 
              : 'border-border focus:ring-primary/50 focus:border-primary'
          }`}
          placeholder="your.email@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          whileFocus={{ scale: 1.02 }}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={springConfigs.gentle}
              id="email-error"
              className="mt-2 text-sm text-destructive flex items-center gap-1"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <AlertCircle className="w-4 h-4" />
              </motion.div>
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        whileHover={{ y: -2 }}
        transition={springConfigs.gentle}
      >
        <motion.label 
          htmlFor="message" 
          className="block text-sm font-medium text-foreground mb-2"
          animate={{ 
            color: focusedField === 'message' ? 'hsl(var(--primary))' : 'hsl(var(--foreground))'
          }}
        >
          Message *
        </motion.label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          rows={4}
          className={`w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
            errors.message 
              ? 'border-destructive focus:ring-destructive/50 focus:border-destructive' 
              : 'border-border focus:ring-primary/50 focus:border-primary'
          }`}
          placeholder="Tell me about your project, ask a question, or just say hello..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          whileFocus={{ scale: 1.02 }}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={springConfigs.gentle}
              id="message-error"
              className="mt-2 text-sm text-destructive flex items-center gap-1"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <AlertCircle className="w-4 h-4" />
              </motion.div>
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        ref={magneticButton.ref}
        style={{ x: magneticButton.x, y: magneticButton.y }}
      >
        <motion.button
          type="submit"
          disabled={isSubmitting}
          variants={buttonPress}
          whileHover={isSubmitting ? {} : "hover"}
          whileTap={isSubmitting ? {} : "tap"}
          onClick={addRipple}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <motion.div 
                  className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <span>Sending...</span>
              </motion.div>
            ) : (
              <motion.div
                key="send"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={springConfigs.bouncy}
                >
                  <Send className="w-4 h-4" />
                </motion.div>
                <span>Send Message</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      <motion.p 
        className="text-xs text-muted-foreground text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        * Required fields. Your information is secure and will never be shared.
      </motion.p>
    </motion.form>
  );
}