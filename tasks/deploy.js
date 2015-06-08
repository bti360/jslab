'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var plugins = gulp.plugins;

gulp.task('deploy', function(done) {
  return gulp.src(paths.dist + '/**/*')
    .pipe(plugins.ghPages({
        message: 'Update from master',
        branch: 'gh-pages',
        push: true
    }));
});
