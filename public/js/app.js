/**
 * Created by kkanapuram on 06/17/2016.
 */
//Added ui bootstrap js for popover()
var angularApp = angular.module('camphorScent',['ui.bootstrap']);

angularApp.config(function($interpolateProvider,$httpProvider){
    //For IE Cache issue
    $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
});
