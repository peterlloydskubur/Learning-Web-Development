const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wenesday",
    "Thursday",
    "Friday",
    "Saturday"
];



app.get('/', function (req, res) {

    res.render("homepage", {

        todaysDate: days[new Date().getDay()]
    });
});




app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});