
const express = require('express')
const app = express()
const port = 3000

app.get("/",function(req, res){
    res.send("Hello world")
    
})

app.get("/about",function(req, res){
    console.log("sending info about me");
    res.send("My name is pedro and I like mac")
    
})



app.listen(port, function(){
    console.log("Server started in port 3000");
    
})