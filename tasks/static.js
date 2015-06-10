'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var plugins = gulp.plugins;

gulp.task('static', [], function(done) {
  return gulp.src([paths.static + '/**/*.*'])
    .pipe(gulp.dest(paths.dist));
});
