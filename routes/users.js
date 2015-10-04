var express = require('express');
var mongoose = require('mongoose');
var activity= require('../models/activities.js');

var router = express.Router();
var db = mongoose.connection; //connect to the db
//get what we need from the db
router.get('/', function(req, res, next) {
  db.collection('users').find().toArray(function (err, usernames) {
    if (err)
    {
      console.log("Error:(err)");
      return next(err);
    }
    console.log("Yolo3");
    console.log(usernames.length);
    //console.dir(activities);
    res.json(usernames);
  });
});

module.exports = router;
