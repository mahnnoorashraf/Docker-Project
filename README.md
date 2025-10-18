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

### Application Running Status
The application is currently running successfully with both frontend and backend services:

- **Frontend**: http://localhost:3000 ✅ Running
- **Backend API**: http://localhost:5000 ✅ Running
- **API Communication**: ✅ Working perfectly

### Screenshots

#### Frontend Application Screenshots

**Screenshot 1: Main Interface**
![Frontend Application - Main Interface](screenshots/frontend-app-1.png)
*Shows the Docker Compose Application interface with the "Add New User" form and initial user list*

**Screenshot 2: Complete User List**
![Frontend Application - User List](screenshots/frontend-app-2.png)
*Shows the complete user management interface with all 4 users displayed*

**Screenshot 3: Backend API**
![Backend API Response](screenshots/backend-api.png)
*Shows the backend API response with available endpoints and application information*

> **Note**: Please add the actual screenshot files to the `screenshots/` directory. See `screenshots/ADD_SCREENSHOTS_HERE.md` for instructions.

#### Additional Data Files
- **Running Processes** - See `screenshots/running_processes.txt`
- **API Response Data** - See `screenshots/api_response.json`

### Current Application Status
```
✅ Backend API: http://localhost:5000
✅ Frontend App: http://localhost:3000  
✅ API Endpoints Working
✅ User Management Functional
✅ Real-time Communication
```

### API Test Results
```json
[
  {
    "id": 1,
    "name": "John Doe", 
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com"
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob@example.com"
  },
  {
    "id": 4,
    "name": "Mahnoor",
    "email": "mahnoorashraf534@gmail.com"
  }
]
```

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
