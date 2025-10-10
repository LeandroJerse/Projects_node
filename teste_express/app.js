import express from "express"
const app = express();


app.get("/", function(req,res){
  res.send("Welcome to my app")    
})


app.listen(8081,function(){
    console.log("server is running on http://localhost:8081/")
});

