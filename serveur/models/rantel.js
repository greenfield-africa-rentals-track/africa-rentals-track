const db = require('../database/connection');
const mongoose =require('mongoose')
const rantelSchema =  mongoose.Schema({
    Startdate: String,
    Enddate: String,
    quantity: Number,
});

module.exports = db.model("rantel", rantelSchema)