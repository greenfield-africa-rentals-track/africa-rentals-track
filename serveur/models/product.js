const db = require('../database/connection');
const mongoose =require('mongoose')
const ProductSchema = mongoose.Schema({
    name: String,
    imageurl: String,
    description: String,
    price: String,
    type: String
});

module.exports= db.model("product", ProductSchema)

