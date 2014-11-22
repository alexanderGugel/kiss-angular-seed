'use strict';

angular.module('myApp').
    controller('AboutController', ['$scope', function ($scope) {
        $scope.about = 'I am awesome.';
    }]);
