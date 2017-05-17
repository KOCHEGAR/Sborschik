var config = require('../config');
var p = require('gulp-load-plugins')();
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('html', function() {

  return gulp.src(config.html.src)
    .pipe(p.plumber(function(er) {
      console.log(er.toString());
      this.emit('end');
    }))
  
    .pipe( p.if( global.notUpdateNJKtemplates, 
                 p.changed( config.html.dest, {extension: '.html'})) ) 
    
    .pipe(p.nunjucksRender({
      path: ['src']
    }))
    .pipe(p.jsbeautifier({ config: config.jsbeautifier.src }))
    .pipe(gulp.dest(config.html.dest))
    .pipe(reload({ stream: true }));
});
