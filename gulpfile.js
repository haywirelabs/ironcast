'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

// JSHint Task
gulp.task('lint', function(){
  gulp.src('app/scripts/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Browserify Task

gulp.task('browserify', function(){
  gulp.src(['app/scripts/main.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('views', function(){
  gulp.src('app/index.html')
  .pipe(gulp.dest('dist/'));
  gulp.src('./app/views/**/*')
  .pipe(gulp.dest('dist/views/'));
});

gulp.task('build', ['lint', 'browserify', 'views'], function(){
  process.stdout.write('\n      ____ \n');
  process.stdout.write('    ,\'   Y . \n ');
  process.stdout.write('  /        \\ \n');
  process.stdout.write('   \\ ()  () /\n');
  process.stdout.write('    `. /\  ,\'  \n');
  process.stdout.write('8====| \'  |====8\n\n');
  process.stdout.write('Your application has been cast.\n\n');
});

gulp.task('watch', ['lint'], function(){
  gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'],[
    'lint',
    'browserify'
  ]);
  gulp.watch(['app/index.html', 'app/views/**/*.html'], ['views']);
});

/**
*  Gulp Server
*/

var embedlr = require('gulp-embedlr'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

var server = express();

server.use(livereload({port: livereloadport}));
server.use(express.static('./dist'));

server.all('/*', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.sendFile('index.html', { root: 'dist' })
});

gulp.task('serve',['build'], function(){
  server.listen(serverport);
  lrserver.listen(livereloadport);
  gulp.run('watch');
});