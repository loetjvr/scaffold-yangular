'use strict';

var gulp = require('gulp');
var mockGulpDest = require('mock-gulp-dest')(gulp);
var chai = require('chai');

require('../../gulpfile');

chai.should();

describe('scaffold-yangular', function() {
  describe('gulp html', function() {
    this.timeout(20000);

    before(function(done) {
      gulp.start('html').once('stop', function() {
        done();
      });
    });

    it('dist should contain index.html', function() {
      mockGulpDest.assertDestContains('index.html');
    });

    it('dist should contain 404.html', function() {
      mockGulpDest.assertDestContains('404.html');
    });

    it('dist should contain scripts.js', function() {
      mockGulpDest.assertDestContains('scripts/scripts.js');
    });

    it('dist should contain vendor.js', function() {
      mockGulpDest.assertDestContains('scripts/vendor.js');
    });

    it('dist should contain oldieshim.js', function() {
      mockGulpDest.assertDestContains('scripts/oldieshim.js');
    });

    it('dist should contain main.html', function() {
      mockGulpDest.assertDestContains('views/main.html');
    });

    it('dist should contain main.css', function() {
      mockGulpDest.assertDestContains('styles/main.css');
    });
  });

  describe('gulp fonts', function() {
    this.timeout(5000);

    before(function(done) {
      gulp.start('fonts').once('stop', function() {
        done();
      });
    });

    it('dist should contain fonts', function() {
      mockGulpDest.assertDestContains([
        'glyphicons-halflings-regular.eot',
        'glyphicons-halflings-regular.svg',
        'glyphicons-halflings-regular.ttf',
        'glyphicons-halflings-regular.woff',
        'glyphicons-halflings-regular.woff2'
      ]);
    });
  });

  describe('gulp extras', function() {
    before(function(done) {
      gulp.start('extras').once('stop', function() {
        done();
      });
    });

    it('dist should contain facivon.ico', function() {
      mockGulpDest.assertDestContains('favicon.ico');
    });

    it('dist should contain robots.txt', function() {
      mockGulpDest.assertDestContains('robots.txt');
    });

    it('dist should contain .htaccess', function() {
      mockGulpDest.assertDestContains('.htaccess');
    });
  });
});
