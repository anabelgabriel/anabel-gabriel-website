const gulp = require('gulp');
const del = require('del');

gulp.task('clean:repo', () =>
  del('./build', {force:true}));

gulp.task('clean:build', () =>
  del(['./build/*', '!./build/.git'], {force:true}));
