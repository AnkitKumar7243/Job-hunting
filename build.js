const { execSync } = require('child_process');

// Set the NODE_OPTIONS environment variable
process.env.NODE_OPTIONS = '--openssl-legacy-provider';

try {
  // Run the build command
  console.log('Building with NODE_OPTIONS=--openssl-legacy-provider...');
  execSync('react-scripts build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
