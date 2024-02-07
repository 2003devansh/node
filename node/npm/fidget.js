var figlet = require("fidlet");
figlet("hello devansh",function(err,data){
    if(err){
        console.log("error occur");
        console.dir(err);
        return;
    }
    console.log(data);
})