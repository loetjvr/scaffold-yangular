/* jshint node:true */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var path = require('path');

gulp.task('templates', function() {
  return gulp.src([
    '.bowerrc',
    '.editorconfig',
    '.jscsrc',
    '.jshintrc',
    '.gitignore',
    'bower.json',
    'package.json',
    'gulpfile.js',
    'app/images/yeoman.png',
    'app/scripts/app.js',
    'app/scripts/controllers/main.js',
    'app/styles/main.less',
    'app/views/main.html',
    'app/404.html',
    'app/favicon.ico',
    'app/index.html',
    'app/robots.txt',
    'test/karma.conf.js',
    'test/spec/controllers/main.js'
  ], {base: '.'})
  .pipe($.rename(function(file) {
    if (file.basename[0] === '.') {
      file.basename = '_' + file.basename.slice(1);
    }
  }))
  .pipe($.replace(/scaffoldYangular/g, '<%= appname %>'))
  .pipe(gulp.dest('gen/templates/app'));
});

gulp.task('apptemplates', function() {
  return gulp.src([
    'app/views/_view.html',
    'app/scripts/controllers/_controller.js',
    'app/scripts/directives/_directive.js',
    'app/scripts/filters/_filter.js',
    'app/scripts/services/_constant.js',
    'app/scripts/services/_factory.js',
    'app/scripts/services/service.js',
  ])
  .pipe($.flatten())
  .pipe($.replace(/scaffoldYangular/g, '<%= appname %>'))
  .pipe($.replace(/_constant/g, '<%= name %>'))
  .pipe($.replace(/'directive'/g, '\'<%= name %>\''))
  .pipe($.replace(/_directive/g, '<%= name %>'))
  .pipe($.replace(/_factory/g, '<%= name %>'))
  .pipe($.replace(/_service/g, '<%= name %>'))
  .pipe($.replace(/_filter/g, '<%= name %>'))
  .pipe($.replace(/_view/g, '<%= name %>'))
  .pipe($.replace(/ControllerCtrl/g, '<%= name %>Ctrl'))
  .pipe(gulp.dest('gen/templates/tasks/app'));
});

gulp.task('testtemplates', function() {
  return gulp.src([
    'test/spec/controllers/_controller.js',
    'test/spec/directives/_directive.js',
    'test/spec/filters/_filter.js',
    'test/spec/services/_constant.js',
    'test/spec/services/_factory.js',
    'test/spec/services/service.js',
  ])
  .pipe($.flatten())
  .pipe($.replace(/scaffoldYangular/g, '<%= appname %>'))
  .pipe($.replace(/_constant/g, '<%= name %>'))
  .pipe($.replace(/directive/g, '<%= name %>'))
  .pipe($.replace(/_factory/g, '<%= name %>'))
  .pipe($.replace(/_service/g, '<%= name %>'))
  .pipe($.replace(/_filter/g, '<%= name %>'))
  .pipe($.replace(/ControllerCtrl/g, '<%= name %>Ctrl'))
  .pipe(gulp.dest('gen/templates/tasks/test'));
});

gulp.task('scripts', ['templates'], function() {
  var appDir = path.join(process.cwd(), 'gen/templates/app/app/');

  return gulp.src(appDir + 'index.html')
    .pipe($.inject(gulp.src(appDir + 'scripts/**/*.js'), {
      starttag: '<!-- build:js({.tmp,app}) scripts/scripts.js -->',
      endtag: '<!-- endbuild -->',
      relative: true
    }))
    .pipe(gulp.dest(appDir));
});

gulp.task('clean', require('del').bind(null, ['gen']));

gulp.task('gen', ['templates', 'apptemplates', 'testtemplates', 'scripts'],
  function() {
  return gulp.src('gen/**/*').pipe($.size({title: 'gen', gzip: true}));
});

gulp.task('generate', ['clean'], function() {
  gulp.start('gen');
});

gulp.start('generate');
