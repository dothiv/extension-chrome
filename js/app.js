'use strict';

// Declare app level module which depends on filters, and services
angular.module('dothivExtChrome', ['dothivExtChrome.filters', 'dothivExtChrome.services', 'dothivExtChrome.directives', 'dothivExtChrome.controllers']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/welcome', {templateUrl: 'partials/welcome.html', controller: 'WelcomeCtrl'});
        $routeProvider.when('/check', {templateUrl: 'partials/check.html', controller: 'BookmarkCheckCtrl'});
        $routeProvider.otherwise({redirectTo: '/welcome'});
    }]);
    
