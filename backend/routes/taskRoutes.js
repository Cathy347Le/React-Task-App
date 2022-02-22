const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');

router.get('/', (req, res) => {
  Task.find({})
    .then((tasks) => res.json(tasks))
    .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => console.log(err));
});

module.exports = router;
