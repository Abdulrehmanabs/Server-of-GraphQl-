

let mongoose = require('mongoose');

let userSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
        first: String,
        last: String
    }
);

let Users = mongoose.model('user', userSchema);

module.exports = { Users }
