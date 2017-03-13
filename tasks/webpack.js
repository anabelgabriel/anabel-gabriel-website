const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('webpack', () => {
  return gulp.src('*.js', {read: false})
    .pipe(shell([
      'yarn run webpack'
    ]))
})
