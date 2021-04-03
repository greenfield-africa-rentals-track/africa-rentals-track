const mongoose = require('mongoose');
// const URI = require('../config/default.json')
mongoose.connect("mongodb://localhost:27017/trucksy" ,{ useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.Promise = require('bluebird');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
    console.log('db connected');
})

module.exports = db;