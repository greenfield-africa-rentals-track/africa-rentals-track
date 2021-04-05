const UserModule = require('../models/userModule.js');
const bcrypt = require('bcrypt');
const signupValidation = require('../auth.js')

const createUser = async (req, res) => {
    //VALIDATE THE DATA
    // const { error } = signupValidation(req.body);
    // if (error) return res.send(error)
    //CHECK IF THE USER IS ALREADY IN THE DATABASE   
     const emailExist = await UserModule.findOne({ email: req.body.email});
     if(emailExist) return res.send("Email already exist")
    //CREATE NEW USER
    const newUser = new UserModule({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
    });
    try {
        const saveUser = await newUser.save();
        res.send(saveUser);
        console.log("success");
    }catch(err){
        res.send(err)
    }
}


module.exports.createUser = createUser



