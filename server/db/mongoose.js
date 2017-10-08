var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongoose.connect( db.localhost || db.mlab);
mongoose.connect('mongodb://vardhanapoorv:vgsamay16@ds013475.mlab.com:13475/apoorv' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
