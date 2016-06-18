
var config = require('config');

/**
 * Express setup initialization
 * @param app
 */
module.exports = function middlwareFactory (app){

    //Set Local Variables available for template
    app.use(require('../middlewares/app-locals')(app));

    //Scafolding for return data
    app.use(require('../middlewares/common-data')());



};