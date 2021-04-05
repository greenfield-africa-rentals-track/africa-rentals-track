const Admin = require('../models/admin');
module.exports={
    get:(req,res)=>{
        Admin.find({},(err,doc)=>{
            res.send(doc)
        })
    },
    add:(req,res)=>{
           const myAdmin = new Admin(req.body)
           myAdmin.save((err,doc)=>{
               if(err){
                   res.send(err)
               }else{
                   res.status(200).send(doc)
               }
           })
    },
    delete:(req,res)=>{
        myAdmin.remove({ _id :req.body.id},(err,results)=>{
            if(err){
                res.send(err)
            }else{res.status(200).send(results)
            }
        })
    }

}
