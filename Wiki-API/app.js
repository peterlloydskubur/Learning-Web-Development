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
const ArticleSchema = {
  name: { type: String },
  content: { type: String },
};

//Mongoose creating collection / model
const Article = mongoose.model('Article', ArticleSchema);

//Adding test content to collection, item1.save() to save it.
item1 = new Article({
  name: 'This is a title of article',
  content: 'This is a content of article',
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
