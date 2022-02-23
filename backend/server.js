const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connection');
const parser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
connectDB();
const app = express();
app.use(parser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/tasks', taskRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on PORT ${process.env.PORT}`);
});
