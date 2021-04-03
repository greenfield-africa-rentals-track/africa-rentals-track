const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const  cors =require("cors")
const config =require("config")
const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/../client/dist/client'));
mongoose.connect('mongodb://localhost:27017/trucksy');

//dali
const AuthUserRouter = require('./routers/auth.user.router.js')

//dali
//CREATE AUTHED USER
app.use("/api/trucksy", AuthUserRouter)



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});