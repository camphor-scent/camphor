var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');


var config = require('config');



/**
 * Express setup initialization
 * @param app
 */
module.exports = function expressConfigFacotry(app){

    var rootPath = app.get( 'rooPath' );


	app.set('views', rootPath + config.get( 'express.views' ));

    app.engine('html', require('ejs').renderFile);

    app.set('view engine', 'html');

    app.use(session(config.get('express.session')));
    app.use(cookieParser());
	app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express["static"](rootPath + config.get( 'express.static' )));  //workaround jshint idiotic warning

};