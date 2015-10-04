var express = require('express');
var mongoose = require('mongoose');
var activity= require('../models/activities.js');

var router = express.Router();
var db = mongoose.connection; //connect to the db
//get what we need from the db
router.get('/', function(req, res, next) {
  var collect='new';
  db.collection('new').find().toArray(function (err, activities) {
    if (err)
    {
      console.log("Error:(err)");
      return next(err);
    }
    console.log("Yolo");
    console.log(activities.length);
    //console.dir(activities);
    res.json(activities);
  });
});

module.exports = router;
