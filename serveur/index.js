const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const  cors =require("cors")
const config =require("config")
const adminRoutes = require('./routers/admin');
const router=require('./routers/product.router.js')



const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/../client/dist/client'));
app.use("/api/trucksy",router);

mongoose.connect('mongodb://localhost:27017/trucksy');

app.use("",adminRoutes);

//dali
const AuthUserRouter = require('./routers/auth.user.router.js')
app.use("/api/trucksy", AuthUserRouter)



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});