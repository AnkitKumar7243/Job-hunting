/**
 * Universal script to run the application in any environment
 * This handles the OpenSSL legacy provider issue with Node.js 17+
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Determine if we're in a production environment
const isProduction = process.env.NODE_ENV === 'production';
const command = isProduction ? 'build' : 'start';

// Set the NODE_OPTIONS environment variable
process.env.NODE_OPTIONS = '--openssl-legacy-provider';
console.log(`Set NODE_OPTIONS to: ${process.env.NODE_OPTIONS}`);
console.log(`Running in ${isProduction ? 'production' : 'development'} mode`);
console.log(`Node.js version: ${process.version}`);

// Create a .env file if it doesn't exist
const envFile = path.join(__dirname, '.env');
if (!fs.existsSync(envFile)) {
  fs.writeFileSync(envFile, 'NODE_OPTIONS=--openssl-legacy-provider\n');
  console.log('Created .env file with NODE_OPTIONS');
}

// Create environment-specific .env files
const envDevFile = path.join(__dirname, '.env.development');
if (!fs.existsSync(envDevFile)) {
  fs.writeFileSync(envDevFile, 'NODE_OPTIONS=--openssl-legacy-provider\n');
  console.log('Created .env.development file');
}

const envProdFile = path.join(__dirname, '.env.production');
if (!fs.existsSync(envProdFile)) {
  fs.writeFileSync(envProdFile, 'NODE_OPTIONS=--openssl-legacy-provider\n');
  console.log('Created .env.production file');
}

try {
  // Run the appropriate command
  console.log(`Running: react-scripts ${command}`);
  execSync(`react-scripts ${command}`, { 
    stdio: 'inherit',
    env: { ...process.env, NODE_OPTIONS: '--openssl-legacy-provider' }
  });
} catch (error) {
  console.error(`Failed to ${command} application:`, error.message);
  
  // Provide helpful error messages
  if (error.message.includes('digital envelope routines')) {
    console.log('\n\n===== OPENSSL ERROR DETECTED =====');
    console.log('This error occurs with Node.js 17+ and older React applications.');
    console.log('\nTry one of these solutions:');
    console.log('1. Downgrade to Node.js 16.x');
    console.log('2. Run the app with the legacy OpenSSL provider:');
    
    if (os.platform() === 'win32') {
      console.log('   - CMD: set NODE_OPTIONS=--openssl-legacy-provider && npm start');
      console.log('   - PowerShell: $env:NODE_OPTIONS="--openssl-legacy-provider"; npm start');
    } else {
      console.log('   - export NODE_OPTIONS=--openssl-legacy-provider && npm start');
    }
    
    console.log('\nFor deployment:');
    console.log('- Add NODE_OPTIONS=--openssl-legacy-provider to your environment variables');
    console.log('================================\n');
  }
  
  process.exit(1);
}
