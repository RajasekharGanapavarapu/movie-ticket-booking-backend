const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Show = require('../models/Show');

// Book tickets
router.post('/', async (req, res) => {
    const { user, show, seats } = req.body;
    try {
        const showDoc = await Show.findById(show);
        // Remove booked seats from availableSeats
        showDoc.availableSeats = showDoc.availableSeats.filter(
            seat => !seats.includes(seat)
        );
        await showDoc.save();

        const booking = new Booking({ user, show, seats });
        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get bookings for user
router.get('/user/:userId', async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.params.userId }).populate({
            path: 'show',
            populate: { path: 'movie' }
        });
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
