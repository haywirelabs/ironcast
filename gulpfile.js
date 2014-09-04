var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

// JSHint Task
gulp.task('lint', function(){
  gulp.src('./lib/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Browserify Task
gulp.task('browserify', function(){
  gulp.src(['lib/main.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', ['lint'], function(){
  gulp.watch(['lib/*.js'],[
    'lint',
    'browserify'
  ]);
});