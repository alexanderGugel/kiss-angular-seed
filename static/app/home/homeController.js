'use strict';

/* Controllers */

angular.module('myApp')
  .controller('HomeController', ['$scope', function ($scope) {
      $scope.works = 'It works!';
  }]);
