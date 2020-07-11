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

const chirios = new Fruit({
  name: 'Chirios',
  rating: 9,
  review: 'alles is sehr gut ',
  stock: 10,
});

chirios.save();

//Creating people Schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitLayout,
});

// Creating model/collection for fruit db with Schema "personSchema"
const Person = mongoose.model('Person', personSchema);

Person.updateOne({ name: 'John' }, { favouriteFruit: chirios }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Succesfully updated ');
  }
});

// person.save()

// //Deleting many repeated entries with "John"
// Person.deleteMany({ name: 'John' }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Deleted sucessfuly');
//   }
// });

// //Updating data
// Fruit.updateOne({ name: 'Fish' }, { rating: 9 }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Succesfully updated ');
//   }
// });

// //Deleting data
// Fruit.deleteOne({ name: 'Fish' }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Deleted the post');
//   }
// });

// // Reading and displaying data
// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();

//     fruits.forEach(function (fruit) {
//       console.log(fruit);
//     });
//   }
// });

// Item.insertMany(defaultItems, function (err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Updated Items document');
//   }
// });

// Reading and displaying data
