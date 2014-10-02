'use strict';

/**
 * @ngdoc function
 * @name node01App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the node01App
 */
angular.module('node01App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
