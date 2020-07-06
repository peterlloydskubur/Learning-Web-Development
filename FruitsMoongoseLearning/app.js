const mongoose = require('mongoose');

//Connecting to database( If database does not exist it is created )
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Creating database Schema/Layout info
const fruitLayout = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
  stock: Number,
});

// Creating model/collection for fruit db and with Schema "fruitLayout"
const Fruit = mongoose.model('fruit', fruitLayout);

// Creating new fruit with information, that follows the Fruit layout.
const fruit = new Fruit({
  name: 'Apple',
  rating: 7,
  review: 'Apples are good in the morning',
  stock: 30,
});

// Creating new fruit with information
const kiwi = new Fruit({
  name: 'Kiwi',
  rating: 8,
  review: 'Pretty good fruit',
  stock: 15,
});

// Creating new fruit with information
const bannana = new Fruit({
  name: 'Bannana',
  rating: 10,
  review: 'Pretty good with icecream',
  stock: 15,
});

// Creating new fruit with information
const avocado = new Fruit({
  name: 'Avacado',
  rating: 9,
  review: 'Pretty good something',
  stock: 15,
});

//Creating people Schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Creating model/collection for fruit db with Schema "personSchema"
const Person = mongoose.model('Person', personSchema);

// Creating new fruit with information, that follows the Fruit layout.
const person = new Person({
  name: 'John',
  age: 22,
});

// Learning how to read the data.

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});
