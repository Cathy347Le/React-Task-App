const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');

//Display all tasks
router.get('/', (req, res) => {
  Task.find({})
    .then((tasks) => res.json(tasks))
    .catch((err) => console.log(err));
});

//Display single task
router.get('/:id', (req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => console.log(err));
});

//Add new task
router.post('/', (req, res) => {
  // const { title, date, completed } = req.body;
  Task.create(req.body).then((task) => res.json(task));
});

//Delete single task
router.delete('/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id).then((task) => res.json(task));
});

//Update single task
router.put('/:id', (req, res) => {
  Task.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((task) => res.json(task));
});

module.exports = router;
