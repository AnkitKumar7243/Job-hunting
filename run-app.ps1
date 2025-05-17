Write-Host "===== CareerHub Job Listings Application =====" -ForegroundColor Cyan
Write-Host "Setting up environment..." -ForegroundColor Yellow
$env:NODE_OPTIONS = "--openssl-legacy-provider"

Write-Host "Starting application..." -ForegroundColor Green
npm start

Write-Host ""
Write-Host "If the application failed to start, try:" -ForegroundColor Red
Write-Host "1. Install Node.js 16.x from https://nodejs.org/dist/v16.20.0/" -ForegroundColor Red
Write-Host "2. Run 'npm install' to install dependencies" -ForegroundColor Red
Write-Host ""
Read-Host "Press Enter to exit"
