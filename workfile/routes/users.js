const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice")
// yeh database create karta hai 

// yeh document ka data hai 
const userschema = mongoose.Schema({
    username : String,
    name: String,
    age : Number,
})

//yrh collection banat hai

module.exports= mongoose.model("user",userschema);

//practice db mai "user" naam se ek db ban jayega