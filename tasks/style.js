'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var plugins = gulp.plugins;

function packageCssDependencies(min) {
  gulp.src('bower_components/bootstrap/dist/fonts/**/*.*')
    .pipe(gulp.dest(paths.dist + '/fonts'));
  gulp.src([
    (min) ? 'bower_components/bootstrap/dist/css/bootstrap.min.css' :
      'bower_components/bootstrap/dist/css/bootstrap.css',
    (min) ? 'bower_components/bootstrap/dist/css/bootstrap-theme.min.css' :
      'bower_components/bootstrap/dist/css/bootstrap-theme.css'
  ])
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.concat('vendor.css'))
  .pipe(plugins.sourcemaps.write('.'))
  .pipe(gulp.dest(paths.dist + '/css'));
}

gulp.task('style', [], function(done) {
  packageCssDependencies(false);
  return gulp.src(paths.style + '/**/*.scss')
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({outputStyle: 'nested'}).on('error', plugins.sass.logError))
      .pipe(plugins.concat('app.css'))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist + '/css'));
});

gulp.task('style:prod', [], function(done) {
  packageCssDependencies(true);
  return gulp.src(paths.style + '/**/*.scss')
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
      .pipe(plugins.concat('app.css'))
      .pipe(plugins.minifyCss())
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist + '/css'));
});
