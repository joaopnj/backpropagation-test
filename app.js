var express = require('express');
var load = require('express-load');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var propagationService = require('./services/propagation-service');
load('services').into(express);

var service   = express.services.propagationService;

service.init();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
