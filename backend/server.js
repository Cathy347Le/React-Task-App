const express = require('express');
const connectDB = require('./db/connection');
const taskRoutes = require('./routes/taskRoutes');

connectDB();
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
