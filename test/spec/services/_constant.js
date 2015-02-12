'use strict';

describe('Service: _constant', function() {

  // load the service's module
  beforeEach(module('scaffoldYangular'));

  // instantiate service
  var _constant;
  beforeEach(inject(function(__constant_) {
    _constant = __constant_;
  }));

  it('should be 42', function() {
    expect(_constant).toBe(42);
  });

});
