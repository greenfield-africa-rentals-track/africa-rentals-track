const express = require('express');
const bodyParser = require('body-parser');
const  cors =require("cors")
const config =require("config")


const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/../client/dist/client'));



app.get('/', (req, res)=> {
 


});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});