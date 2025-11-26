import express from 'express';
import sqlite3 from 'sqlite3';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Task Manager API is running!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
