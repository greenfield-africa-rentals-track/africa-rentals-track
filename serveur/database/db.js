const mongoose = require('mongoose');
var fakeusers = require('../users.json')
var users = require('../models/userModule.js')

mongoose.connect("mongodb://localhost/trucksy")

const seedUsers = (fakeusers) => {
    users.insertMany(fakeusers, (err, result) => {
        if (err){
            console.log(err);
        }else {
            console.log(result)
        }
    })
}
seedUsers(fakeusers);