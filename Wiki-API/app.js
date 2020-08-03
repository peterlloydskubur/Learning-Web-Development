// learning about react on codesandbox

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

//Adding route to articles to get,post and delete articles.
app
  .route('/articles')

  //Displaying all articles
  .get(function (req, res) {
    Article.find(function (err, results) {
      if (!err) {
        res.send(results);
      } else {
        res.send(err);
      }
    });
  })

  //Posting a new article based on req.body information.
  .post(function (req, res) {
    item2 = new Article({
      name: req.body.name,
      content: req.body.content,
    });

    item2.save(function (err) {
      if (!err) {
        res.send('Sucesfully added the new Article');
      } else {
        res.send(err);
      }
    });
  })

  //Deleting all articles
  .delete(function (req, res) {
    Article.deleteMany({}, function (err) {
      if (!err) {
        res.send('All articles were deleted');
      } else {
        res.send(err);
      }
    });
  });

app
  .route('/articles/:title')

  //Reading the article information based on title
  .get(function (req, res) {
    Article.findOne({ name: req.params.title }, function (err, result) {
      if (!err) {
        res.send(result);
      } else {
        res.send(err);
      }
    });
  })

  //Replacing the whole article with new information
  .put(function (req, res) {
    Article.update(
      { name: req.params.title },
      { name: req.body.name, content: req.body.content },
      { overwrite: true },
      function (err) {
        if (!err) {
          res.send('Updated the post');
        } else {
          res.send(err);
        }
      }
    );
  })

  //Patching only few things from the article
  .patch(function (req, res) {
    Article.update(
      //prettier-ignore, //* Replacing only info that is in req.body
      { name: req.params.title },
      { $set: req.body },
      function (err) {
        if (!err) {
          res.send('Updated the post');
        } else {
          res.send(err);
        }
      }
    );
  })
  .delete(function (req, res) {
    Article.deleteOne({ name: req.params.title }, function (err, result) {
      if (!err) {
        res.send('Deleted the post' + result);
      } else {
        res.send(err);
      }
    });
  });

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
