import express from 'express';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import betterSqlite3 from 'better-sqlite3';
import { eq } from 'drizzle-orm';
import * as schema from './schema';

const db = drizzle(betterSqlite3('./sqlite.db'), { schema });
console.log('Database initialized successfully');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    console.log('Root endpoint hit');
    res.send('Task Manager API is running!');
});

app.get('/tasks', (req, res) => {
    console.log('Fetching tasks...');
    try {
        const tasks = db.select().from(schema.tasks).all();
        res.json(tasks || []);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/tasks', (req, res) => {
    console.log('Create task endpoint hit');
    const { title, description } = req.body;
    const newTask = db.insert(schema.tasks).values({ title, description }).returning().get();
    res.status(201).json(newTask);
});

app.get('/tasks/:id', (req, res) => {
    console.log('Get task by id endpoint hit');
    const { id } = req.params;
    const task = db.select().from(schema.tasks).where(eq(schema.tasks.id, Number(id))).get();
    if (!task) {
        res.status(404).send('Task not found');
        return;
    }
    res.json(task);
});

app.put('/tasks/:id', (req, res) => {
    console.log('Update task endpoint hit');
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updatedTask = db.update(schema.tasks)
        .set({ title, description, completed })
        .where(eq(schema.tasks.id, Number(id)))
        .returning()
        .get();

    if (!updatedTask) {
        res.status(404).send('Task not found');
        return;
    }
    res.json(updatedTask);
});

app.delete('/tasks/:id', (req, res) => {
    console.log('Delete task endpoint hit');
    const { id } = req.params;
    db.delete(schema.tasks).where(eq(schema.tasks.id, Number(id))).run();
    res.status(204).send();
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
});
