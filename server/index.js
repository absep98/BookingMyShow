const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/userRoutes');
const theatreRoutes = require('./routes/theatreRoutes');
require('dotenv').config();

mongoose.connect('mongodb+srv://absep98:0YbxQo6Zp71L3eQv@cluster0.nn6miwl.mongodb.net/explore?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to database');
})
.catch(() => {
    console.log('Connection failed');
})

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/users',  userRoutes);
app.use('/api/theatres',  theatreRoutes);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

// in order to integrate mail service, we need to install nodemailer and sendgrid