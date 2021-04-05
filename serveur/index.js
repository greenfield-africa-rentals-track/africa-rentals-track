const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const  cors =require("cors")
const config =require("config")
const adminRoutes = require('./routers/admin');
const prodrouter=require('./routers/product.router.js')
const  rantelRoutes = require('./routers/rantel');
// const db =require('./database/connection.js')
// const db = require('./database/connection.js')



const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/../client/dist/client'));


mongoose.connect('mongodb://localhost:27017/trucksy')
// mongoose.connect("mongodb+srv://dhia:123456@trucksy.foidx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.use("",adminRoutes);
app.use("",rantelRoutes)
app.use("/api/trucksy",prodrouter)
//dali
const AuthUserRouter = require('./routers/auth.user.router.js')
app.use("/api/trucksy", AuthUserRouter)

//dhia
app.use("/api/trucksy",prodrouter)



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});