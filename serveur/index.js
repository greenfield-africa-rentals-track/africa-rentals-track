const express = require('express');
const bodyParser = require('body-parser');
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



// app.use("/")
// app.get('/', (req, res)=> {
 


// });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});