
var config = require('../config');
var p = require('gulp-load-plugins')();
var gulp = require('gulp');

var reload = require('browser-sync').reload;

gulp.task('js', function(){

  return gulp.src(config.scripts.src)
    .pipe(p.plumber())
    .pipe(p.fileInclude({
      prefix: '//=',
      basepath: '@file'
    }))
    .pipe(gulp.dest(config.scripts.dest))

    .pipe(p.rename({suffix: '.min'}))
    .pipe(p.uglify())
    .pipe(gulp.dest( config.scripts.dest ))
    .pipe(reload({stream: true}))
});