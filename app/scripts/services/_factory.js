'use strict';

/**
 * @ngdoc service
 * @name scaffoldYangular._factory
 * @description
 * # _factory
 * Factory in scaffoldYangular.
 */
angular.module('scaffoldYangular')
  .factory('_factory', function() {
    // Service logic
    // ...

    var value = 42;

    // Public API here
    return {
      someMethod: function() {
        return value;
      }
    };
  });
