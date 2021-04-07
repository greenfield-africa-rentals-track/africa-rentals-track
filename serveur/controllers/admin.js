const Admin = require('../models/admin');
const product=require('../models/product');
const db = require('../database/db');
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
        console.log("delete", req.params.id)
        
        product.remove({_id:  req.params.id},(err,results)=>{
            if(err){
                res.send(err)
            }else{res.status(200).send(results)
            }
        })
    },

    update:(req,res)=>{
        console.log("updated", req.params.id)
        product.put({_id:  req.params.id},(err,results)=>{
            if(err){
                res.send(err)
            }else{res.status(200).send(results)
            }
        })

    }

}

