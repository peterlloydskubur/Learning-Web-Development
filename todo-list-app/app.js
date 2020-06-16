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
    // workList: workList,
  });
});

// Reciving new information to add on To-Do List
app.post('/', function (req, res) {
  //* Checking from which url the request came and push accordingly
  if (req.body.list === 'work') {
    workList.push(req.body.newItem);
    // Redirecting back to work page so the new item could be rendered.
    res.redirect('/work');
  } else {
    itemList.push(req.body.newItem);
    // Redirecting back to main page so the new item could be rendered.
    res.redirect('/');
  }

  console.log(req.body);
});

// Adding work url, stil redirects and check on / route to be added
app.get('/work', function (req, res) {
  res.render('homepage', {
    listTitle: 'work',
    itemList: workList,
  });
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
