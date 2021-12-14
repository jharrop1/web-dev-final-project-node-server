const mongoose = require('mongoose');
const likeSchema = mongoose.Schema({
    imdbId: String,
    profileId: mongoose.Schema.Types.ObjectId,
    profileName: String,
    dateCreated: Date
}, {collection: 'likes'});
module.exports = likeSchema;