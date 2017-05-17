var config = require('../config');
var p = require('gulp-load-plugins')();
var gulp = require('gulp');
var filepath = require('path');

gulp.task('svgIconsToBuild', function() {

  return gulp.src(config.images.src.svgIcons)
    .pipe(p.imagemin({
      verbose: true,

      svgoPlugins: [{ removeViewBox: false }]
    }))
    .pipe(p.cheerio({
      run: function($, file) {
        $('[fill]').removeAttr('fill');
        //$('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
        var prefix = filepath.basename(file.relative, filepath.extname(file.relative));

        $('svg').addClass(prefix + '-svg').html();
      },
      parserOptions: { xmlMode: true }
    }))
    //cheerio plugin create unnecessary string '&gt;', so replace it.
    .pipe(p.replace('&gt;', '>'))
    .pipe(gulp.dest(config.images.dest.svgIcons));

});
