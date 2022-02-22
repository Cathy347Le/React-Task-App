const express = require('express');
const connectDB = require('./db/connection');
const tasks = require('./data/tasks');

connectDB();
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/api/tasks/:id', (req, res) => {
  res.json(tasks.find((p) => p.id == req.params.id));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
