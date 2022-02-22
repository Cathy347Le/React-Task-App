const { Task } = require('../models/taskModel');

Task.find({}).remove(() => {
  Task.create({
    title: 'Wash dishes',
    date: 'Monday',
    completed: false,
  });
  Task.create({
    title: 'Hang floating shelves',
    date: 'Friday',
    completed: false,
  });
  Task.create({
    title: 'Vaccum',
    date: 'Saturday',
    completed: false,
  });
});
