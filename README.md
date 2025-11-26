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
The API will be available at `http://localhost:3000`
