var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

 // if we are trying to login in some route 
 // agar login ho jaye to login page ke baad profile page dikhao 
 // agar naa ho to fir , mujhe is route se kisi aur route le jaao jaise
 // ki /error vha pe dikhao failed

 // we can not use data of one route to the other route 
 // thus we can use the flash message to get the data of
 // one route to the other route

 router.get('/failed',function(req,res){
  req.flash("age",12)
  res.send("ban gya")
  // jaise hi koi /failed route pe ayega to ek data banega age naam se jiski value hogi 12
 })

 router.get('/checkkaro',function(req,res){
  console.log(req.flash("age"));
  // acquiring data throgh flash
 })

module.exports = router;
