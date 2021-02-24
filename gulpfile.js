const { src, dest } = require('gulp');
var postcss = require('gulp-postcss');

function cssTask(cb) {
  // place code for your default task here
    const postcss = require('gulp-postcss')
    const sourcemaps = require('gulp-sourcemaps')

    return src('./css/*.css')
      .pipe( sourcemaps.init() )
      .pipe( postcss([ require('precss'), require('autoprefixer'), require('tailwindcss') ]) )
      .pipe( sourcemaps.write('.') )
      .pipe( dest('./build') )
      // cb();
}

exports.default = cssTask
