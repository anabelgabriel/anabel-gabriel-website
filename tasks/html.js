const gulp = require('gulp');
const shell = require('gulp-shell');
const sitemap = require('./sitemap.json');
const fs = require('fs');

const createPages = (pages, cb) => {
  if (pages.length) {
    const page = pages.shift();
    createPage(page)
      .then(() => createPages(pages, cb));
  } else {
    cb();
  }
};

const createPage = (page) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./assets/index.html', 'utf8', function (err, data) {
      if (err) return reject();
      page = page.replace(/^\//, '');
      if (!page) page = 'index';
      fs.writeFile(`./build/${page}.html`, data, function(err) {
        if(err) return reject();
        resolve();
      });
    });
  });
};

gulp.task('html', (cb) => {
  createPages(sitemap, cb);
})
