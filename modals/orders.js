

let mongoose = require('mongoose');

// Orders schema
let OrderSchema = new mongoose.Schema(
    {
        owner: String,
        title: String,
        dic: String,
        price: String,
        size: String,
        img: String
    }
)

let Orders = mongoose.model('order', OrderSchema);

module.exports = { Orders };