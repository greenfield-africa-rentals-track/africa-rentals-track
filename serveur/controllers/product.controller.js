const myproduct =require('../models/product.js')

module.exports={
  findAll :async function (req, res) {
    try {
      const products = await myproduct.find({});
      res.send(products);
    } catch (error) {
      res.send(error);
    }
  },
  //dhia


createProduct :async (req, res) => {
    const newprod = new myproduct({
        name: req.body.name,
        imageurl: req.body.imageurl,
        description: req.body.description,
        price: req.body.price,
        type: req.body.type,
    });
   
    try {
        const saveprod = await newprod.save();
        res.send(saveprod);
    }catch(err){
        res.send("ERROR",err)
    }
},
findOneProduct: async (req, res) => {
try{
const product = await myproduct.find({ _id: req.params.id})
res.send(product)
}catch(err){
  res.send(err)
}
}

}

