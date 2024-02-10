var express = require('express');
var router = express.Router();
const userModel = require("./users");
const session = require('express-session');

/* GET home page. */
router.get("/",function(req,res){
  res.cookie("age",25);
  res.render("index")
})

router.get("/read",function(req,res){
  console.log(req.cookies);
  res.send("check")
})

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
 
router.get("/",function(req,res){
  req.session.ban = "hello" ;
  res.render("index");
})

router.get("/checkban",function(req,res){
  if(req.session.ban === true){
    res.send("you are banned")

  }
})

router.get("/removeban", function(req,res){
  req.sessionStore.destroy(function(err){
    if (err) throw err;
    res.send("ban removed")

  })
})



module.exports = router;
