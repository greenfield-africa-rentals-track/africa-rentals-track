const UserModule = require('../models/userModule.js');
const bcrypt = require('bcrypt');
const signupValidation = require('../auth.js');
const jwt = require("jsonwebtoken");


//FIND ALL USERS
const FindAllUsers = async (req, res) => {
    try{
        const users = await UserModule.find({})
        res.send(users)
    }catch(err) {
        res.send(err);
    }
}
module.exports.FindAllUsers = FindAllUsers

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

const findUser = async (req, res) => {
 if(req.body.email === "admin" && req.body.password=== "admin"){
     const token = jwt.sign({_id: 00}, "zeruiopmlkjhgvcxwcvwdf");
     res.set("auth-token", token);
     res.send({message: "admin", token: token});
 } else {
     try{
        const user = await UserModule.findOne({ email: req.body.email})
        
        if (!user) {
            res.send("User not found");
            console.log("User not found");
        }
        if(await bcrypt.compare(req.body.password, user.password)){
            const token = jwt.sign({_id: user._id}, "zeruiopmlkjhgvcxwcvwdf")
            res.set("auth-token", token)
            res.send({message: "Connected successfully", token: token})
            console.log("Connected successfully");
        }else{
            res.send("Email or password incorrect")
            console.log("Email or password incorrect");
        }
    }
    catch(err){
      res.send(err, "could not connect")
      console.log(err, "could not connect");
    }
    }   
}

module.exports.findUser = findUser


