# Task Manager REST API Documentation

## Endpoints

### GET /tasks
Returns all tasks.

### POST /tasks
Creates a new task. Expected JSON body:
```json
{
  "title": "string",
  "description": "string"
}
```

### GET /tasks/:id
Returns a single task by ID.

### PUT /tasks/:id
Updates a task by ID. Expected JSON body:
```json
{
  "title": "string",
  "description": "string",
  "completed": boolean
}
```

### DELETE /tasks/:id
Deletes a task by ID.
