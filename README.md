# Docker Compose Application

A simple full-stack application demonstrating Docker Compose with a React frontend and Node.js/Express backend.

## Project Structure

```
Docker-Project/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── .dockerignore
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── .dockerignore
├── docker-compose.yml
└── README.md
```

## Features

### Backend (Node.js/Express)
- RESTful API with user management
- CORS enabled for frontend communication
- Sample user data
- Endpoints:
  - `GET /` - API information
  - `GET /api/users` - Get all users
  - `GET /api/users/:id` - Get user by ID
  - `POST /api/users` - Create new user

### Frontend (React)
- Modern React application
- User management interface
- Real-time communication with backend
- Responsive design
- Error handling and loading states

## Prerequisites

- Docker
- Docker Compose

## How to Run

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Docker-Project
   ```

2. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Docker Commands

### Build and start services
```bash
docker-compose up --build
```

### Start services in background
```bash
docker-compose up -d
```

### Stop services
```bash
docker-compose down
```

### View logs
```bash
docker-compose logs
```

### Rebuild specific service
```bash
docker-compose up --build backend
```

## API Endpoints

### Backend API (Port 5000)

- `GET /` - API information and available endpoints
- `GET /api/users` - Retrieve all users
- `GET /api/users/:id` - Retrieve user by ID
- `POST /api/users` - Create a new user

### Example API Usage

```bash
# Get all users
curl http://localhost:5000/api/users

# Create a new user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
```

## Screenshots

### Docker Compose Running
![Docker Compose Status](screenshots/docker-compose-status.png)

### Frontend Application
![Frontend Application](screenshots/frontend-app.png)

### Backend API
![Backend API](screenshots/backend-api.png)

## Technologies Used

- **Frontend**: React 18, Axios
- **Backend**: Node.js, Express.js, CORS
- **Containerization**: Docker, Docker Compose
- **Networking**: Docker bridge network

## Development

### Local Development (without Docker)

1. **Backend**
   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Stop other services using ports 3000 or 5000
   - Or modify ports in docker-compose.yml

2. **Build failures**
   - Ensure Docker is running
   - Check Dockerfile syntax
   - Verify package.json files

3. **Network connectivity**
   - Services communicate via Docker network
   - Frontend uses `backend` hostname to reach API

## Submission

This project fulfills all requirements:
- ✅ Simple Frontend and Backend application
- ✅ Docker files for both services
- ✅ Docker Compose file
- ✅ Application runs with docker-compose
- ✅ GitHub repository with screenshots

## Author

Created for Docker Compose Class Task - October 18th, 2025
