@echo off
echo ===== CareerHub Job Listings Application =====
echo Setting up environment...
set NODE_OPTIONS=--openssl-legacy-provider

echo Starting application...
npm start

echo.
echo If the application failed to start, try:
echo 1. Install Node.js 16.x from https://nodejs.org/dist/v16.20.0/
echo 2. Run 'npm install' to install dependencies
echo.
pause
