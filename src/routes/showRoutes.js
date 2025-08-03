const express = require('express');
const router = express.Router();
const Show = require('../models/Show');

// Get shows for a movie
router.get('/movie/:movieId', async (req, res) => {
    try {
        const shows = await Show.find({ movie: req.params.movieId });
        res.json(shows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a show
router.post('/', async (req, res) => {
    const { movie, city, theatre, date, time, availableSeats } = req.body;
    try {
        const show = new Show({ movie, city, theatre, date, time, availableSeats });
        await show.save();
        res.status(201).json(show);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
