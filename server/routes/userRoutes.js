const express = require('express');
const router = express.Router();
const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/register', async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            res.send({
                success: false,
                message: 'User already exists'
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        const newUser = await User(req.body);
        await newUser.save();
        res.send({
            success: true,
            message: 'User created successfully'
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) {
            res.send({
                success: false,
                message: 'User not found,Please register'
            });
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.send({
                success: false,
                message: 'Invalid password'
            });
        }
        const token = jwt.sign({ userId : user._id }, `${process.env.SECRET_KEY}`, { expiresIn: '1d' });
        console.log(token);
        
        res.send({
            success: true,
            user: user,
            message: 'User logged in successfully',
            token: token,
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/get-current-user', authMiddleware , async (req, res) => {
    const user = await User.findById(req.body.userId).select("-password");
    console.log(user);
    res.send({
        success: true,
        message: 'User authorized successfully',
        data: user,
    })
});

module.exports = router;