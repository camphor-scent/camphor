'use strict';

var _ = require('underscore');



/**
 * Send properly formatted (and translated) JSON errors down to the server
 */
function handleError(err, req, res) {

    var stack;

    // store the original stack for later
    if (err instanceof Error) {
        stack = err.stack;
    }
    var error = {
        message: err.message || 'Internal Server Error'
    };

    if (err.status) {
        error.status = err.status;
    }

    res.format({
        html: function () {
            res.render(req.model.viewName, _.extend({
                error: error
            }, req.model));
        },
        json: function () {
            res.json(_.extend({
                error: error
            }, req.model));
        }
    });


}

/**
 * HTML and JSON render
 */
function renderHTMLandJSON(req, res) {
    res.format({
        html: function () {
            res.render(req.model.viewName, req.model);
        },
        json: function () {
            res.json(req.model);
        }
    });
}

function handleResponse(err, req, res) {
    if (err) {
        return handleError(err, req, res);
    }

    return renderHTMLandJSON(req, res);
}

/**
 * Standard AJAX render
 */
function renderJSON(req, res) {
    if(req.model.error){
        responseJSON(req,res);

    }else{
        res.json(req.model);
    }
}

/**
 * Standard HTML-only render
 */
function renderHTML(req, res) {
    if(req.model.error){
        responseHTML(req,res);
    }
    else{
        res.render(req.model.viewName, req.model);
    }

}

function responseHTML(req,res){
    var err = req.model.error;
    //req.model.message = err.message;
    req.model.statusCode = err.statusCode;
    //req.model.error = err;
    req.model.status = err.status;
    req.model.field = err.field;


    switch(err.statusCode) {
        case 503:
            req.model.viewName = '503';
            req.model.message = 'Service Unavailable!';
            res.render(req.model.viewName, req.model);
            break;
        case 500:
            req.model.viewName = '500';
            req.model.message = 'Internal Server Error';
            res.render(req.model.viewName, req.model);
            break;
        case 404:
            req.model.viewName = '404';
            req.model.message = 'Page Not Found!';
            res.render(req.model.viewName, req.model);
            break;
        case 403:
            req.model.viewName = '403';
            req.model.message = 'Forbidden Error!';
            res.render(req.model.viewName, req.model);
            break;
        case 400:
            req.model.viewName = '400';
            req.model.message = 'Bad Request Error';
            res.render(req.model.viewName, req.model);
            break;
    }


}
function responseJSON(req,res){
    var err = req.model.error;
    //var render = req.model.render;

    req.model.statusCode = err.statusCode;
    //req.model.error = err;
    req.model.status = err.status;
    req.model.field = err.field;

    switch(err.statusCode) {
        case 503:
            req.model.viewName = 503;
            req.model.message = 'Service Unavailable!';
            res.status(req.model.viewName).json(req.model);
            break;
        case 500:
            req.model.viewName = 500;
            req.model.message = 'Internal Server Error';
            res.status(req.model.viewName).json(req.model);
            break;
        case 404:
            req.model.viewName = 404;
            req.model.message = 'Access Denied!';
            res.status(req.model.viewName).json(req.model);
            break;
        case 403:
            req.model.viewName = 403;
            req.model.message = 'Forbidden Error!';
            res.status(req.model.viewName).json(req.model);
            break;
        case 400:
            req.model.viewName = 400;
            req.model.message = 'Bad Request Error';
            res.status(req.model.viewName).json(req.model);
            break;
    }
}
/**
 * JSON responses with no data
 */
function renderEmptyJSON(req, res) {
    res.json({});
}

// PDF binary render
function renderPDFBinary(req, res) {
    res.writeHead(200, { 'content-disposition': 'attachment;filename=statement.pdf', 'Content-Type' : 'application/pdf' });
    res.write(req.model.binaryData,  'binary');
    res.end();
}

//Excel render
function renderExcelBinary(req, res) {
    res.writeHead(200, {'content-disposition': 'attachment;filename=statement.xls', 'Content-Type' : 'application/ms-excel' });
    res.write(req.model.binaryData,  'binary');
    res.end();
}

/**
 * Handle 404s
 * @TODO: need to block this page for unauthed users.
 */
function pageNotFound(req, res) {
    res.status(404);
    if (!req.model) {
        req.model = {};
    }
    req.model.viewName = 'pageNotFound';
    res.render(req.model.viewName, req.model);
}


/**
 * Export the module
 */
module.exports = {
    handleError: handleError,
    handleResponse: handleResponse,
    renderHTMLandJSON: renderHTMLandJSON,
    pageNotFound :  pageNotFound,
    renderJSON: renderJSON,
    renderHTML: renderHTML,
    renderEmptyJSON: renderEmptyJSON,
    renderPDFBinary: renderPDFBinary,
    renderExcelBinary: renderExcelBinary
};
