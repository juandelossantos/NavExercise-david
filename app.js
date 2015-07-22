var express = require('express');
var logger = require('morgan');
var path = require('path');
var api = require('./api');
var routes = require('./routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

app.locals.navdata = require('./data/nav.json');
app.use('/', routes);

module.exports = app;
