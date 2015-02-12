'use strict';

/**
 * @ngdoc service
 * @name scaffoldYangular._service
 * @description
 * # _service
 * Service in scaffoldYangular.
 */
angular.module('scaffoldYangular')
  .service('_service', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var  values = {
      value: 42
    };

    return values;
  });
