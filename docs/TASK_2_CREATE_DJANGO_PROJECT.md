# TASK 2: Create Django Project with Docker

## Summary
Successfully created a Python/Django project inside `src` directory and verified it runs in Docker container accessible at `localhost:8000`.

## Approach
1. Created basic Django project structure with `src/manage.py` and app configuration
2. Set up `Dockerfile.python` to use Python 3.12 slim image
3. Configured `docker-compose-python.yml` for app and PostgreSQL services
4. Verified the application runs via Docker Compose and is accessible in browser

## Challenges
- Initially had issues with Poetry installation in Docker
- Resolved Django import errors by simplifying Dockerfile to use pip directly
- Had to clean up unnecessary docker files for other languages

## Results
- Application successfully serves content at `localhost:8000`
- Docker container runs with no critical errors
- Project structure follows recommended organization

## References
- [Django Official Documentation](https://docs.djangoproject.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
