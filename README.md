# ✨ RAJAI: Spark to Sentience

<div align="center">

**An immersive interactive journey through the evolution of technology**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff.svg)](https://vitejs.dev/)
[![CI/CD](https://github.com/rajshah9305/rajai-spark-to-sentience/actions/workflows/ci.yml/badge.svg)](https://github.com/rajshah9305/rajai-spark-to-sentience/actions)

[Live Demo](https://rajai.org) · [Report Bug](https://github.com/rajshah9305/rajai-spark-to-sentience/issues) · [Request Feature](https://github.com/rajshah9305/rajai-spark-to-sentience/issues)

</div>

---

## 🌟 Overview

**RAJAI: Spark to Sentience** is an interactive portfolio and storytelling experience that chronicles the evolution of technology through five distinct eras. Built with cutting-edge web technologies, this project combines stunning animations, scroll-based interactions, and 3D effects to create an immersive narrative journey.

From the first spark of curiosity to the age of artificial intelligence, explore how technology has evolved and discover the vision for what comes next. This project showcases the intersection of design, engineering, and storytelling in modern web development.

### Key Features

**Interactive Storytelling** — Experience a narrative-driven journey through five eras of technological evolution, each with unique visual themes and animations.

**Scroll-Based Navigation** — Seamlessly navigate through different eras with smooth scroll interactions and progress tracking.

**Stunning Animations** — Built with Framer Motion to deliver fluid, performant animations that bring each era to life.

**3D Visual Effects** — Leveraging React Three Fiber for immersive particle effects and three-dimensional elements.

**Responsive Design** — Fully optimized for all devices, from mobile phones to large desktop displays.

**Modern Tech Stack** — Built with React 18, TypeScript, Vite, and the latest web development tools for optimal performance.

---

## 🎭 The Five Eras

### 🔥 Act I: The Spark
The journey begins with curiosity and the first lines of code. This era explores the foundations of computer science and the inspiration drawn from mathematics, science, and design.

### ⚙️ Act II: The Machine
Witness the rise of computational power and the transformation of theoretical concepts into practical applications. This era celebrates the engineering marvels that powered the digital revolution.

### 👤 Act III: The Human
Technology becomes personal. This era focuses on human-computer interaction, user experience, and the democratization of technology for everyone.

### 🤖 Act IV: The AI
Enter the age of artificial intelligence, where machines learn, adapt, and augment human capabilities. Explore the frontier of machine learning and intelligent systems.

### 🏛️ Act V: The Architect (RAJAI)
The culmination of the journey. This era presents the vision for building the future, combining all previous learnings to architect what comes next.

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.x or higher) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **pnpm**
- **Git** for version control

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/rajshah9305/rajai-spark-to-sentience.git

# Navigate to the project directory
cd rajai-spark-to-sentience

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Create an optimized production build:

```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

The production-ready files will be generated in the `dist` directory.

---

## 🛠️ Technology Stack

This project leverages modern web technologies to deliver a high-performance, visually stunning experience:

| Category | Technologies |
|----------|-------------|
| **Frontend Framework** | React 18.3, TypeScript 5.8 |
| **Build Tool** | Vite 5.4 |
| **Styling** | Tailwind CSS 3.4, CSS Modules |
| **Animations** | Framer Motion 12.25 |
| **3D Graphics** | React Three Fiber 8.18, Three.js 0.160 |
| **UI Components** | shadcn/ui, Radix UI |
| **Routing** | React Router DOM 6.30 |
| **State Management** | React Hooks, TanStack Query 5.83 |
| **Form Handling** | React Hook Form 7.61, Zod 3.25 |
| **Icons** | Lucide React 0.462 |
| **Date Handling** | date-fns 3.6 |
| **Code Quality** | ESLint 9.32, TypeScript ESLint 8.38 |
| **Deployment** | Vercel (optimized configuration included) |

---

## 📁 Project Structure

Understanding the project architecture:

```
rajai-spark-to-sentience/
├── .github/
│   ├── workflows/
│   │   └── ci.yml              # CI/CD pipeline configuration
│   ├── ISSUE_TEMPLATE/         # GitHub issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt              # SEO configuration
├── src/
│   ├── components/
│   │   ├── eras/               # Era-specific components
│   │   │   ├── SparkEra.tsx
│   │   │   ├── MachineEra.tsx
│   │   │   ├── HumanEra.tsx
│   │   │   ├── AIEra.tsx
│   │   │   └── RajaiEra.tsx
│   │   ├── ui/                 # Reusable UI components (shadcn/ui)
│   │   ├── EraNavigation.tsx   # Navigation component
│   │   ├── NavLink.tsx
│   │   └── ParticleField.tsx   # 3D particle effects
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── pages/
│   │   ├── Index.tsx           # Main page
│   │   └── NotFound.tsx        # 404 page
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── .env.example                # Environment variables template
├── CODE_OF_CONDUCT.md          # Community guidelines
├── CONTRIBUTING.md             # Contribution guidelines
├── LICENSE                     # MIT License
├── README.md                   # This file
├── vercel.json                 # Vercel deployment configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── vite.config.ts              # Vite configuration
```

---

## 🎨 Design Philosophy

This project embodies several key design principles:

**Narrative-Driven Design** — Every visual element serves the story, creating a cohesive journey through technological evolution.

**Performance First** — Optimized animations and lazy loading ensure smooth experiences even on lower-end devices.

**Accessibility Matters** — Semantic HTML, ARIA labels, and keyboard navigation support inclusive design.

**Progressive Enhancement** — Core content remains accessible even without JavaScript, with enhanced experiences for modern browsers.

**Responsive by Default** — Mobile-first approach ensures excellent experiences across all screen sizes.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before submitting pull requests.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Workflow

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🌐 Connect

**Raj Shah** — Building the future, one line of code at a time.

- **Website**: [rajai.org](https://rajai.org)
- **GitHub**: [@rajshah9305](https://github.com/rajshah9305)
- **LinkedIn**: [Raj Shah](https://linkedin.com/in/rajshah)
- **Email**: hello@rajai.org

---

## 🙏 Acknowledgments

This project was built with inspiration from:

- The incredible open-source community
- Modern web development pioneers
- Everyone pushing the boundaries of what's possible on the web

Special thanks to the creators and maintainers of the technologies that power this project.

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/rajshah9305/rajai-spark-to-sentience?style=social)
![GitHub forks](https://img.shields.io/github/forks/rajshah9305/rajai-spark-to-sentience?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/rajshah9305/rajai-spark-to-sentience?style=social)

---

<div align="center">

**Made with ❤️ by [Raj Shah](https://github.com/rajshah9305)**

If you found this project interesting, please consider giving it a ⭐️!

</div>
