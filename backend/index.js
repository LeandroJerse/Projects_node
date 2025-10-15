import express from 'express'
const server = express()

server.use(express.json())

let customers = [
        {id:1 ,name:"Teste", site: "http://androma.com.br"},
        {id:2 ,name:"Teste", site: "http://androma.com.br"},
        {id:3 ,name:"Teste", site: "http://androma.com.br"}
]

server.get("/customers",function(req,res){

    return res.json(customers)

})
server.get("/customers/:id",function(req,res){
    const id = parseInt(req.params.id)
    const customer = customers.find(item => item.id === id)
    const status = customer ? 200: 404


    return res.status(status).json(customer)

})

server.post("/customers",function(req,res){
    const {name,site} = req.body
    const id = customers[customers.length-1].id + 1
    const newCustomer = { id,name,site}

    customers.push(newCustomer)

    return res.status(201).json(newCustomer)
})

server.listen(3000)