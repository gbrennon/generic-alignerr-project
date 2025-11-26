# Task Manager API

A simple task management API built with TypeScript, Express, and SQLite.

## Tech Stack
- **TypeScript** - Type-safe JavaScript
- **Express** - Web framework for Node.js
- **SQLite** - File-based SQL database
- **Drizzle ORM** - TypeScript-first ORM

## Project Structure
```
src/              # Application source
  index.ts        # Express server and API routes
  schema.ts       # Database schema definitions
tests/            # Unit and integration tests
docs/             # Documentation
  TASK_1_setup_task_manager.md # Setup guide
  TASK_2_rest_api.md # REST API documentation
```

## API Documentation
See [docs/TASK_2_rest_api.md](docs/TASK_2_rest_api.md) for full endpoint reference.

## Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/task-manager-api.git
cd task-manager-api
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
npx ts-node src/index.ts
```

## Usage

### List all tasks
```bash
curl http://localhost:3000/tasks
```

### Create a new task
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}' http://localhost:3000/tasks
```

### Get a single task
```bash
curl http://localhost:3000/tasks/1
```

### Update a task
```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": true
}' http://localhost:3000/tasks/1
```

### Delete a task
```bash
curl -X DELETE http://localhost:3000/tasks/1
