var express = require('express');
var router = require('./routes/routes.js');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use('/', router);

mongoose.connect('mongodb://apple:PASSWORD1@ds064198.mlab.com:64198/expense-demo');

module.exports = app;