'use strict';

/**
 * Module dependencies.
 */


var express = require('express');
var https   = require('https');
var fs = require('fs');
var mongoose=require('mongoose');
var fs=require('fs');

//config
var config = require('config');

// Bootstrap models
var models_path = __dirname + '/app/models';
fs.readdirSync(models_path).forEach(function (file) {
    require(models_path+'/'+file);
});

// Mongo db connection
// var opts = {
//     replset: {
//         socketOptions : {
//             keepAlive : 1
//         }
//     },
//     server : {
//         auto_reconnect: true,
//         socketOptions : {
//             keepAlive : 1
//         }
//     }
// };
// var mongo = mongoose.connect(config.get('db'),opts);
//
// mongoose.connection.on("open", function() {
//     console.log('Connected to MongoDB!');
// });
//
// mongoose.connection.on('error', function (err) {
//     if(err) {
//         console.log("Error occurred while connecting mongo DB");
//     }
// });

var app = express();

//Base Router
var MainRouter = require('./app/routes/main');



var me = this;


/**
 * Isolate server start
 * @param port
 */
exports.startServer =  function (port) {


    me.initApp();


    function startServer() {
        console.log('Server listening on http://localhost:%d', this.address().port);
    }

    var ssl_options = {
        cert : fs.readFileSync(config.get('ssl.cert')),
        key : fs.readFileSync(config.get('ssl.key'))
    };
    var server = https.createServer(ssl_options, app);

    server.listen(443,startServer);
};

/**
 * Isolate app configs which can be reused in test suites
 */
exports.initApp = function(){

    app.set('rooPath',__dirname);

    require('./app/config/security')(app);  //set helemt,cors

    require('./app/config/express')(app);

    require('./app/config/security')(app,true); //set csurf

    require('./app/config/middlewares')(app);

    app.use('/',MainRouter);    //set router
};


exports.app = app;
