const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    favoriteMovie: String,
    favoriteGenre: String,
    savedMovies: [{String}],
    following: [{String}],
    userLevel: {type: String, defaultValue: "basic"}
}, {collection: 'users'});
module.exports = userSchema;