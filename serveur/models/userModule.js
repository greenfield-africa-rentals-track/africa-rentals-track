const db = require('../database/connection');
const mongoose =require('mongoose')
const bcrypt = require('bcrypt');
const userSchema =  mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String
});


userSchema.pre('save', async function (next){
    try{
        const salt = await bcrypt.genSalt(10)
        const hachedPassword = await bcrypt.hash(this.password, salt)
        this.password = hachedPassword;
        next();
    }catch(err){
        next(err);
    }
})

module.exports = db.model("user", userSchema)







