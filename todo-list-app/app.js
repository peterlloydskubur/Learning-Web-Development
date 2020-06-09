const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))

// Setting how the date will be shown
var options = {

    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

var itemList = []

var today = new Date();


app.get('/', function (req, res) {


    res.render("homepage", {

        todaysDate: today.toLocaleDateString("de-DE", options),
        itemList: itemList,

    });


});

// Reciving new information to add on To-Do List
app.post("/", function (req, res) {

    itemList.push(req.body.newTodo)

    console.log(itemList);

    // Redirecting back to main page so the new item could be rendered.
    res.redirect("/")
});




app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});