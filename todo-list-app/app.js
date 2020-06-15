const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// Express use public to enable CSS on localhost
app.use(express.static(__dirname + '/public'));

// Setting how the date will be shown
let options = {
  weekday: 'long',
  // year: 'numeric',
  month: 'long',
  day: 'numeric',
};

let itemList = [];
let workList = [];

let today = new Date();

let todaysDate = today.toLocaleDateString('de-DE', options);

app.get('/', function (req, res) {
  res.render('homepage', {
    listTitle: todaysDate,
    itemList: itemList,
    workList: workList,
  });
});

// Reciving new information to add on To-Do List
app.post('/', function (req, res) {
  itemList.push(req.body.newItem);

  // Redirecting back to main page so the new item could be rendered.
  res.redirect('/');
});

// WORK ROUTE //

app.get('/work', function (req, res) {
  res.render('homepage', {
    listTitle: 'Work List',
    workList: workList,
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
