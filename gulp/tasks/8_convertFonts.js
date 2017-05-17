var config = require('../config');
var p = require('gulp-load-plugins')();
var gulp = require('gulp');

gulp.task('convertFonts', function() {

  gulp.src(config.fonts.src.woff2)
    .pipe(p.cssfont64Fork())
    .pipe(p.rename({ suffix: '.woff2' }))
    .pipe(gulp.dest(config.fonts.dest));


  gulp.src(config.fonts.src.woff)
    .pipe(p.cssfont64Fork())
    .pipe(p.rename({ suffix: '.woff' }))
    .pipe(gulp.dest(config.fonts.dest));


  // .pipe(p.concatCss('fonts-bundle.css'))
  //.pipe(gulp.dest( config.fonts.src.justDir ))
  // .pipe(gulp.dest( config.fonts.dest ))
});
