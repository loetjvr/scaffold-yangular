'use strict';

describe('Service: _service', function() {

  // load the service's module
  beforeEach(module('scaffoldYangular'));

  // instantiate service
  var _service;
  beforeEach(inject(function(__service_) {
    _service = __service_;
  }));

  it('should return value 42', function() {
    expect(_service.value).toBe(42);
  });

});
