# Screenshots Directory

This directory should contain screenshots of the running Docker Compose application.

## Required Screenshots

1. **docker-compose-status.png** - Screenshot of `docker-compose ps` showing running containers
2. **frontend-app.png** - Screenshot of the React frontend application at http://localhost:3000
3. **backend-api.png** - Screenshot of the backend API at http://localhost:5000

## How to Take Screenshots

1. Run the application:
   ```bash
   ./run.sh
   ```

2. Take screenshots of:
   - Frontend application (http://localhost:3000)
   - Backend API (http://localhost:5000)
   - Docker Compose status (`docker-compose ps`)

3. Save screenshots in this directory with the names above

## Example Commands for Screenshots

```bash
# Check running containers
docker-compose ps

# View application logs
docker-compose logs

# Test backend API
curl http://localhost:5000/api/users

# Test frontend (open in browser)
# http://localhost:3000
```
