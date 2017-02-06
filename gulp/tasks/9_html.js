
var config = require('../config');
var p = require('gulp-load-plugins')();
var gulp = require('gulp');
var browserSync  = require('browser-sync');
var reload = browserSync.reload;

gulp.task('html', function(){

  return gulp.src( config.html.src )

    .pipe(p.plumber())
    .pipe( p.if( global.notUpdateHtmlTmplt, 
                 p.changed( config.html.dest, {extension: '.html'})) ) 
    
    .pipe(p.fileInclude({
      prefix: '@@',
      basepath: 'src/html_components/'
    }))
    .pipe(p.htmlPrettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest( config.html.dest ))
    .pipe(reload({stream: true}))
});