const express = require('express')
var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");

});
  
app.post("/",function(req,res) {

    var num1 = Number(req.body.n1)
    var num2 = Number(req.body.n2)

    var sum = num1 / Math.pow(num2 , 2);
    console.log(Math.pow(num2 , 2));
    
    res.send("Your BMI is : "  + sum)

})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
  