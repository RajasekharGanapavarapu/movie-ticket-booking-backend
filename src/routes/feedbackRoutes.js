const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Submit feedback
router.post('/', async (req, res) => {
    const { user, message } = req.body;
    try {
        const feedback = new Feedback({ user, message });
        await feedback.save();
        res.status(201).json(feedback);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all feedbacks (admin/FAQ)
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().populate('user', 'username email');
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
