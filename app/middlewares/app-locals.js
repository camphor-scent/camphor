/**
 * Created by thoalexander on 11/4/2015.
 */
'use strict';

var pkgjson = require('../../package.json');

/**
 * Set values that needed to be accessible from all templates
 * @param settings
 * @returns {Function}
 */
module.exports = function (app) {
    return function (req, res, next) {
        res.locals.appversion   = pkgjson.version;
        res.locals.appname      = pkgjson.name;
        res.locals.env          = app.get('env');
        next();
    };
};