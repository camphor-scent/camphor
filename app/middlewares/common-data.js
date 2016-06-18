/**
 *  NOTE: This file should only contain middleware that affects ALL routes.
 */

'use strict';



function populateCommonData(req, res, next) {
    // *NOTE* This should be the only spot that creates req.model and req.model.data
    req.model = req.model || {};
    req.model.data = req.model.data || {};


    next();


}


module.exports = function CommonData (config) {

    return populateCommonData;
};