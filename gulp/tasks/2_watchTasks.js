
var config = require('../config');
var runSequence = require('run-sequence');
var gulp = require('gulp');


gulp.task('watch', ['startDev'] , function() {
    
  gulp.watch( config.images.watch.svgIcons, ['buildSvgSymbol']);
  gulp.watch( config.styles.watch,  ['sass']);
    
  gulp.watch( config.html.watchTemplates )
    .on('change', function () {

      global.notUpdateHtmlTmplt = false;
      gulp.start('html');
      global.notUpdateHtmlTmplt = true;
      console.log('htmlTmplt updated');
    });

  gulp.watch( config.html.watchPages )
    .on('change', function(e){ 
      rebuildFiles(e, 'updateHtml', 'html'); 
    });

  gulp.watch( config.scripts.watch )
    .on('change', function(e){
      rebuildFiles(e, 'updateJs', 'js');
    });
  gulp.watch( config.images.watch.rasterImages )
    .on('change', function(e){    
      rebuildFiles(e, 'updateImg', 'img'); 
    });

  gulp.watch( config.fonts.watch )
    .on('change', function(e){
      rebuildFiles(e, 'updateFonts', 'convertFonts'); 
    });

});



function rebuildFiles(event, specialTask, defaultTask) {
  if (event.type === 'deleted') { gulp.start(specialTask); }
  else { gulp.start(defaultTask); }
}


gulp.task('startDev',function (cb) {
  runSequence('del:build','img', 'buildSvgSymbol', ['convertFonts','sass', 'html', 'js'], 'webserver', cb)
});

// gulp.task('prod', function () {
//   runSequence('del:build', 'clearCache', 'img', 'svgIconsToBuild', ['buildSvgSymbol', 'convertFonts','sass', 'html', 'js'] ); 
// });
