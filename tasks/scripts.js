'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var plugins = gulp.plugins;

function packageJsDependencies(min) {
  gulp.src([
    (min) ? 'bower_components/jquery/dist/jquery.min.js' :
      'bower_components/jquery/dist/jquery.js',
    (min) ? 'bower_components/angular/angular.min.js' :
      'bower_components/angular/angular.js',
    (min) ? 'bower_components/angular-ui-router/release/angular-ui-router.min.js' :
      'bower_components/angular-ui-router/release/angular-ui-router.js',
    (min) ? 'bower_components/bootstrap/dist/js/bootstrap.min.js' :
      'bower_components/bootstrap/dist/js/bootstrap.js',
    (min) ? 'bower_components/jasny-bootstrap/dist/js/jasny-bootstrap.min.js' :
      'bower_components/jasny-bootstrap/dist/js/jasny-bootstrap.js',
    'bower_components/modernizer/modernizr.js'
  ])
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.concat('vendor.js'))
  .pipe(plugins.sourcemaps.write('.'))
  .pipe(gulp.dest(paths.dist + '/js'));
}

gulp.task('scripts', ['jscs', 'jshint', 'templates'], function(done) {
  packageJsDependencies(false);
  return gulp.src([paths.app + '/**/*.js', '!' + paths.app + '/**/*-test.js'])
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('app.js'))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist + '/js'));
});

gulp.task('scripts:prod', ['jscs', 'jshint', 'templates'], function(done) {
  packageJsDependencies(true);
  return gulp.src([paths.app + '/**/*.js', '!' + paths.app + '/**/*-test.js'])
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('app.js'))
      .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist + '/js'));
});
