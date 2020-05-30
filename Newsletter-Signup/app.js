var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express()

//Lets use server your css as static from public folder
app.use(express.static(__dirname + '/public'));

//Adding bodyParser to express
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

//Reciving information from signup form
app.post('/', function (req, res) {
    const userEmail = req.body.inputEmail;
    const userName = req.body.name;
    const userLastName = req.body.lastName;

    addUserToMailchimp(userName,userLastName,userEmail)

});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


function addUserToMailchimp(name,lastname,email) {

    // var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'https://us10.api.mailchimp.com/3.0/lists/e4c2ee48be/members/',
        'headers': {
            'Authorization': 'Basic YW55c3RyaW5nOmQzZjM5ZTA4Y2JkNjg5MDRkODYzNTUyYzQxMjEwYThiLXVzMTA=',
            'Content-Type': 'application/json',
            'Cookie': 'ak_bmsc=D25638FEC6BDBEE26ABD734E0B75E2F1C16C5EA2CA6300009BA1D25E6A20D203~pl+dlnh/qNMte/0YscnzdG3iZ5J6if/efiFzqDafpPy7BUnfwUmLBtIBk/tPNygF/VIpQ7iKA7pqUr88uDQ5DmT3Ut8NDeM+T79g0gsO0fIgMGa0OHDPUC4QhJei6az3V6pFucsaFgQpQZ4JPVh25VODWz1YDVe9XQ/MfDDmSduZteaU/r4v/h7XgjeyKRE3PHL5lqaNa7w7YiYldjhV3eCcVSiaDJSaJoGTzvfsuEMgs=; bm_sv=9DFE614C50B9F307468CAAA70889F33C~RP2oySDGQoeGV7G8nNSV1wiCfzwP38nhgGfSSm65FAmBgJNKyw180vtMousgsBuYnA3lfy3RsXRymZs88hjGkA82BqlYg002AISz1KorY4wQUed+SwJMBfZ4LSQ7VTMKAisGm//TJ8A+VRkJkeNeO3ZrVfJrk96fjriReGAGpDE='
        },
        body: JSON.stringify({ "list_id": "e4c2ee48be", "email_address": email, "status": "subscribed", "merge_fields": { "FNAME": name, "LNAME": lastname } })

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log("success");
    });

}