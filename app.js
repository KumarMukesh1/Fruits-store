const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: 'Apple',
    rating:8,
    review:"ok"
    });

// fruit.save();
const PineApple = new Fruit({
    name: 'PineApple',
    rating:8,
    review:"ok"
    });

PineApple.save();

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
   favouriteFruit : fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "VK",
    age: 21,
    favouriteFruit: PineApple
});

person.save();


//  use ..mongoose.connection.close() .. at the end in function 

// Fruit.find(function(err, fruits){
//     if (err){
//         console.log(err)
//     }else{
//         console.log(fruits[0].name)
//         mongoose.connection.close();
//     }
// });
// const { Cursor } = require("mongodb");
// const { MongoClient } = require("mongodb");

// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb://localhost:27017";

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function run() {
//   try {
//     await client.connect();

//     const database = client.db('sample');
//     const movies = database.collection('movies');

//     // Query for a movie that has the title 'Back to the Future'
//     const movie = await movies.find({});

//     await movie.forEach(console.dir);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

