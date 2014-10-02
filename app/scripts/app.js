'use strict';

/**
 * @ngdoc overview
 * @name node01App
 * @description
 * # node01App
 *
 * Main module of the application.
 */
angular
  .module('node01App', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })
      .when('/mysql', {
        templateUrl: 'views/mysql.html',
        controller: 'MysqlCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
