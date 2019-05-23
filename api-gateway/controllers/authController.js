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
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config')

// New user registered on POST
exports.user_register = function(req, res){
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    var newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email
    });

    User.add(newUser, (err, user) =>{
        if (err) return res.status(500).send('Problem registering user');

        var token = jwt.sign({ id: user._id}, config.web.secret, {
            expiresIn: 86400
        });

        res.status(200).send({ auth: true, token: token });
    })
};

// Token verified on GET
exports.user_token = function(req, res){
    var token = req.headers['x-access-token'];

    if (!token) return res.status(401).send({ auth: false, message: "No token provided"});

    jwt.verify(token, config.web.secret, function(err, decoded) {
        if (err) return res.status(500).send({auth: false, message: 'Failed to authenticate token'});

        User.getById(decoded.id, function(err, user){
            if (err) return res.status(500).send('Problem finding user');

            if (!user) return res.status(404).send('User not found');

            res.status(200).send(user);
        });
    });
};