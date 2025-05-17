#!/bin/bash
echo "===== CareerHub Job Listings Application ====="
echo "Setting up environment..."
export NODE_OPTIONS=--openssl-legacy-provider

echo "Starting application..."
npm start

echo ""
echo "If the application failed to start, try:"
echo "1. Install Node.js 16.x: curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && sudo apt-get install -y nodejs"
echo "2. Run 'npm install' to install dependencies"
echo ""
read -p "Press Enter to exit"
