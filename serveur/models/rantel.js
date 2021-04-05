const mongoose = require('mongoose');

const rantelSchema = new mongoose.Schema({
    Startdate: String,
    Enddate: String,
    quantity: Number,
});

module.exports = mongoose.model("rantel", rantelSchema)