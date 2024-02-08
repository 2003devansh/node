const express = require('express');
const app = express();

app.set("view engine","ejs");

// app.use(function(req,res,next){
//     console.log("midle ware working");
// next();
// })

// app.get('/',function(req,res){
//     res.send("im trying to learn express");
// })

// app.get('/profile',function(req,res){
//     res.send("this is a profile part")
// })


// app.get('/profile/:username',function(req,res){
//     res.send(`hello from ${req.params.username}`)
// })

app.get("/",function(req,res){
    res.render("index");
})
// this is for ejs 
// use render instead of send and dont put ejs in  index file
app.listen(2000)
