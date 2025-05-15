# Business Development Experts - Virtual Assistant Landing Page

This is a landing page for Business Development Experts' Virtual Assistant services.

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## Building for Production

```bash
# Build the project
pnpm build

# Preview the production build
pnpm preview
```

## Deployment Options

After building the project with `pnpm build`, you'll have a `dist` directory with static files that can be deployed to any hosting service:

### Option 1: Run the deployment helper

```bash
node deploy.js
```

This will build your project and show you the files ready for deployment.

### Option 2: Manual Deployment

Upload the contents of the `dist` directory to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

### Option 3: Quick Local Preview

To preview the production build locally:

```bash
pnpm preview
```

## Project Structure

- `src/components/` - React components
- `src/App.jsx` - Main application component
- `public/` - Static assets
