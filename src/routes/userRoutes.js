const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Register
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ message: 'User exists' });
        const hash = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hash });
        await user.save();
        res.status(201).json({ message: 'User created' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ message: 'Invalid credentials' });
        res.json({ message: 'Login successful', user: { id: user._id, username: user.username, email: user.email } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get user profile & bookings
const Booking = require('../models/Booking');
router.get('/:id/profile', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        const bookings = await Booking.find({ user: req.params.id }).populate({
            path: 'show',
            populate: { path: 'movie' }
        });
        res.json({ user, bookings });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
