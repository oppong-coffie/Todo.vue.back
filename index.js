const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const route = require('./routers/route');
require('dotenv').config(); // Make sure to install dotenv and use it for environment variables

// Check if MongoDB URI is available
if (!process.env.MONGODB_URI) {
    console.error("MongoDB URI not found in environment variables");
    process.exit(1); // Exit the process if no URI is provided
}

// create express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/', route);

// MongoDB connection okay so have you been able to do it at vercel? i tested it with postman. open the database collection for me 
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connection successful');
    app.listen(5001, () => {
        console.log(`Server is running on port 5000`);
    });
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process on connection failure
});
