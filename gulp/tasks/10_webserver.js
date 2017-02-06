
var config = require('../config');
var gulp = require('gulp');
browserSync  = require('browser-sync'); 

 
gulp.task('webserver', function () {
  browserSync(config.browserSyncServerConfig);
});