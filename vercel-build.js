// This is a custom build script for Vercel deployment
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Log the current environment
console.log('Current NODE_OPTIONS:', process.env.NODE_OPTIONS);
console.log('Current NODE_VERSION:', process.version);

// Set the NODE_OPTIONS environment variable
process.env.NODE_OPTIONS = '--openssl-legacy-provider';
console.log('Set NODE_OPTIONS to:', process.env.NODE_OPTIONS);

try {
  // Run the build command
  console.log('Running build command...');
  execSync('react-scripts build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
  
  // Verify the build output
  const buildDir = path.join(__dirname, 'build');
  if (fs.existsSync(buildDir)) {
    console.log('Build directory exists:', buildDir);
    const files = fs.readdirSync(buildDir);
    console.log('Files in build directory:', files);
  } else {
    console.error('Build directory does not exist:', buildDir);
  }
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
