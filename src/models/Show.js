const mongoose = require('mongoose');
const showSchema = new mongoose.Schema({
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    city: String,
    theatre: String,
    date: String,
    time: String,
    availableSeats: [String]
});
module.exports = mongoose.model('Show', showSchema);
