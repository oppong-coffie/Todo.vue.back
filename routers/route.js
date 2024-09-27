const express = require('express');
const router = express.Router();
const { createUser, loginUser, addTask, getTasks, deleteTask } = require('../controllers/control');

// create user
router.post('/create', createUser);

// login user
router.post('/login', loginUser);

// add task
router.post('/add', addTask);

// get tasks
router.get('/tasks', getTasks);

// delete task
router.delete('/delete/:id', deleteTask);

module.exports = router;

