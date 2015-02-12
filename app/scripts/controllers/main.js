'use strict';

/**
 * @ngdoc function
 * @name scaffoldYangular.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of scaffoldYangular
 */
angular.module('scaffoldYangular')
  .controller('MainCtrl', function($scope) {
    $scope.tasks = [
      'view',
      'controller',
      'route',
      'directive',
      'filter',
      'service',
      'factory',
      'constant'
    ];
  });
