#!/bin/bash

echo "🐳 Docker Compose Application Setup"
echo "=================================="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first:"
    echo "   sudo apt update"
    echo "   sudo apt install -y docker.io docker-compose"
    echo "   sudo usermod -aG docker \$USER"
    echo "   # Then logout and login again"
    exit 1
fi

# Check if Docker Compose is available
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not available. Please install docker-compose:"
    echo "   sudo apt install -y docker-compose"
    exit 1
fi

echo "✅ Docker is installed"

# Create screenshots directory
mkdir -p screenshots

echo "🔨 Building and starting the application..."

# Try docker-compose first, then docker compose
if command -v docker-compose &> /dev/null; then
    echo "Using docker-compose..."
    docker-compose up --build -d
else
    echo "Using docker compose..."
    docker compose up --build -d
fi

echo ""
echo "🚀 Application is starting up..."
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:5000"
echo ""
echo "📸 To take screenshots:"
echo "   1. Open http://localhost:3000 in your browser"
echo "   2. Take a screenshot of the frontend application"
echo "   3. Open http://localhost:5000 in your browser"
echo "   4. Take a screenshot of the backend API"
echo "   5. Run 'docker-compose ps' to show running containers"
echo "   6. Take a screenshot of the docker-compose status"
echo ""
echo "🛑 To stop the application:"
echo "   docker-compose down"
echo ""
echo "📋 To view logs:"
echo "   docker-compose logs"
