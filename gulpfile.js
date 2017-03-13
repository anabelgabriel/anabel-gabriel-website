require('./tasks/clean');
require('./tasks/webpack');
require('./tasks/html');
require('./tasks/assets');
require('./tasks/git');
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

//gulp.task('build', gulpSequence('git:message', 'clean', 'git:clone', 'git:branch', 'webpack', 'assets', 'html', 'git:add', 'git:commit'));
gulp.task('build', gulpSequence('git:message', 'git:branch', 'git:add', 'git:commit'));
