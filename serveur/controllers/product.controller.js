const myproduct =require('./models/product.js')

module.exports.findAll = async function (req, res) {
    try {
      const products = await myproduct.find({});
      res.send(products);
    } catch (error) {
      res.send(error);
    }
  };