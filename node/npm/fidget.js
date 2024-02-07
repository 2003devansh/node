var figlet = require("figlet");
figlet("node",function(err,data){
    if(err){
        console.log("error occur");
        console.dir(err);
        return;
    }
    console.log(data);
})