const mongoose = require('mongoose');
const likeSchema = require('./like-schema');
const likeModel = mongoose
    .model('LikeModel', likeSchema);
module.exports = likeModel;