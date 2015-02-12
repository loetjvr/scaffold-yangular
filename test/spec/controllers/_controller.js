'use strict';

describe('Controller: ControllerCtrl', function() {

  // load the controller's module
  beforeEach(module('scaffoldYangular'));

  var ControllerCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ControllerCtrl = $controller('ControllerCtrl', {
      $scope: scope
    });
  }));

  it('should set name to ControllerCtrl', function() {
    expect(scope.name).toBe('ControllerCtrl');
  });
});
