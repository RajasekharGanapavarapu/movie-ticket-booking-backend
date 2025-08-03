const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    show: { type: mongoose.Schema.Types.ObjectId, ref: 'Show', required: true },
    seats: [String],
    bookedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Booking', bookingSchema);
