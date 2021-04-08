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
        product.remove({_id:  req.params.id},(err,results)=>{
            if(err){
                res.send(err)
            }else{res.status(200).send(results)
            }
        })
    },




    update: (req, res) => {
        if (!req.body) {
          return res.status(400).send({
            message: "data can not be empty"
          })
        }
      
        const id = req.params.id;
      
        product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `cannot update  id=${id}`
              });
            } else res.send({ message: "product was updated successfully." } )
            console.log(res.data)
          })
          .catch(err => {
            res.status(500).send({
              message: "Error  with id=" + id
            });
          });
      }


}

