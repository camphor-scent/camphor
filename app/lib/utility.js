'use strict';

var config = require('config');

function ensureAuthenticated(req, res, next) {
    //do something
    return next();
}

module.exports = {
    ensureAuthenticated:ensureAuthenticated
};
