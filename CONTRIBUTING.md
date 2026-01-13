# Contributing to RAJAI: Spark to Sentience

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## Getting Started

Before you begin contributing, please ensure you have read and understood the project's README and CODE_OF_CONDUCT.

### Prerequisites

To contribute to this project, you will need the following tools installed on your system:

- **Node.js** (v18.x or higher recommended)
- **npm** (comes with Node.js) or **pnpm**
- **Git** for version control

### Setting Up Your Development Environment

Follow these steps to set up your local development environment:

1. **Fork the repository** by clicking the "Fork" button at the top right of the GitHub page.

2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/rajai-spark-to-sentience.git
   cd rajai-spark-to-sentience
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

The application should now be running at `http://localhost:5173`.

## How to Contribute

### Reporting Bugs

If you encounter a bug, please create an issue on GitHub with the following information:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior vs. actual behavior
- Screenshots or error messages (if applicable)
- Your environment (OS, browser, Node.js version)

### Suggesting Enhancements

We welcome suggestions for new features or improvements. When suggesting an enhancement:

- Use a clear and descriptive title
- Provide a detailed description of the proposed feature
- Explain why this enhancement would be useful
- Include mockups or examples if applicable

### Submitting Pull Requests

When you're ready to submit your contribution:

1. **Ensure your code follows the project's coding standards**:
   - Run the linter: `npm run lint`
   - Fix any linting errors before submitting

2. **Test your changes thoroughly** to ensure they work as expected and don't break existing functionality.

3. **Commit your changes** with clear, descriptive commit messages:
   ```bash
   git commit -m "feat: add new animation to Machine Era"
   ```

   Use conventional commit messages:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for formatting changes
   - `refactor:` for code refactoring
   - `test:` for adding tests
   - `chore:` for maintenance tasks

4. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** from your fork to the main repository:
   - Provide a clear title and description
   - Reference any related issues
   - Explain what changes you made and why

### Code Style Guidelines

This project follows specific coding conventions to maintain consistency:

- **TypeScript**: Use strict type checking and avoid `any` types when possible
- **Components**: Use functional components with hooks
- **Naming**: Use PascalCase for components, camelCase for functions and variables
- **Formatting**: The project uses ESLint for code quality
- **Comments**: Add JSDoc comments for complex functions and components

### Component Structure

When creating new components, follow this structure:

```typescript
/**
 * ComponentName - Brief description of what this component does
 * 
 * @param {Props} props - Component props
 * @returns {JSX.Element} Rendered component
 */
export default function ComponentName({ prop1, prop2 }: Props) {
  // Component logic
  
  return (
    // JSX
  );
}
```

## Project Structure

Understanding the project structure will help you navigate the codebase:

```
rajai-spark-to-sentience/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── eras/        # Era-specific components
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── pages/           # Page components
├── public/              # Static assets
└── ...config files
```

## Review Process

After submitting a pull request:

1. A maintainer will review your code within a few days
2. You may be asked to make changes or provide clarification
3. Once approved, your PR will be merged into the main branch
4. Your contribution will be acknowledged in the project

## Questions?

If you have questions about contributing, feel free to:

- Open an issue with the `question` label
- Reach out via email at hello@rajai.org

Thank you for contributing to RAJAI: Spark to Sentience!
