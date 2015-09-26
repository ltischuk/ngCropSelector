'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

// Compile Scripts
gulp.task('scripts', function(){
  return gulp.src([
    paths.src + '/ng-crop-selector/ng-crop-selector.js',
    paths.src + '/ng-crop-selector/selector-draw-canvas.js',
    paths.src + '/ng-crop-selector/crop-selection.js',
  ])
    .pipe($.concat('ng-crop-selector.js'))
    .pipe(gulp.dest(paths.dist + '/unminified/'));
});

gulp.task('dist:js', function(){
  return gulp.src(paths.dist + '/unminified/' + '*.js')
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    //  .pipe($.header(Config.banners.minified))
    .pipe(gulp.dest(paths.dist + '/minified/'));
});


gulp.task('clean', function (done) {
  $.del([paths.dist + '/', paths.tmp + '/'], done);
});

gulp.task('build', ['scripts','dist:js']);
