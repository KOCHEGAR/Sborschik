var gulp = require('gulp');
var config = require('../config');
var p = require('gulp-load-plugins')();


gulp.task('zipProduction', function(){

  gulp.src( config.zipFiles.srcSources,{ base: '.' } ) // именно точка, мать её
    .pipe( p.zip('developmentFiles.zip') )
    .pipe( gulp.dest(config.zipFiles.dest) );

  gulp.src( config.zipFiles.srcReady,{ base: '.' } )
    .pipe( p.zip('readyFiles.zip') )
    .pipe( gulp.dest(config.zipFiles.dest ) );
});