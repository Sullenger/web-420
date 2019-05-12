/*
============================================
; Title:  api-Gateway part II
; Author: Professor Krasso
; Date:  12 May 2019
; Modified By: Jason Sullenger
; Description: Register new user on POST - verify token on GET
;===========================================
*/

var User = require('../models/user');

// New user registered on POST
exports.user_register = function(req, res){
    res.send('NOT IMPLEMENTED: User registration POST');
};

// Token verified on GET
exports.user_token = function(req, res){
    res.send('NOT IMPLEMENTED: User token lookup GET')
}