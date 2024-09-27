const UserModel = require('../models/UserModel');
const TaskModel = require('../models/TaskModel');

// create user
const createUser = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const user = await UserModel.create({name, email, password});
        res.status(200).json({message: 'User created successfully', user});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const user = await UserModel.findOne({ email, password });
        if (!user) {
            return res.status(400).json({ message: 'Email or password not found' });
        }

        res.status(200).json({ message: 'User logged in successfully', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// add task
const addTask = async (req, res) => {
    const { title } = req.body; // Ensure you're using 'title' or change it to 'task'
    try {
        const task = await TaskModel.create({ title }); // Save the task to the database
        res.status(201).json({ message: 'Task created successfully', task }); // Change to 201
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors
    }
};


// get tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 

// delete task
const deleteTask = async (req, res) => {
    const { id } = req.params; // Change to 'id' for clarity
    try {
        const deletedTask = await TaskModel.findByIdAndDelete(id); // Attempt to delete the task
        if (!deletedTask) {
            // Check if the task was found and deleted
            return res.status(404).json({ error: 'Task not found' }); // Return 404 if not found
        }
        res.status(200).json({ message: 'Task deleted successfully' }); // Return success response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Return error response
    }
};


module.exports = {
    createUser,
    loginUser,
    getTasks,
    addTask,
    deleteTask
};