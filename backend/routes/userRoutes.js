const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to add a new user (with optional avatar)
router.post('/', async (req, res) => {
    const { name, avatarUrl } = req.body;

    const newUser = new User({
        name,
        avatarUrl: avatarUrl || ''
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;