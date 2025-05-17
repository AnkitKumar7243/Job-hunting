# CareerHub - Job Listings Application

## ⚠️ IMPORTANT: Node.js Compatibility Notice

This application uses React 17 with an older version of React Scripts, which is **not compatible** with Node.js 17 or higher by default due to OpenSSL changes.

## Quick Start Guide

### Windows Users

1. **Double-click** the `run-app.bat` file
   - This will automatically set the required environment variables and start the app

2. **Alternative (PowerShell)**: Right-click `run-app.ps1` and select "Run with PowerShell"

### Command Line Users

```bash
# Install dependencies (first time only)
npm install

# Start the application
npm start
```

## Troubleshooting

### "Digital Envelope Routines::Unsupported" Error

If you see this error:

```
Error: error:0308010C:digital envelope routines::unsupported
```

This means you're using Node.js 17+ without the legacy OpenSSL provider. Solutions:

1. **Use our scripts** - They automatically set the required environment variables
2. **Downgrade Node.js** - Install Node.js 16.x from [nodejs.org](https://nodejs.org/dist/v16.20.0/)
3. **Set environment variable manually**:
   - Windows CMD: `set NODE_OPTIONS=--openssl-legacy-provider && npm start`
   - Windows PowerShell: `$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start`
   - Linux/macOS: `export NODE_OPTIONS=--openssl-legacy-provider && npm start`

## Deployment

### Vercel Deployment

1. Create a new project in the [Vercel Dashboard](https://vercel.com/new)
2. Import your GitHub repository
3. Configure the project:
   - Set Node.js Version to 16.x
   - Add Environment Variable: `NODE_OPTIONS` = `--openssl-legacy-provider`
4. Deploy

### Netlify Deployment

1. Create a new site in the [Netlify Dashboard](https://app.netlify.com/start)
2. Import your GitHub repository
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Environment variable: `NODE_OPTIONS` = `--openssl-legacy-provider`
4. Deploy

## About This Project

CareerHub is a job listings application that allows users to:
- Browse job listings by category
- Filter jobs by skills, roles, and experience levels
- Apply to jobs through an integrated application form

The application features a modern, responsive design with a clean user interface.

## Need Help?

If you continue to experience issues, try:
1. Clearing your npm cache: `npm cache clean --force`
2. Deleting node_modules and reinstalling: `rm -rf node_modules && npm install`
3. Using a Node.js version manager like nvm to switch to Node.js 16.x
