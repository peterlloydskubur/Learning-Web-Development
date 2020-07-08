//jshint esversion:6 small change
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//Mongoose Connecting
mongoose.connect('mongodb://localhost:27017/todoDB', { useNewUrlParser: true });

//Mongoose Schema
const itemsSchema = {
  name: { type: String },
};

//Mongoose Model
const Item = mongoose.model('Item', itemsSchema);

//Mongoose
const item1 = new Item({
  name: 'Document One',
});

const item1 = new Item({
  name: 'Document Two',
});

const item1 = new Item({
  name: 'Document Three',
});

// Express get and render
app.get('/', function (req, res) {
  res.render('list', { listTitle: 'Today', newListItems: items });
});

// If press post from home page we do this:
app.post('/', function (req, res) {
  const item = req.body.newItem;

  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.get('/work', function (req, res) {
  res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
