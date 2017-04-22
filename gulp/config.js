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
    'src' : './src/js/**/*.js',
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


      'pngIconsForSprite': './src/img/rasterSprites/pngToSprite/*.png'
    },

    'dest': {
      'rasterImages': './build/img/rasterImages/',
      'svgImages': './build/img/svgImages/',

      //that need for svg
      'svgIcons': './build/img/svgImages/svgIcons/',
      'svgSymbol': './build/img/svgImages/svgSymbol/',

      'pngSprite': './build/img/pngSprites/'
    },

    'watch': {
      'svgIcons': 'src/img/svgImages/svgIcons/**/*.svg',
      'rasterImages': 'src/img/rasterImages/**/*',
      // директория для теста
      'pngIconsForSprite': 'src/img/rasterSprites/pngToSprite/*.png'
    }
  },

  'html': {

    'src': './src/*.html',
    'dest': './build/',

    
    'watchPages': 'src/*.html',
    'watchTemplates': 'src/html_components/**/*.html'
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

  'clean':{

    'build': {

        'root':       './build',
        'img':        './build/img/rasterImages',
        'pngSprite':  './build/img/pngSprite',
        'html':       './build/*.html',
        'svg':        './build/img/svgImages',
        // 'svgSprite':  './build/img/svg/symbol',
        // 'svgIcons':   './build/img/svg/svgicons',
        'js':         './build/js',
        'fonts':      './build/fonts/'
    },
  }
};