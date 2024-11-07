// backend/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Create a new task
router.post('/', async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.status(201).json(newTask);
});

// Update a task
// Update a task
router.put('/:id', async (req, res) => {
  const { title, description, completed } = req.body;
  const task = await Task.findByIdAndUpdate(
    req.params.id, 
    { title, description, completed }, 
    { new: true }
  );
  res.json(task);
});


// Delete a task
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
