'use strict';

/* Services */
var services = angular.module('dothivExtChrome.services', ['ngResource']);

services.factory('alternatives', function($resource) {
    return $resource('http://dothiv.bp/app_dev.php/api/alternatives/:id', {id: '@id'}, {
            'query': {method: 'GET', params: { q: "" }, isArray: true}
        });
});
