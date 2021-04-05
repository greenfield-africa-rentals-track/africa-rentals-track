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

// mongoose.connect("mongodb+srv://dhia:123456@trucksy.foidx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
mongoose.connect('mongodb://localhost:27017/trucksy');
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dhia:123456@trucksy.foidx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log('daatabase conneceted')
// });


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