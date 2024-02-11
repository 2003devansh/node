const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testingendgame");
// it will create a databse name as testingendgame

const userSchema =   mongoose.Schema({
  username : String,
  nickname : String,
 description: String,
  categories : {
    type : Array,
    default: [] // this is created because of the question 2
  
  },
  datecreated: {
    type: Date,
    default: Date.now()
    // this is crerated because of th equestion 3
  }
  
})

mongoose.model("user",userSchema);

// question 1 :->
// how can i perform a case-insensitive search in mongose? 

// question 2 :-> 
// how can i search for  document with a specific data range in mongoose?

// question 3:->
// hox can i search for document with a specific data range in mongoose?

// quwstion 4 :->
//how can i filter document based on the existence of a field in mongoose?

// question 5 :->
// hox can i filter document based on a specific fields length in mongoose ?
