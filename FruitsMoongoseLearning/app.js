const mongoose = require('mongoose');

//Connecting to database( If database does not exist it is created )
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Creating database Schema/Layout info with settings
const fruitLayout = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please check your entry, no NAME specified.'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, 'Please check your entry, no RATING specified.'],
  },
  review: {
    type: String,
    required: [true, 'Please check your entry, no REVIEW specified.'],
  },
  stock: {
    type: Number,
    required: [true, 'Please check your entry, no STOCK specified.'],
  },
});

// Creating model/collection for fruit db and with Schema "fruitLayout"
const Fruit = mongoose.model('fruit', fruitLayout);

const fruit = new Fruit({
  rating: 7,
  review: 'Something something',
  stock: 10,
});

fruit.save();

//Creating people Schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Creating model/collection for fruit db with Schema "personSchema"
const Person = mongoose.model('Person', personSchema);

// Reading and displaying data
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
