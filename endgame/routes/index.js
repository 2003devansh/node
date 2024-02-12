var express = require('express');
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get("/failed", async function(req,res){
  req.flash("age",12);
  req.flash("name","devansh")
  res.send("bangya")
})

router.get("/checkaro",function(req,res){
  console.log(req.flash("age"),req.flash());
  res.send("check karlo backend ke terminal pe");
})

router.get("/create",async function(req,res){
  let userdata = await userModel.create({
    username: "rashi",
    nickname: "rashoi mishra",
    description : "hello everyone ",
    categories : ['js','node','react']
  });
  res.send(userdata)
})

module.exports = router;


// flash messages la mtlb server le kisi route mai data banana 
// aur uss data ko kisi aur route mai use kar pana 

// agar login ho jaye to login ke baad profile page dikhado
// agr naa ho to fir , kisi aur route prr direct kardo
// jaise ki /error par vha par dikhao failed

// question 1:->
// how can i perform a case insensitive in mongoose
