var express = require('express');
var router = express.Router();

//include the models
var activity= require('../models/activities.js'); //mongodb

//get what we need from the db
router.post('/', function(req, res, next) {
  activity.find(function (err, activities) {
    if (err)
    {
      console.log("Error:(err)");
      return next(err);
    }
    res.json(activities);
  });
});

module.exports = router;
