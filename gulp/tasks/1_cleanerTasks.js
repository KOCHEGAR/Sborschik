
var config = require('../config');
var p = require('gulp-load-plugins')();
var gulp = require('gulp');
var del = require('del');
 // var cache = require('gulp-cache');



gulp.task('clearCache', function(){
  return p.cache.clearAll();
});



gulp.task('del:build', function() {
  del.sync([config.clean.build.root]);
});
gulp.task('del:buildImgDir', function () {
  del.sync([config.clean.build.img]);
});
gulp.task('del:buildFontsDir', function () {
  del.sync([config.clean.build.fonts]);
});
gulp.task('del:buildHtmlDir', function () {
  del.sync([config.clean.build.html]);
});
gulp.task('del:buildJsDir', function () {
  del.sync([config.clean.build.js]);
});
gulp.task('del:buildPngSpriteDir', function () {
  del.sync([config.clean.build.pngSprite]);
});
// gulp.task('del:buildSvgDir', function () {
//   del.sync([paths.clean.build.svg]);
// });

