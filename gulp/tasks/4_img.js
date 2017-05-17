
var config = require('../config');
var p = require('gulp-load-plugins')();
var gulp = require('gulp');
var pngquant  = require('imagemin-pngquant'); 

var browserSync  = require('browser-sync');
var reload = browserSync.reload;

gulp.task('img', function() {
  return gulp.src( config.images.src.rasterImages ) 
    .pipe(p.plumber(function (er) {
        console.log(er.toString());
        this.emit('end');
     }))
    .pipe(p.cache(p.imagemin({  
      verbose: true,
      interlaced: true,
      progressive: true,
      use: [pngquant()],

    })))
    .pipe(gulp.dest( config.images.dest.rasterImages ))
    .pipe(reload({stream: true}));

});