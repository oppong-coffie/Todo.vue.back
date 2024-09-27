const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
    },     
});

const TaskModel = mongoose.model('tasks', taskSchema);

module.exports = TaskModel;
