'use strict';

/**
 * @ngdoc filter
 * @name scaffoldYangular.filter:_filter
 * @function
 * @description
 * # _filter
 * Filter in scaffoldYangular.
 */
angular.module('scaffoldYangular')
  .filter('_filter', function() {
    return function(input) {
      return 'example filter: ' + input;
    };
  });
