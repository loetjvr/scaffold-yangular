'use strict';

/**
 * @ngdoc overview
 * @name scaffoldYangular
 * @description
 * # scaffoldYangular
 *
 * Main module of the application.
 */
angular
  .module('scaffoldYangular', [
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }) //inject:route
      .otherwise({
        redirectTo: '/'
      });
  });
