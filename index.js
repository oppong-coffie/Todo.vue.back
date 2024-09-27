const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const route = require('./routers/route');

// create express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/', route);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/vue', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connection successful');
    app.listen(5000, () => {
        console.log(`Server is running on port 5000`);
    });
});

