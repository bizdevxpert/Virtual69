// Simple deployment script
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting build and deployment process...');

try {
  // Build the project
  console.log('📦 Building the project...');
  execSync('pnpm build', { stdio: 'inherit' });
  
  console.log('✅ Build completed successfully!');
  
  // The dist directory now contains the built files
  console.log('📂 Your built files are in the "dist" directory');
  console.log('You can deploy these files to any static hosting service like:');
  console.log('- Netlify');
  console.log('- Vercel');
  console.log('- GitHub Pages');
  console.log('- AWS S3');
  
  // List the files in the dist directory
  console.log('\n📋 Files ready for deployment:');
  const distPath = path.join(__dirname, 'dist');
  const files = fs.readdirSync(distPath);
  files.forEach(file => {
    const stats = fs.statSync(path.join(distPath, file));
    if (stats.isDirectory()) {
      console.log(`  📁 ${file}/`);
    } else {
      console.log(`  📄 ${file}`);
    }
  });
  
  console.log('\n🔍 To deploy manually:');
  console.log('1. Copy the contents of the "dist" directory');
  console.log('2. Upload to your hosting provider');
  
} catch (error) {
  console.error('❌ Error during build process:', error.message);
  process.exit(1);
}
