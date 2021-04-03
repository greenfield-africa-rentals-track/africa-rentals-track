const mongoose = require('mongoose');
// const URI = require('../config/default.json')
mongoose.connect("mongodb://localhost:27017/trucksy" ,{ useNewUrlParser: true, useUnifiedTopology: true } )
// mongoose.Promise = require('bluebird');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
    console.log('db connected');
})

// const userSchema =  mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     email: String,
//     password: String,
//     phoneNumber: String
// });

// let userModel = mongoose.model("user", userSchema)

// const newUser = new userModel({
//     firstName: "req.body.firstName",
//     lastName:' req.body.lastName',
//     email: 'req.body.email',
//     password: 'req.body.password',
//     phoneNumber: 'req.body.phoneNumber',
// });
// newUser.save((err,res)=>console.log(res))

module.exports = db;