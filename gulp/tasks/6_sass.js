
// var handleErrors = require('../util/handleErrors');

var config = require('../config');
var p = require('gulp-load-plugins')();
var gulp = require('gulp');
var px2rem = require('postcss-plugin-px2rem');

var browserSync  = require('browser-sync');
var reload = browserSync.reload;




var proc = [

    px2rem({
        //replace: false,
        rootValue: 16, 
     /* --- 
       тут можно указать селекторы,которые не попадут под обработку.
       настраивается по надобности
      --- */
        selectorBlackList: ['.container--custom','leave-px'],
        /////// ---
        minPixelValue: 1
    })

] ;
   

gulp.task('sass', function () {      
       
  return gulp.src(config.styles.src)
     .pipe(p.plumber(function (er) {
        console.log(er.toString());
        this.emit('end');
     }))
    .pipe(p.changed(config.styles.dest, {extension: '.scss'}))
    .pipe(p.sass({outputStyle: 'compressed'}))
    .pipe(p.autoprefixer())
    .pipe(p.combineMq({beautify: true}))
    .pipe(gulp.dest( config.styles.dest ))
    // .pipe(reload({stream: true}))
    .pipe(p.rename({suffix: ".min"}))
    .pipe(p.cssnano())
    .pipe(gulp.dest( config.styles.dest ))
    .pipe(reload({stream: true}))
    .pipe(p.rename({suffix: ".rem"}))
    .pipe(p.postcss( proc ))
    .pipe(gulp.dest( config.styles.dest ))
    .pipe(reload({stream: true}))
    
});

