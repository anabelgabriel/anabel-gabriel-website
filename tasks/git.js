const gulp = require('gulp');
const git = require('gulp-git');
const prompt = require("gulp-prompt");

let message;

gulp.task('git:clone', function(cb) {
  return git.clone('git@github.com:anabelgabriel/anabel-gabriel-website.git', {args: './build'}, function (err) {
    if (err) throw err;
    cb();
  });
});

gulp.task('git:branch', function(cb) {
  return git.checkout('gh-pages', { cwd: './build/' }, function (err) {
    if (err) throw err;
    cb();
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

gulp.task('git:push', function() {
  return git.push('origin', 'gh-pages', { cwd: './build/' }, function (err) {
    if (err) throw err;
  })
});
