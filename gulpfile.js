require('./tasks/clean');
require('./tasks/webpack');
require('./tasks/html');
require('./tasks/assets');
require('./tasks/git');
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

gulp.task('build', gulpSequence(
  'git:message',
  'clean:repo',
  'git:clone',
  'git:branch',
  'clean:build',
  'webpack',
  'assets',
  'html',
  'git:add',
  'git:commit',
  'git:push'
));
