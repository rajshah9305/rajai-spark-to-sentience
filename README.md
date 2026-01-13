# RAJAI Portfolio

A modern, interactive portfolio website showcasing Raj Shah's journey through 5 technological eras. Built with React, TypeScript, and cutting-edge web technologies.

## 🚀 Features

- **5 Interactive Eras**: Scroll-based navigation through different technological periods
- **Responsive Design**: Optimized for desktop and mobile devices with accessibility features
- **Smooth Animations**: Powered by Framer Motion with performance optimizations
- **3D Particle Effects**: Three.js integration for immersive visuals
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Vite
- **Error Boundaries**: Robust error handling and graceful fallbacks
- **Form Validation**: Enhanced contact form with real-time validation
- **Performance Monitoring**: Built-in performance tracking and optimization
- **Database Integration**: Neon PostgreSQL ready for contact submissions

## 🛠️ Tech Stack

### Core Framework
- **React**: 18.3.1 with TypeScript 5.8.3
- **Build Tool**: Vite 5.4.19 with SWC for fast compilation
- **Routing**: React Router DOM 6.30.1

### Styling & Design
- **Tailwind CSS**: 3.4.17 with custom design system
- **Framer Motion**: 12.25.0 for animations and interactions
- **Fonts**: Space Grotesk (display), JetBrains Mono (code)

### 3D & Graphics
- **Three.js**: 0.160.1 for 3D graphics
- **React Three Fiber**: 8.18.0 (React wrapper)
- **React Three Drei**: 9.122.0 (3D utilities)

### UI & Utilities
- **Radix UI**: Accessible component primitives
- **Lucide React**: Modern icon library
- **Sonner**: Toast notifications
- **Class Variance Authority**: Component styling utilities

### Database & Backend
- **Neon PostgreSQL**: Serverless database (configured)
- **Contact Form**: Enhanced validation and error handling

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd rajai-portfolio

# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env.local
# Edit .env.local with your actual values

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── eras/              # Era-specific components
│   │   ├── SparkEra.tsx   # Act I: The Beginning
│   │   ├── MachineEra.tsx # Act II: Foundations
│   │   ├── HumanEra.tsx   # Act III: Design & UX
│   │   ├── AIEra.tsx      # Act IV: AI/ML Focus
│   │   └── RajaiEra.tsx   # Act V: Current/Synthesis
│   ├── ui/                # Reusable UI components
│   ├── EraNavigation.tsx  # Enhanced navigation with accessibility
│   ├── ContactForm.tsx    # Form with validation and error handling
│   ├── ErrorBoundary.tsx  # Error boundary component
│   └── ParticleField.tsx  # 3D particle system
├── pages/
│   ├── Index.tsx          # Main portfolio page
│   └── NotFound.tsx       # 404 page
├── lib/
│   ├── database.ts        # Database utilities and types
│   ├── animations.ts      # Reusable animation variants
│   ├── performance.ts     # Performance monitoring utilities
│   └── utils.ts           # General utilities
├── hooks/                 # Custom React hooks
└── styles/                # Global styles and design system
```

## 🎨 Design System

### Era-Specific Themes
Each era has its unique visual identity:

| Era | Theme | Colors | Focus |
|-----|-------|--------|-------|
| **Spark** | Origin story | Gold/Purple | Curiosity, learning |
| **Machine** | Foundations | Cyan/Green/Amber | CS fundamentals |
| **Human** | Design & UX | Warm/Cream | User experience |
| **AI** | Intelligence | Neural Blue/Pink | ML/AI expertise |
| **Rajai** | Synthesis | Gold/Blue | Current work |

### Design Features
- **Custom CSS Variables**: Era-specific color palettes
- **Typography System**: Display and monospace font stacks
- **Responsive Breakpoints**: Mobile-first with desktop enhancements
- **Animation Library**: 15+ custom keyframes and variants
- **Glass Morphism**: Backdrop blur and transparency effects
- **Glow Effects**: Text shadows and box shadows for visual impact

## 🚀 Performance Optimizations

### Built-in Monitoring
- **Performance Metrics**: Load time, render time, interaction tracking
- **Web Vitals**: LCP, CLS measurement
- **Memory Usage**: JavaScript heap monitoring
- **Bundle Analysis**: Script and stylesheet tracking

### Optimization Features
- **Lazy Loading**: Intersection Observer for viewport-based loading
- **Debounced/Throttled Events**: Performance-optimized event handlers
- **Reduced Motion**: Respects user accessibility preferences
- **Error Boundaries**: Graceful error handling and recovery

## 🔧 Development

### Available Scripts
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Type Checking
npx tsc --noEmit     # TypeScript type checking

# Performance Analysis
npm run build && npm run preview  # Analyze bundle size
```

### Environment Variables
Create `.env.local` from `.env.example`:

```env
# Database
DATABASE_URL=postgresql://username:password@host:port/database

# Contact Form
CONTACT_EMAIL=hello@rajai.org

# Feature Flags
ENABLE_CONTACT_FORM=true
ENABLE_ANALYTICS=false
```

## 📱 Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Color Contrast**: WCAG compliant color combinations
- **Mobile Accessibility**: Touch-friendly targets and gestures

## 🛡️ Error Handling

### Error Boundaries
- **Component-level**: Isolated error handling for each major component
- **Graceful Fallbacks**: User-friendly error messages and retry options
- **Development Mode**: Detailed error information for debugging
- **Production Mode**: Clean error reporting without sensitive information

### Form Validation
- **Real-time Validation**: Immediate feedback on form inputs
- **Accessibility**: Error messages linked to form fields
- **User Experience**: Clear error states and success feedback
- **Security**: Input sanitization and validation

## 🗄️ Database Integration

### Neon PostgreSQL Setup
The project is configured for Neon PostgreSQL with:

- **Contact Submissions**: Structured data storage
- **Error Handling**: Robust database error management
- **Validation**: Server-side input validation
- **Security**: Prepared statements and input sanitization

### Database Schema
```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🚀 Deployment

### Recommended Platforms
- **Netlify**: Optimized for React SPAs with automatic builds
- **Vercel**: Excellent Next.js support and edge functions
- **AWS S3 + CloudFront**: Full control over hosting and CDN

### Build Optimization
- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Minified CSS and JavaScript
- **Image Optimization**: Responsive images and lazy loading
- **Caching**: Optimized cache headers for static assets

## 📊 Analytics & Monitoring

### Performance Tracking
- **Core Web Vitals**: LCP, FID, CLS monitoring
- **User Interactions**: Click tracking and engagement metrics
- **Error Tracking**: Client-side error reporting
- **Performance Budgets**: Bundle size and load time monitoring

### Development Tools
- **React DevTools**: Component inspection and profiling
- **Performance Tab**: Chrome DevTools integration
- **Lighthouse**: Automated performance auditing
- **Bundle Analyzer**: Webpack bundle analysis

## 🤝 Contributing

### Code Quality
- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Configured for React and TypeScript best practices
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality assurance

### Development Workflow
1. **Feature Branches**: Create feature branches from main
2. **Code Review**: All changes require review
3. **Testing**: Manual testing for UI/UX components
4. **Performance**: Check performance impact of changes

## 📄 License

This project is private and proprietary.

## 🤝 Contact

For inquiries about this portfolio or collaboration opportunities:

- **Email**: hello@rajai.org
- **LinkedIn**: [Raj Shah](https://linkedin.com/in/rajshah)
- **GitHub**: [rajshah9305](https://github.com/rajshah9305)

---

**Built with ❤️ by Raj Shah** | **Powered by React, TypeScript, and Modern Web Technologies**