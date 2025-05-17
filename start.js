// Custom start script for local development
const { execSync } = require('child_process');

// Set the NODE_OPTIONS environment variable
process.env.NODE_OPTIONS = '--openssl-legacy-provider';
console.log('Set NODE_OPTIONS to:', process.env.NODE_OPTIONS);

try {
  // Run the start command
  console.log('Starting development server...');
  execSync('react-scripts start', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to start development server:', error);
  process.exit(1);
}
