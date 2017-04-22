
var cfg = require('../config');
var p = require('gulp-load-plugins')();
var gulp = require('gulp');
var browserSync  = require('browser-sync');
var reload = browserSync.reload;

gulp.task('html', function(){

  return gulp.src( cfg.html.src )

    .pipe(p.plumber())
    .pipe( p.if( global.notUpdateHtmlTmplt, 
                 p.changed( cfg.html.dest, {extension: '.html'})) ) 
    
    .pipe(p.fileInclude({
      prefix: '@@',
      basepath: 'src/html_components/'
    }))
    .pipe(p.jsbeautifier({ 
        
        config: cfg.jsbeautifier.src
     
      }))
    .pipe(gulp.dest( cfg.html.dest ))
    .pipe(reload({stream: true}))
});