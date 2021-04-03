const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    imageurl: String,
    description: String,
    price: String,
    type: String
});

module.exports = mongoose.model("product", ProductSchema)
