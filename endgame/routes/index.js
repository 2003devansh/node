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

// answer of th equestion 1
router.get("/find",async function(req,res){
  var RegEx= new RegExp("^DevanSh$","i");
  // regexp names ko insensitive bna deta hai
  let user = await userModel.find({username: RegEx })
  res.send(user)
})


router.get("/alluser", async function(req,res){
  let alluserdata = await userModel.find();
  res.send(alluserdata);
})

// answer of question 2
router.get("/particularcate" , async function(req,res){
  let user = await userModel.find({categories: { $all: ['gsap']}});
  res.send(user);
})

// answer of the question 3
router.get("/findate", async function(req,res){
  var date1 = new Date('2024-02-11');
  var date2 = new Date('2024-02-11');

  let user = await userModel.find({datecreated : {$gte : date1,$lte: date2}});
  res.send(user);
  // gte = greator then equal to
  // lte = less then equal to 
})





module.exports = router;


// flash messages la mtlb server le kisi route mai data banana 
// aur uss data ko kisi aur route mai use kar pana 

// agar login ho jaye to login ke baad profile page dikhado
// agr naa ho to fir , kisi aur route prr direct kardo
// jaise ki /error par vha par dikhao failed

// question 1:->
// how can i perform a case insensitive in mongoose


// question 2:->
// how do i find the document where an array field contains all 
// of a set of value?

// question 3:-> 
// how can i search for the document with a specific date range in mongoose?

