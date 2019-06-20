/*
============================================
; Title:  api-Gateway
; Author: Professor Krasso
; Date:  5 May 2019
; Modified By: Jason Sullenger
; Description: Configuring RESTful security service
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
