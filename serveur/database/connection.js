const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


 var connection = mongoose.connect("mongodb+srv://dhia:123@trucksy.a7cts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl=true" ,{ useNewUrlParser: true, useUnifiedTopology: true,  useMongoClient: true  },(err)=>{
     console.log('db connected')
 })
  const db = mongoose.connection;
  console.log(db)
// // db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
    console.log('db connected');
 })

// Or `createConnection`
// var promise = mongoose.createConnection("mongodb+srv://dhia:123@trucksy.a7cts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl=true", {
//   useMongoClient: true,
//   /* other options */
// },(db)=>{
//     console.log(db)
// });
// promise.then(function(db) {
//     db.once("open", function(){
//             console.log('db connected');
//      }
//   )
// })

// var test = async()=>{
//     const newprod = new myproduct({
//       name: "req.body.name",
//       imageurl: "req.body.imageurl",
//       description: "req.body.description",
//       price: "req.body.price",
//       type: "req.body.type",
//     });
    
//     try {
//       const saveprod = await newprod.save();
//       console.log('product saved!')
//     }catch(err){
//       console.log(err)
//     }
//     }
//     let product = connection.then(async ()=>{
//         const newprod = new myproduct({
//             name: "req.body.name",
//             imageurl: "req.body.imageurl",
//             description: "req.body.description",
//             price: "req.body.price",
//             type: "req.body.type",
//           });
          
//           try {
//             const saveprod = await newprod.save();
//             console.log('product saved!   sss')
//           }catch(err){
//             console.log(err)
//           }
//     })
