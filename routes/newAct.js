var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
//include the models
var activity= require('../models/activities.js'); //mongodb
var db = mongoose.connection;
//get what we need from the db
router.post('/', function(req, res, next) {
  console.log(req.body.activity);
  console.log(req.body.lat);
  console.log(req.body.lng);
  console.log(req.body.time);

  var activityNameVal=req.body.activity;
  var latVal=req.body.lat;
  var lngVal=req.body.lng;
  var timeVal=req.body.time;
  //create JSON Object
  var newActivity={
    activityName: activityNameVal,
    lat: latVal,
    lng: lngVal,
    time: timeVal,
    numberofPeople:0, //for a new activity, 0 other people are attending
  };
  db.collection('new').insert(newActivity);
});

module.exports = router;
