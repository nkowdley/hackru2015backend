var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  //schema setup
  username: String,
  activities: Array,
});

module.exports = mongoose.model('users', schema);
