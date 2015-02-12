'use strict';

describe('Directive: directive', function() {

  // load the directive's module
  beforeEach(module('scaffoldYangular'));

  var element;
  var scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should have element text', inject(function($compile) {
    element = angular.element('<directive></directive>');
    element = $compile(element)(scope);

    expect(element.text()).toBe('this is the example text');
  }));
});
