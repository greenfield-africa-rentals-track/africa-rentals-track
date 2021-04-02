const controller =require('../controllers/product.controller.js')
const  express =  require("express");
const router = express.Router();


router.get("/products", controller.findAll);


module.exports =  router; 
