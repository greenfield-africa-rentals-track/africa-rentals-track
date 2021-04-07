const myproductcard =require('../models/card-prod.js')

module.exports={
  findcard :async function (req, res) {
    try {
      const products = await myproductcard.find({});
      res.send(products);
    } catch (error) {
      res.send(error);
    }
  },
  //dhia


createProductcard :async (req, res) => {
    const newprod = new myproductcard({
        name: req.body.name,
        imageurl: req.body.imageurl,
       
    });
   
    try {
        const saveprod = await newprod.save();
        res.send(saveprod);
    }catch(err){
        res.send("ERROR",err)
    }
}

}
