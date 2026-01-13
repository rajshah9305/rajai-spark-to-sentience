# Deployment Guide

This guide provides comprehensive instructions for deploying **RAJAI: Spark to Sentience** to various hosting platforms. The application is optimized for static hosting and works seamlessly with modern deployment platforms.

---

## Prerequisites

Before deploying, ensure you have completed the following steps:

**Build the project locally** to verify everything works correctly:

```bash
npm run build
npm run preview
```

**Commit all changes** to your Git repository:

```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

**Configure environment variables** if needed (see `.env.example` for reference).

---

## Vercel Deployment (Recommended)

Vercel provides the best experience for deploying Vite applications with zero configuration required. The repository includes a `vercel.json` configuration file optimized for this project.

### Method 1: Deploy via Vercel Dashboard

This is the easiest method for first-time deployments.

1. **Sign up or log in** to [Vercel](https://vercel.com)

2. **Import your repository**:
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your GitHub repository

3. **Configure the project**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add environment variables** (if any):
   - Navigate to "Environment Variables"
   - Add variables from your `.env.example`

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

For developers who prefer command-line workflows:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

The CLI will automatically detect the Vite configuration and deploy with optimal settings.

### Custom Domain Setup

After deployment, you can configure a custom domain:

1. Navigate to your project in the Vercel dashboard
2. Go to "Settings" → "Domains"
3. Add your custom domain
4. Update your DNS records as instructed
5. Wait for SSL certificate provisioning (automatic)

---

## Netlify Deployment

Netlify is another excellent option for deploying static sites with continuous deployment.

### Method 1: Deploy via Netlify Dashboard

1. **Sign up or log in** to [Netlify](https://netlify.com)

2. **Create a new site**:
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git provider
   - Select your repository

3. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: (leave empty)

4. **Add environment variables** (if needed):
   - Navigate to "Site settings" → "Environment variables"
   - Add variables from your `.env.example`

5. **Deploy**:
   - Click "Deploy site"
   - Your site will be live at `https://random-name.netlify.app`

### Method 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

### Netlify Configuration File

Create a `netlify.toml` file in the project root for advanced configuration:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

## GitHub Pages Deployment

GitHub Pages provides free hosting for static sites directly from your repository.

### Setup Instructions

1. **Install gh-pages package**:

```bash
npm install --save-dev gh-pages
```

2. **Update package.json**:

Add the following scripts:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/rajai-spark-to-sentience"
}
```

3. **Update vite.config.ts**:

Add the base path:

```typescript
export default defineConfig({
  base: '/rajai-spark-to-sentience/',
  // ... rest of config
});
```

4. **Deploy**:

```bash
npm run deploy
```

Your site will be available at `https://yourusername.github.io/rajai-spark-to-sentience`.

---

## Cloudflare Pages Deployment

Cloudflare Pages offers fast global deployment with excellent performance.

### Deployment Steps

1. **Sign up or log in** to [Cloudflare Pages](https://pages.cloudflare.com)

2. **Create a new project**:
   - Click "Create a project"
   - Connect your GitHub account
   - Select your repository

3. **Configure build settings**:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

4. **Deploy**:
   - Click "Save and Deploy"
   - Your site will be live at `https://your-project.pages.dev`

---

## AWS Amplify Deployment

AWS Amplify provides a complete hosting solution with CI/CD integration.

### Deployment Steps

1. **Sign in** to [AWS Amplify Console](https://console.aws.amazon.com/amplify)

2. **Connect repository**:
   - Click "New app" → "Host web app"
   - Connect your Git provider
   - Select your repository and branch

3. **Configure build settings**:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

4. **Deploy**:
   - Review settings and click "Save and deploy"
   - Your site will be live at `https://branch-name.appid.amplifyapp.com`

---

## Docker Deployment

For containerized deployments, use the following Dockerfile:

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Build and Run

```bash
# Build the Docker image
docker build -t rajai-spark-to-sentience .

# Run the container
docker run -p 8080:80 rajai-spark-to-sentience
```

---

## Environment Variables

The application supports the following environment variables (all optional):

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_APP_TITLE` | Application title | `RAJAI: Spark to Sentience` |
| `VITE_APP_DESCRIPTION` | Meta description | `An interactive journey...` |
| `VITE_GA_TRACKING_ID` | Google Analytics ID | `G-XXXXXXXXXX` |
| `VITE_PLAUSIBLE_DOMAIN` | Plausible Analytics domain | `rajai.org` |
| `VITE_API_URL` | API endpoint (future use) | `https://api.example.com` |

Create a `.env` file based on `.env.example` and configure your deployment platform to use these variables.

---

## Performance Optimization

After deployment, verify performance using these tools:

**Lighthouse** — Run audits for performance, accessibility, and SEO:
```bash
npm install -g @lhci/cli
lhci autorun
```

**WebPageTest** — Test from multiple locations: [webpagetest.org](https://www.webpagetest.org)

**GTmetrix** — Comprehensive performance analysis: [gtmetrix.com](https://gtmetrix.com)

### Optimization Checklist

- [ ] Enable compression (Gzip/Brotli) on your hosting platform
- [ ] Configure CDN for static assets
- [ ] Set appropriate cache headers (already configured in `vercel.json`)
- [ ] Enable HTTP/2 or HTTP/3
- [ ] Configure SSL/TLS certificate
- [ ] Set up monitoring and error tracking

---

## Continuous Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that automatically:

- Runs linting on every push
- Builds the project to verify compilation
- Runs Lighthouse CI on pull requests
- Uploads build artifacts

Most hosting platforms (Vercel, Netlify, Cloudflare Pages) automatically deploy when you push to the main branch.

---

## Troubleshooting

### Build Failures

If the build fails during deployment:

1. **Check Node.js version**: Ensure the platform uses Node.js 18.x or higher
2. **Clear cache**: Most platforms have a "Clear cache and retry" option
3. **Verify dependencies**: Run `npm ci` locally to ensure `package-lock.json` is correct
4. **Check build logs**: Review the deployment logs for specific error messages

### Routing Issues

If direct URLs return 404 errors:

1. **Verify SPA fallback**: Ensure your hosting platform redirects all routes to `index.html`
2. **Check base path**: If deploying to a subdirectory, configure the `base` option in `vite.config.ts`
3. **Review redirects**: Confirm redirect rules are properly configured

### Performance Issues

If the site loads slowly:

1. **Enable compression**: Verify Gzip or Brotli compression is enabled
2. **Check CDN**: Ensure static assets are served from a CDN
3. **Optimize images**: Use WebP format and appropriate sizes
4. **Review bundle size**: Run `npm run build` and check the output for large chunks

---

## Support

For deployment issues or questions:

- **GitHub Issues**: [Report a problem](https://github.com/rajshah9305/rajai-spark-to-sentience/issues)
- **Email**: hello@rajai.org
- **Documentation**: Check platform-specific documentation for your hosting provider

---

## Conclusion

This application is designed to deploy seamlessly to any modern hosting platform. Vercel is recommended for the best experience, but all options listed above will work excellently. Choose the platform that best fits your workflow and requirements.

Happy deploying! 🚀
