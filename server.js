'use strict';

var port = process.env.PORT || 443;

var app = require('./app');

app.startServer(port);