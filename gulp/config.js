'use strict';

/*
  
  Дополнения вносятся по необходимости

*/

module.exports = {

  'browserSyncServerConfig': {  
      'server': {
          'baseDir': "./build"
      },
      // 'tunnel': true,
      'host': 'localhost',
      'port': 9001,
      'logPrefix': "Khabarovskii",
      'notify': true // уведомления
  },
  
  'jsbeautifier': {
    'src' : '.jsbeautifyrc'
  },

  'styles': {
    'src' : './src/style/**/*.scss',
    'dest': './build/css',
    'watch': 'src/style/**/*.scss'
  },

  'scripts': {

    'src' : './src/js/*.js',
    'dest': './build/js',
    'watch': 'src/js/**/*.js'
  },
  
  // тут  точная настройка распределения свг и имг
  'images': {
    'src' : {

      'rasterImages': './src/img/rasterImages/**/*.{png,jpeg,jpg,gif}',
      'svgImages': './src/img/svgImages/**/*.svg',

      //that need for svg
      'svgIcons': './src/img/svgImages/svgIcons/**/*.svg',


      'spriteSrcFolder': './src/img/rasterSprites/'
    },
 
    'dest': {
      'rasterImages': './build/img/rasterImages/',
      'svgImages': './build/img/svgImages/',

      //that need for svg
      'svgIcons': './build/img/svgImages/svgIcons/', 

      // для случая, если svg-sprite загружается из localstorage файлом svgToLocalStorage.js
      'externalSvgSymbol': './build/img/svgImages/svgSymbol/',
      // для случая, если svg-sprite нужно вставлять прямо при сборке
      'internalSvgSymbol' : './src/img/svgImages/svgSprite/',


      'spriteDestFolder': './build/img/pngSprites/'
    },

    'watch': {
      'svgIcons': 'src/img/svgImages/svgIcons/**/*.svg',
      'rasterImages': 'src/img/rasterImages/**/*',
   
      'pngIconsForSprite': 'src/img/rasterSprites/**/*.png'
    }
  },

  'html': {

    'src': './src/*.njk',
    'dest': './build/',
    
    'watch': ['src/*.njk', 'src/html_components/**/*.njk']
  },

  'fonts': {

    'src': {
      //// --
      'woff2': './src/fonts/**/*.woff2',
      'woff': './src/fonts/**/*.woff',
      //// --
      'onlyWoffWoff2': './src/fonts/**/*.{woff,woff2}',
      'justDir': './src/fonts/'
    },
    
    'dest': './build/fonts/',

    'watch': 'src/fonts/**/*'
  },
  'zipFiles':{
   
    'srcSources': [
      //добавлять по необходимости
                    './src/**/*',
                    './gulp/**/*',
                    './bower.*',
                    './gulpfile.*',
                    './package.json',
                    './yarn.lock',
                    './.jsbeautifyrc'
                   ],
    'srcReady': './build/**/*',
    'dest': 'ready_archives/'
  },

  'clean':{

    'build': {

        'root':       './build',
        'img':        './build/img/rasterImages',
        'pngSprite':  './build/img/pngSprites',
        'html':       './build/*.html',
        'svg':        './build/img/svgImages',
        // 'svgSprite':  './build/img/svg/symbol',
        // 'svgIcons':   './build/img/svg/svgicons',
        'js':         './build/js',
        'fonts':      './build/fonts'
    },
  }
};