import express from "express"

import path from "path"
import { fileURLToPath } from "url"
const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import handlebars from "express-handlebars"
import Post from "./models/Posts.js"

//config
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//config
    //tamplate engine
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    }))    
    app.set("view engine", "handlebars")
    


    app.get('/',function(req,res){
        Post.findAll().then(function(posts){
           res.render('home', {posts: posts}) 
        })

    })

    

    app.get('/cad', function(req,res){
        res.render('form')
    })

    app.post('/registrate', function(req,res){

        Post.create({
            title: req.body.title,
            content: req.body.content
        }).then(function(){
            res.redirect('/')
        }).catch(function(error){
            res.send(`Fail to create a post:\t${error}` )
        })
    })

    app.get('/deletepost/:id',function(req,res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.render('deleted')

        }).catch(function(error){
            res.render('errodelet')

        })
    })

app.listen(8081, function(){
    console.log("server running")
})