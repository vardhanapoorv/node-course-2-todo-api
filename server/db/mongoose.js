var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongoose.connect( db.localhost || db.mlab);
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
