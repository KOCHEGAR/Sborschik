var gulp = require('gulp');
var runSequence = require('run-sequence');



gulp.task('updateHtml', function(){
  runSequence('del:buildHtmlDir', 'html');
});
gulp.task('updateFonts', function(){
  runSequence('del:buildFontsDir', 'convertFonts');
});
gulp.task('updateImg', function(){
  runSequence('del:buildImgDir','img');
});
gulp.task('updateJs', function(){
  runSequence('del:buildJsDir','js');
});
gulp.task('updatePngSprite', function(){
  runSequence('del:buildPngSpriteDir','buildPngSprite');
});
// gulp.task('cleanAndUpdateSvg', function(){
//   // 'svgsymbol' // 
// });
