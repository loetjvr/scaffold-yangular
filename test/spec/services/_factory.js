'use strict';

describe('Service: _factory', function() {

  // load the service's module
  beforeEach(module('scaffoldYangular'));

  // instantiate service
  var _factory;
  beforeEach(inject(function(__factory_) {
    _factory = __factory_;
  }));

  it('should have method someMethod returning 42', function() {
    expect(_factory.someMethod()).toBe(42);
  });

});
