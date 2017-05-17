
var config = require('../config');
var runSequence = require('run-sequence');
var gulp = require('gulp');
var path = require('path');


gulp.task('watch', ['startDev'] , function() {
    
/*  При необходимости можно просто закоментировать/расскоментировать
 таск,который не будет/будет использоваться  */


  // gulp.watch( config.images.watch.svgIcons, ['buildSvgSymbol']);

  gulp.watch( config.styles.watch,  ['sass']);

  gulp.watch( config.html.watch )
    .on('change', function(e){ 

      var str = path.dirname(e.path);
      var res = str.split(path.sep);

      if (res[res.length-1] === 'html_components') {
        global.notUpdateNJKtemplates = false;
        gulp.start('html');
        global.notUpdateNJKtemplates = true;
      }
      else{ rebuildFiles(e, 'updateHtml', 'html'); }
     
    });

  gulp.watch( config.scripts.watch )
    .on('change', function(e){
      rebuildFiles(e, 'updateJs', 'js');
    });

  gulp.watch( config.images.watch.rasterImages )
    .on('change', function(e){   
      rebuildFiles(e, 'updateImg', 'img'); 
    });

  // gulp.watch( config.images.watch.pngIconsForSprite )
  //   .on('change', function (e) {
  //     rebuildFiles(e, 'updatePngSprite', 'buildPngSprite');
  //   });
  // gulp.watch( config.fonts.watch )
  //   .on('change', function(e){
  //     rebuildFiles(e, 'updateFonts', 'convertFonts'); 
  //   });

});



function rebuildFiles(event, specialTask, defaultTask) {
  if (event.type === 'deleted') { gulp.start(specialTask); }
  else { gulp.start(defaultTask); }
}

/*  При необходимости можно просто закоментировать/расскоментировать
 таск,который не будет/будет использоваться  */

/* Настраивается после исследования макета */
gulp.task('startDev',function (cb) {
  runSequence(
    'del:build',
    'img', 
    // 'buildPngSprite',
    // 'buildSvgSymbol',
    [
      // 'convertFonts',
      'sass', 
      'html', 
      'js'
    ], 

    'webserver', cb);
});

gulp.task('prod', function () {
  runSequence(
    'del:build', 
    'clearCache', 
    'img', 
    // 'buildPngSprite',
    // 'svgIconsToBuild', // возможно не нужен
     [
       // 'buildSvgSymbol', 
       // 'convertFonts',
       'sass', 
       'html', 
       'js' 
     ]); 
});
