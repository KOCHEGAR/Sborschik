var gulp = require('gulp');
// var spritesmith = require('gulp.spritesmith');
var config = require('../config');
var p = require('gulp-load-plugins')();
var pngquant  = require('imagemin-pngquant'); 
var bufferino = require('vinyl-buffer');
var merge = require('merge-stream');

 
gulp.task('buildPngSprite', function () { // тест спрайтоварильщика

  /*
     pngIconsForSprite  - это директория,которая будет подвержена переимнованию,
                        например, для png картинок отдельного спрайта
      
  */

  // тестовый путь
  var spriteData = gulp.src( config.images.src.pngIconsForSprite )
  .pipe(p.spritesmith({
    imgName: 'pngIconSprite.png',
    cssName: '_pngIconSprite.scss',
    imgPath: '../img/pngSprites/pngIconSprite.png',
    padding: 2
  }));

  var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin` 
    .pipe(bufferino())
    .pipe(p.cache(p.imagemin({ 
      verbose: true,
      interlaced: true,
      progressive: true, 
      use: [pngquant()],
    })))
    .pipe(gulp.dest( config.images.dest.pngSprite ));
 
  // Pipe CSS stream through CSS optimizer and onto disk 
  var cssStream = spriteData.css
    .pipe(gulp.dest('src/style/scss_components/'));
 
  // Return a merged stream to handle both `end` events 
 return merge(imgStream, cssStream);
 

/*    var spriteData2 = gulp.src('src/img/rasterSprites/pngToSprite/*.png')
    .pipe(spritesmith({
      imgName: 'mysprite228.png',
      cssName: '_mysprite228.scss',
      imgPath: '../img/rasterImages/mysprite228.png',
      padding: 2
    }));

    var cssstr = spriteData2.css.pipe(gulp.dest('src/style/scss_components/'));
    var imgstr = spriteData2.img.pipe(gulp.dest('build/img/rasterImages/'));
    merge(imgstr,cssstr);*/
});