var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/",function(req,res){
  res.render("index")
})

//db ke collection asynchronus hote hai toh uskio phele run karwaneke liye/
// hum async await ka use karte hai

router.get("/create",async function(req,res){
const createuser =  await userModel.create({
  username : "devansh",
  age: 25,
  name:"faujdar"
 });


 res.send(createuser)

})




router.get("/alluser",async function(req,res){
  let alluser = await userModel.find();
  res.send(alluser)
 })

 
router.get("/finduser",async function(req,res){
  let find1 = await userModel.findOne({username: "devansh"});
  res.send(find1)
 })

 router.get("/delete", async function(req,res){
   let deleteuser = await userModel.findOneAndDelete({
  username : "devansh"
   })
   res.send(deleteuser)

 })
 

module.exports = router;
