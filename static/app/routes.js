'use strict';

angular.module('myApp').
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/app/home/homeTemplate.html',
                controller: 'HomeController'
            })
            .when('/about', {
                templateUrl: '/app/about/aboutTemplate.html',
                controller: 'AboutController'
            })
            .otherwise({redirectTo: '/home'});
    }]);
