const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =require('./../server/models/user');

// Todo.remove
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59d9a44a7d80750687132797'}).then((todo)) => {
  
}

Todo.findByIdAndRemove('59d9a44a7d80750687132797').then((todo) => {
  console.log(todo);
})
