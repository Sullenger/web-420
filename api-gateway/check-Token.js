/*
============================================
; Title:  api-Gateway
; Author: Professor Krasso
; Date:  19 June 2019
; Modified By: Jason Sullenger
; Description: function for validating tokens
;===========================================
*/
var jwt = require("jsonwebtoken");
var config = require("./config");

var checkToken = function(req, res, next) {
  var token = req.headers["x-access-token"];

  if (!token) return res.status(403)({ auth: false, message: "No token" });

  jwt.verify(token, config.web.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed token authentication" });

    req.userId = decoded.id;
    next();
  });
};

module.exports = checkToken;