const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    image: String,
    genre: String
});
module.exports = mongoose.model('Movie', movieSchema);
