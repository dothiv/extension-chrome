'use strict';

/* Services */
var services = angular.module('dothivExtChrome.services', ['ngResource']);

services.factory('alternatives', function($resource) {
    return $resource('http://dothiv.bp/app_dev.php/api/alternatives/:id', {id: '@id'}, {
            'query': {method: 'GET', params: { q: "" }, isArray: true}
        });
});

services.factory('settings', function() {
    function setAutoupdate($value) {
        localStorage['autoupdate'] = $value ? 1 : 0;
    }
    
    function getAutoupdate() {
        return localStorage['autoupdate'] == 1 ? true : false;
    }
    
    return {
        'setAutoupdate': setAutoupdate,
        'getAutoupdate': getAutoupdate,
    };
});
