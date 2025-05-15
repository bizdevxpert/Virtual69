# Netlify Deployment Guide

## Manual Deployment (Drag and Drop)

1. **Build your project**
   ```bash
   pnpm build
   ```
   This creates a `dist` directory with all your static files.

2. **Go to Netlify**
   - Log in to your Netlify account
   - Go to the "Sites" section

3. **Deploy your site**
   - Look for the deployment area (usually has text like "Drag and drop your site folder here")
   - Drag and drop the entire `dist` folder from your project directory
   - Important: Drag the folder itself, not a zip file and not individual files

4. **Wait for deployment**
   - Netlify will upload and deploy your site
   - You'll get a unique URL when it's done (like random-name-123456.netlify.app)

5. **Verify your site**
   - Click on the provided URL to check if your site is working correctly

## Troubleshooting

If your site appears blank:

1. **Check the Netlify logs**
   - Go to your site dashboard
   - Click on "Deploys" and then the most recent deploy
   - Check the deploy log for any errors

2. **Verify you uploaded the correct folder**
   - Make sure you uploaded the `dist` folder, not the project root

3. **Check for routing issues**
   - Ensure the `_redirects` file is in your `dist` folder
   - If not, add it to your `public` folder and rebuild

4. **Check browser console**
   - Open your site and check the browser console (F12) for any errors
   - Look for 404 errors on resources or JavaScript errors

## Alternative: Connect to Git Repository

For continuous deployment, you can connect Netlify to your Git repository:

1. Push your project to GitHub, GitLab, or Bitbucket
2. In Netlify, click "New site from Git"
3. Select your repository and configure:
   - Build command: `pnpm build`
   - Publish directory: `dist`
4. Click "Deploy site"

This way, Netlify will automatically rebuild and deploy your site whenever you push changes to your repository.
