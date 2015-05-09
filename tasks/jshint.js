'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var plugins = gulp.plugins;

function runJshint(paths, done) {
  var tasks = [];
  paths.forEach(function(path) {
    gulp.task(path, function() {
      return gulp.src(path + '/**/*.js')
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('jshint-stylish'));
    });
  });
  return plugins.sequence(paths, done);
}

gulp.task('jshint', [], function(done) {
  return runJshint([paths.app, paths.e2e, paths.tasks], done);
});
gulp.task('jshint:app', [], function(done) {
  return runJshint([paths.app], done);
});
gulp.task('jshint:e2e', [], function(done) {
  return runJshint([paths.e2e], done);
});
gulp.task('jshint:tasks', [], function(done) {
  return runJshint([paths.tasks], done);
});
