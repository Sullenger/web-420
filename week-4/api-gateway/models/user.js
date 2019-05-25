/*
============================================
; Title:  api-Gateway part II
; Author: Professor Krasso
; Date:  12 May 2019
; Modified By: Jason Sullenger
; Description: creating user model and schema
;===========================================
*/

// username, password, and email fields

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

var User = module.exports = mongoose.model('User', userSchema)

module.exports.add = (user, callback) => {
    user.save(callback);
};

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

