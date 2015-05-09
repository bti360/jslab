'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var plugins = gulp.plugins;

gulp.task('clean', [], function(done) {
  plugins.del([paths.dist + '/**'], done);
});
