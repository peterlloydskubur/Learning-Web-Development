const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))

// Express use public to enable CSS on localhost
app.use(express.static(__dirname + '/public'));

// Setting how the date will be shown
let options = {

    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

let itemList = []

let today = new Date();


app.get('/', function (req, res) {


    res.render("homepage", {

        todaysDate: today.toLocaleDateString("de-DE", options),
        itemList: itemList,

    });


});

// Reciving new information to add on To-Do List
app.post("/", function (req, res) {

    //TODO: jQuery submit form when ENTER key is pressed

    itemList.push(req.body.newTodo)

    // Redirecting back to main page so the new item could be rendered.zz
    res.redirect("/")


});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});