const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

mongoose.connect('mongodb+srv://absep98:<password>@cluster0.nn6miwl.mongodb.net/explore?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to database');
})
.catch(() => {
    console.log('Connection failed');
})

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/users',  userRoutes);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
