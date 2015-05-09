'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var plugins = gulp.plugins;

function runJscs(paths, fix, done) {
  var tasks = [];
  paths.forEach(function(path) {
    gulp.task(path, function() {
      if (fix) {
        return gulp.src(path + '/**/*.js')
          .pipe(plugins.jscs({
            configPath: '.jscsrc',
            fix: true
          }))
          .pipe(gulp.dest(path));
      } else {
        return gulp.src(path + '/**/*.js')
          .pipe(plugins.jscs({
            configPath: '.jscsrc'
          }));
      }
    });
  });
  return plugins.sequence(paths, done);
}

gulp.task('jscs', [], function(done) {
  return runJscs([paths.app, paths.e2e, paths.tasks], false, done);
});
gulp.task('jscs:fix', [], function(done) {
  return runJscs([paths.app, paths.e2e, paths.tasks], true, done);
});
gulp.task('jscs:app', [], function(done) {
  return runJscs([paths.app], false, done);
});
gulp.task('jscs:app:fix', [], function(done) {
  return runJscs([paths.app], true, done);
});
gulp.task('jscs:e2e', [], function(done) {
  return runJscs([paths.e2e], false, done);
});
gulp.task('jscs:e2e:fix', [], function(done) {
  return runJscs([paths.e2e], true, done);
});
gulp.task('jscs:tasks', [], function(done) {
  return runJscs([paths.tasks], false, done);
});
gulp.task('jscs:tasks:fix', [], function(done) {
  return runJscs([paths.tasks], true, done);
});
