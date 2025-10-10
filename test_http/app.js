import * as http from "http"

http.createServer(function(req,res){
    res.end("ola")
} ).listen(8081)
console.log("Server is running")