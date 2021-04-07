const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: String,
    imageurl: String
    
   
});

module.exports = mongoose.model("product-card", cardSchema)