const gulp = require('gulp');
const git = require('gulp-git');
const prompt = require("gulp-prompt");

let message;

gulp.task('git:clone', function(){
  return git.clone('git@github.com:gabrielbull/anabel-gabriel-website.git', {args: './build'}, function (err) {
    if (err) throw err;
  });
});

gulp.task('git:branch', function(){
  return git.checkout('gh-pages', { args:'-b', cwd: './build/' }, function (err) {
    if (err) throw err;
  });
});

gulp.task('git:message', () =>
  gulp.src('./package.json')
    .pipe(prompt.prompt({
      type: 'input',
      name: 'task',
      message: 'What is the commit message?'
    }, (res) => message = res.task)));

gulp.task('git:add', function(){
  return gulp.src('./build/*')
    .pipe(git.add({ args: '--all', cwd: './build/' }));
});

gulp.task('git:commit', function(){
  return gulp.src('./build')
    .pipe(git.commit(message, { cwd: './build/' }));
});
