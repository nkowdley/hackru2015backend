var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  //schema setup
  activityName: String,
});

module.exports = mongoose.model('activities', schema);
