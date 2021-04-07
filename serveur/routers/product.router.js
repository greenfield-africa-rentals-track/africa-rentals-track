const controller =require('../controllers/product.controller.js')
const  express =  require("express");
const router = express.Router();


router.get("/products", controller.findAll);
router.post("/products",controller.createProduct)
router.get("/products/:id",controller.findOneProduct )

module.exports =  router; 
