const express = require('express');
const bodyParser = require('body-parser');
const  cors =require("cors")
const config =require("config")
const adminRoutes = require('./routers/admin');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/../client/dist/client'));

app.use(adminRoutes);
mongoose.connect('mongodb://localhost:27017/myapp');
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});