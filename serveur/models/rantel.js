const mongoose = require('mongoose');

const rantelSchema = new mongoose.Schema({
    startday: String,
    endday: String,
    quantity: String,
});

module.exports = mongoose.model("user", rantelSchema)