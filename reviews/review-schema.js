const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
    imdbId: String,
    profileId: mongoose.Schema.Types.ObjectId,
    profileName: String,
    review: String,
    dateCreated: Date
}, {collection: 'reviews'});
module.exports = reviewSchema;