/*
============================================
; Title:  api-Gateway
; Author: Professor Krasso
; Date:  5 May 2019
; Modified By: Jason Sullenger
; Description: Configuring RESTful security service
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;
