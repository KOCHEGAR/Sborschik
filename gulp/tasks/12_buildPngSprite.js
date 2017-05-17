

var gulp = require('gulp');
var config = require('../config');
var p = require('gulp-load-plugins')();
var pngquant  = require('imagemin-pngquant'); 
var bufferino = require('vinyl-buffer');
var merge = require('merge-stream');
var path = require('path');



// то,куда будут складываться препроцессорные файлы с переменными спрайта
var scssDestFolder = 'src/style/scss_components/scss_sprite/';


gulp.task('buildPngSprite', p.folders(config.images.src.spriteSrcFolder, function (folder) { 

    var imgURLinCSS = '../img/pngSprites/' + folder + '/' + folder + '.png';
    
    var spriteData = gulp.src( path.join(config.images.src.spriteSrcFolder, folder,'*.png') )
      .pipe(p.plumber({
          handleError: function (err) {
              console.log(err);
              this.emit('end');
          }
      }))
      .pipe(p.spritesmith({
        imgName: folder + '.png',
        cssName: '_'+ folder + '.scss',
        imgPath: imgURLinCSS,
        padding: 1
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
      .pipe(gulp.dest( config.images.dest.spriteDestFolder + folder ));

     var cssStream = spriteData.css
      .pipe(gulp.dest( scssDestFolder ));

  // Return a merged stream to handle both `end` events 
  return merge(imgStream, cssStream);
}));