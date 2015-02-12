/* jshint node:true */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('templates', function() {
  gulp.src([
    '**/**',
    '.bowerrc',
    '.editorconfig',
    '.jscsrc',
    '.jshintrc',
    '.gitignore',
    '!node_modules{,/**}',
    '!bower_components{,/**}',
    '!app/scripts/directives{,/**}',
    '!app/scripts/services{,/**}',
    '!app/scripts/filters{,/**}',
    '!test/gulp{,/**}',
    '!test/spec/directives{,/**}',
    '!test/spec/services{,/**}',
    '!test/spec/filters{,/**}',
    '!generate.js',
    '!app/scripts/controllers/_controller.js',
    '!test/spec/controllers/_controller.js',
    '!app/views/_view.html',
  ])
  .pipe($.rename(function(file) {
    if (file.basename[0] === '.') {
      file.basename = '_' + file.basename.slice(1);
    }
  }))
  .pipe($.replace(/scaffoldYangular/g, '<%= appName %>'))
  .pipe(gulp.dest('gen/templates'));
});

gulp.task('apptemplates', function() {
  gulp.src([
    'app/scripts/*/**',
    'app/views/_view.html',
    '!app/scripts/controllers/main.js'
  ])
  .pipe($.flatten())
  .pipe($.replace(/scaffoldYangular/g, '<%= appName %>'))
  .pipe($.replace(/_constant/g, '<%= name %>'))
  .pipe($.replace(/'directive'/g, '\'<%= name %>\''))
  .pipe($.replace(/_directive/g, '<%= name %>'))
  .pipe($.replace(/_factory/g, '<%= name %>'))
  .pipe($.replace(/_service/g, '<%= name %>'))
  .pipe($.replace(/_filter/g, '<%= name %>'))
  .pipe($.replace(/_view/g, '<%= name %>'))
  .pipe($.replace(/ControllerCtrl/g, '<%= name %>Ctrl'))
  .pipe(gulp.dest('gen/tasktemplates/app'));
});

gulp.task('testtemplates', function() {
  gulp.src([
    'test/spec/**',
    '!test/spec/controllers/main.js'
  ])
  .pipe($.flatten())
  .pipe($.replace(/scaffoldYangular/g, '<%= appName %>'))
  .pipe($.replace(/_constant/g, '<%= name %>'))
  .pipe($.replace(/directive/g, '<%= name %>'))
  .pipe($.replace(/_factory/g, '<%= name %>'))
  .pipe($.replace(/_service/g, '<%= name %>'))
  .pipe($.replace(/_filter/g, '<%= name %>'))
  .pipe($.replace(/ControllerCtrl/g, '<%= name %>Ctrl'))
  .pipe(gulp.dest('gen/tasktemplates/test'));
});

gulp.task('clean', require('del').bind(null, ['gen']));

gulp.task('gen', ['templates', 'apptemplates', 'testtemplates'],
  function() {
  return gulp.src('gen/**/*').pipe($.size({title: 'gen', gzip: true}));
});

gulp.task('generate', ['clean'], function() {
  gulp.start('gen');
});

gulp.start('generate');
