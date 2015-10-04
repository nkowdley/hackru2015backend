var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
//include the models
var activity= require('../models/activities.js'); //mongodb for activities
var users= require('../models/users.js'); //mongodb for users
var db = mongoose.connection; //db connections
//get what we need from the db
router.post('/', function(req, res, next) {
  //get the info we need to update the databases
  var user=req.body.name;
  var activity1=req.body.id;
  var query = {'_id':activity};
  console.log(user);
  console.log(activity1);
  console.log("Yolo1");
  //update the activity to show number of people going
  db.collection('new').findOneAndUpdate(query, {$inc : {'numberofPeople' : 1}}, {upsert:false}, function(err, doc){
    if (err)
    {
      return res.send(500, { error: err });
    }
  });
  //update the events a user is attending
  var query = {'username':user};
  db.collection('users').findOneAndUpdate(query, {$push: {activities: activity1}}, {upsert:true}, function(err, doc){
    if (err)
    {
      return res.send(500, { error: err });
    }
  });
});
module.exports = router;
