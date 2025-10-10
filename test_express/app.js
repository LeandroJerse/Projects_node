import express from "express"
const app = express()


app.get("/", function(req,res){
  res.send("Welcome to my app")    
})

app.get("/blog",function(req,res){
    res.send("That's my blog")
})

app.get("/ola/:nome/:cargo", function(req,res){
    res.send("<h1>ola"+ "\t" + req.params.nome + "</h1>"+"<h2>Seu cargo é: "+ req.params.cargo + "</h2>")

})


app.listen(8081,function(){
    console.log("server is running on http://localhost:8081/")
})

