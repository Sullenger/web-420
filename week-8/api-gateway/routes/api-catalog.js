/*
============================================
; Title:  api-Gateway part II
; Author: Professor Krasso
; Date:  12 May 2019
; Modified By: Jason Sullenger
; Description: API Routes
;===========================================
*/

// API ROUTES

var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
var checkToken = require("../check-Token");

// POST request user registration
router.post('/auth/register', auth_controller.user_register);

// GET verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);

router.post('/auth/login', auth_controller.user_login);

router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;