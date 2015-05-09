'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var plugins = gulp.plugins;

gulp.task('server', ['scripts', 'style', 'static'], function(done) {
  plugins.connect.server({
    port: 8080,
    root: paths.dist
  });
});

gulp.task('watch', function() {
  gulp.watch([paths.app + '/**', paths.style + '/**'], ['scripts', 'style']);
});
gulp.task('connect:watch', ['scripts', 'style', 'static'], function(done) {
  plugins.connect.server({
    port: 8080,
    root: paths.dist,
    livereload: true
  });
});
gulp.task('server:watch', ['connect:watch', 'watch']);
