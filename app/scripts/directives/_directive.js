'use strict';

/**
 * @ngdoc directive
 * @name scaffoldYangular.directive:_directive
 * @description
 * # _directive
 */
angular.module('scaffoldYangular')
  .directive('directive', function() {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the example text');
      }
    };
  });
