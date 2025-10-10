import express from "express"
import path from 'path'
import {fileURLToPath} from 'url'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get("/", function(req,res){
  res.sendFile(__dirname + "/html/index.html")   
})

app.get("/sobre",function(req,res){
    res.sendFile(__dirname + "/html/sobre.html")
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

