const mongoose = require('mongoose');
const jiji = "mongodb+srv://abidijihed:Ji31826832@cluster0.lbhsv.mongodb.net/trucksy?retryWrites=true&w=majority"
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.Promise = require('bluebird');
const dbd = mongoose.connect( jiji,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if (err) throw err;
})
const db = mongoose.connection;

module.exports = db;