var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); //mongodb

var routes = require('./routes/index'); //index
//backend
var activity = require('./routes/activity');//get all activities
var users= require('./routes/users');//get all activities
var newAct  = require('./routes/newAct');//post new activities
var joinAct  = require('./routes/joinAct');//Post to join Activity
var newActPost  = require('./routes/newActPost');//Form page to test
var joinActPost  = require('./routes/joinActPost');//Form page to test
var app = express();

//mongo connection, set the connection to a variable, db
mongoose.connect('mongodb://localhost/database', function(err) {
  if(err) {
    console.log('MONGO CONNECTION ERROR', err);
  } else {
    console.log('MONGO CONNECTION SUCCESSFUL');
  }
});
var db=mongoose.connection;
//standard express stuff
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//backend stuff
app.use('/activity', activity); //show activities
app.use('/users', users); //show users
app.use('/newAct', newAct); //add activities
app.use('/joinAct', joinAct); //join Activity
app.use('/newActPost', newActPost); //post test
app.use('/joinActPost', joinActPost); //post test
//frontend stuff

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
