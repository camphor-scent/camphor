'use strict';

var express = require('express');
var router = express.Router();

var HomeCtrl = require('../controllers/homeCtrl');
var utility = require('../lib/utility');

var response = require('../lib/responses');

router.get('/',utility.ensureAuthenticated,HomeCtrl.renderHomePage, response.renderHTML);

router.get('/test',HomeCtrl.getTestDataJSON, response.renderJSON);

module.exports = router;