const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const  cors =require("cors")
const config =require("config")
const router=require('./routers/product.router.js')



const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/../client/dist/client'));
app.use("/api/trucksy",router);

mongoose.connect('mongodb://localhost:27017/trucksy');

//dali
const AuthUserRouter = require('./routers/auth.user.router.js')

// app.use("/")
// app.get('/', (req, res)=> {
 


// });
//dali
//CREATE AUTHED USER
app.use("/api/trucksy", AuthUserRouter)



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});