const UserModule = require('../models/userModule.js');


const createUser = async (req, res) => {

    //CREATE NEW USER
    // console.log('hello', req.body);
    const newUser = new UserModule({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
    });
    // try{
    //   UserModule.insertMany([newUser._doc]).then(e=>console.log(e))
    try {
        const saveUser = await newUser.save();
        res.send(saveUser);
    }catch(err){
        res.send("this is my error",err)
    }
}


module.exports.createUser = createUser



