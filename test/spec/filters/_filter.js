'use strict';

describe('Filter: _filter', function() {

  // load the filter's module
  beforeEach(module('scaffoldYangular'));

  // initialize a new instance of the filter before each test
  var _filter;
  beforeEach(inject(function($filter) {
    _filter = $filter('_filter');
  }));

  it('should return the input prefixed with "filter _filter:"', function() {
    var text = 'angularjs';

    expect(_filter(text)).toBe('example filter: ' + text);
  });

});
