var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express()

//Lets use server your css as static from public folder
app.use(express.static(__dirname + '/public'));

//Adding bodyParser to express
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

//Reciving information from signup form
app.post('/', function(req,res){
    const userEmail = req.body.inputEmail;
    const userName = req.body.name;
    const userLastName = req.body.lastName;

    console.log("Hello " + userName + " " + userLastName + ", we will be sending emails to: " + userEmail);
    


});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});