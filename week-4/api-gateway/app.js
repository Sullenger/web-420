/*
============================================
; Title:  api-Gateway
; Author: Professor Krasso
; Date:  5 May 2019
; Modified By: Jason Sullenger
; Description: Configuring RESTful security service
;===========================================
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const bodyParser = require("body-parser");
mongoose.Promise = require('bluebird')

var indexRouter = require('./routes/index');

var apiCatalog = require('./routes/api-catalog')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api', apiCatalog);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api', apiCatalog);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Console logs the header created previously
const header = require('../sullenger-header.js');
console.log(header.display("Jason" , "Sullenger" , "api-Gateway"));
console.log(' ');

mongoose.connect('mongodb+srv://admin:qoJeQRdQ7AYvSNlf@ems-nhomg.mongodb.net/test?retryWrites=true', {
  promiseLibrary: require('bluebird')}).then ( () => console.log('connection successful')).catch( (err) => console.error(err));

module.exports = app;
