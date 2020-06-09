const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

// Setting how the date will be shown
var options = {

    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

var today = new Date();

// Calling " today " to show as a string with our " options " object
console.log(today.toLocaleDateString("de-DE", options));


app.get('/', function (req, res) {

    res.render("homepage", {

        todaysDate: today.toLocaleDateString("de-DE", options)

    });

    app.post("/", function (req, res) {
        console.log(req.body.newTodo);
    
    });

});


// app.post("/AddToList", function (req, res) {
//     console.log(req.body.newTodo);

// })

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});