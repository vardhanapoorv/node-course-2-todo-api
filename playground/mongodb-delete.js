// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

// db.collection('Users').deleteMany({name: 'Apoorv'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({_id: new ObjectID("59d06a23ec4470a7765cd06a")}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
})

  //db.close();
});
