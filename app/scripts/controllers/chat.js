'use strict';

/**
 * @ngdoc function
 * @name node01App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the node01App
 */
angular.module('node01App')
  .controller('ChatCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
