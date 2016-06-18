'use strict';

var mongoose = require('mongoose');
var rp = require('request-promise');
var utility = require('../lib/utility');

/**
 * Render Home Page HTML
 * @param {Object} req Route Request
 * @param {Object} res Route Response
 * @param {Function} next Route Advancing
 */
function renderHomePage(req, res, next) {
    req.model.viewName   = 'index';
    req.model.data   =  {
        name : 'Camphor Scent'
    };
    next();
}

/**
 * Render npm package being used
 * @param req
 * @param res
 * @param next
 */
function getTestDataJSON(req, res, next){
    req.model.data = {"test":"data"};
    next();
}

module.exports = {
    renderHomePage: renderHomePage,
    getTestDataJSON : getTestDataJSON
};