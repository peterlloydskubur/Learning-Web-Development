// DIDD SOME CHANGES
// Some more changes

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//Mongoose connecting to database if does not exist create one
mongoose.connect('mongodb://localhost:27017/todoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Mongoose Schema
const itemsSchema = {
  name: { type: String },
};

const listSchema = {
  listName: String,
  list: [itemsSchema],
};

//Mongoose creating collection / model
const Item = mongoose.model('Item', itemsSchema);

const List = mongoose.model('List', listSchema);

//Mongoose creating objects in the Item collections
const item1 = new Item({
  name: 'Welcome to your to-do list',
});

const item2 = new Item({
  name: 'Hit the + button to add new items',
});

const item3 = new Item({
  name: 'Hit the trashcan to delete items',
});

const defaultItems = [item1, item2, item3];

// Express get and render
app.get('/', function (req, res) {
  Item.find(function (err, items) {
    if (items.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Updated Items document');
        }
      });
      res.redirect('/');
    } else {
      res.render('list', { listTitle: 'Today', newListItems: items });
      // mongoose.connection.close();
      // console.log(err);
    }
  });
});

app.get('/:customList', function (req, res) {
  const customList = req.params.customList;

  const list = new List({
    name: customList,
    list: defaultItems,
  });
  //
  Item.findOne({ name });
  list.save();
});

// If press post from home page we do this:
app.post('/', function (req, res) {
  const itemName = req.body.newItem;

  const item = new Item({
    name: itemName,
  });

  item.save();

  res.redirect('/');
});

// deleting post after checked box
app.post('/delete', function (req, res) {
  Item.deleteOne({ _id: req.body.checkbox }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted the post');
    }
  });
  console.log(req.body.checkbox);
  res.redirect('/');
  // console.log();
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
