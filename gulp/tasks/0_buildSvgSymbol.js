

var config = require('../config');
var p = require('gulp-load-plugins')();
var gulp = require('gulp');
var browserSync  = require('browser-sync');
var reload = browserSync.reload;


gulp.task('buildSvgSymbol', function(){

  // create svg-symbol sprite from svg icons

  return gulp.src( config.images.src.svgIcons )
    .pipe(p.plumber(function (er) {
        console.log(er.toString());
        this.emit('end');
     }))
    .pipe(p.imagemin({  
      verbose: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(p.cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        //$('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {xmlMode: true}
    }))
    //cheerio plugin create unnecessary string '&gt;', so replace it.
    .pipe(p.replace('&gt;', '>'))
    .pipe(p.svgSymbols({templates: ['default-svg']}))
    .pipe(p.cheerio({
      run: function ($) {
        $('svg').attr({'style' : 'border: 0 !important;clip: rect(0 0 0 0) !important;height: 1px !important;margin: -1px !important;overflow: hidden !important;padding: 0 !important; position: absolute !important;width: 1px !important;'});
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(p.rename('symbols.svg'))
    
    // строка ниже - путь до папки,в которой лежит svg-спрайт, 
    // который будет тягать svgToLocalStorage.js. По умолчанию выключен.
    // .pipe(gulp.dest( config.images.dest.externalSvgSymbol ))
    
    // строка ниже - путь до папки, в которой лежит svg-спрайт, 
    // который будет вставлен в html при сборке. По умочанию включен.
    .pipe(gulp.dest( config.images.dest.internalSvgSymbol ))
    .pipe(reload({stream: true}));

});