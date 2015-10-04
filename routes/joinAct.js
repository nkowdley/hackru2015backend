var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
//include the models
var activity= require('../models/activities.js'); //mongodb
var db = mongoose.connection;
//get what we need from the db
router.post('/', function(req, res, next) {
  //create JSON Object
  var newPerson={
    activityName: activityNameVal,
    location: locationVal,
    time: timeVal,
    numberofPeople:'0', //for a new activity, 0 other people are attending
  };
  db.collection('new').insert(newActivity);
});

module.exports = router;
