const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testingendgame");

mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories : {
    type : Array,
    default: []
  },
  datecreated : {
    type: Date,
    default : Date.now()
  }

})

mongoose.modelNames("user",userSchema);