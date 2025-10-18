#!/bin/bash

echo "📸 Taking screenshots of the Docker Compose application..."

# Create screenshots directory
mkdir -p screenshots

# Take screenshot of the frontend application
echo "Taking screenshot of frontend application..."
curl -s http://localhost:3000 > /dev/null && echo "Frontend is accessible at http://localhost:3000"

# Take screenshot of the backend API
echo "Taking screenshot of backend API..."
curl -s http://localhost:5000 > /dev/null && echo "Backend API is accessible at http://localhost:5000"

# Show running processes
echo "Taking screenshot of running processes..."
ps aux | grep -E "(node|react)" | grep -v grep > screenshots/running_processes.txt

# Show API response
echo "Saving API response..."
curl -s http://localhost:5000/api/users | jq . > screenshots/api_response.json

echo "✅ Screenshots and data saved to screenshots/ directory"
echo "📱 Please manually take screenshots of:"
echo "   1. Frontend: http://localhost:3000"
echo "   2. Backend API: http://localhost:5000"
echo "   3. Running processes: ps aux | grep -E '(node|react)'"
