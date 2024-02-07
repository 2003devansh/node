
const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log("hello from middleware");
    next();
})
// route chlne se phele middleware chlta hai 
// isliye yeh terminal pe dikhega
app.get("/",function(req,res){
    res.send("hey i am devansh");
})

app.get("/profile",function(req,res){
    res.send("hey i am devansh and this is my profile");
})

app.listen(3000);