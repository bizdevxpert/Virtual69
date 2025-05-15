# GitHub Manual Upload Guide

## Option 1: Using Git Commands (Recommended)

### 1. Install Git (if not already installed)
You can download Git from [git-scm.com](https://git-scm.com/downloads)

### 2. Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "bizdevxperts-landing")
4. Choose public or private
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

### 3. Initialize Git in Your Project
Open a terminal/command prompt in your project folder and run:

```bash
# Initialize Git repository
git init

# Add all files to staging
git add .

# Commit the files
git commit -m "Initial commit"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

Note: If your default branch is "master" instead of "main", use:
```bash
git push -u origin master
```

## Option 2: GitHub Web Interface Upload

If you can't use Git commands, you can upload files through the GitHub web interface:

1. Create a new repository on GitHub as described above
2. After creating the repository, you'll see a page with setup instructions
3. Click on the "uploading an existing file" link
4. You can now drag and drop files or use the file selector

**Important limitations:**
- You can only upload up to 100 files at once
- Each file must be under 25MB
- You cannot upload folders, only individual files

For your project, this means:
1. You'll need to extract your zip file locally
2. Upload files in batches
3. Recreate the folder structure manually

## Option 3: GitHub Desktop

GitHub Desktop provides a user-friendly interface:

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. Choose "Add an Existing Repository from your Hard Drive"
4. Select your project folder
5. Create a repository on GitHub when prompted
6. Click "Publish repository"

## After Uploading to GitHub

Once your code is on GitHub, you can deploy to Netlify by:

1. Go to [Netlify](https://app.netlify.com/)
2. Click "New site from Git"
3. Select GitHub and authorize Netlify
4. Select your repository
5. Configure build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
6. Click "Deploy site"

This method has several advantages:
- Automatic deployments when you push changes
- Netlify handles the build process
- Preview deployments for pull requests
- Easy rollbacks to previous versions
