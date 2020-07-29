const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//Mongoose connecting to database if does not exist create one
mongoose.connect('mongodb://localhost:27017/wikiDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Collection Article Schema
const articleSchema = {
  name: { type: String },
  content: { type: String },
};

//Mongoose creating collection / model
const Article = mongoose.model('Article', articleSchema);

//Adding test content to collection, item1.save() to save it.
item1 = new Article({
  name: 'This is a title of article',
  content: 'This is a content of article',
});

app.get('/articles', function (req, res) {
  Article.find(function (err, results) {
    if (!err) {
      res.send(results);
    } else {
      res.send(err);
    }
  });
});

app.post('/articles', function (req, res) {
  item2 = new Article({
    name: req.body.title,
    content: req.body.content,
  });

  item2.save(function (err) {
    if (!err) {
      res.send('Sucesfully added the new Article');
    } else {
      res.send('Something went wrong.');
    }
  });
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
