const Rantel = require('../models/rantel');
module.exports={
    get:(req,res)=>{
        Rantel.find({},(err,doc)=>{
            res.send(doc)
        })
    },
    add:(req,res)=>{
           const myRantel = new Rantel(req.body)
           myRantel.save((err,doc)=>{
               if(err){
                   res.send(err)
               }else{
                   res.status(200).send(doc)
               }
           })
    }
}