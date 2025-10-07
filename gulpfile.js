const { src, dest, watch, series, parallel } = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const browserSync = require('browser-sync').create();
const del = require('del');
const plumber = require('gulp-plumber');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const gulpIf = require('gulp-if');
const path = require('path');
const fs = require('fs');

const isProd = process.env.NODE_ENV === 'production';

const paths = {
  src: 'src',
  templates: 'src/templates',
  assets: {
    css: 'src/assets/css/**/*',
    js: 'src/assets/js/**/*',
    img: 'src/assets/img/**/*'
  },
  dist: 'dist'
};

// Clean dist folder
function cleanTask() {
  return del([paths.dist + '/**', '!' + paths.dist]);
}

// Compile Nunjucks templates
function templates() {
  return src([paths.templates + '/*.njk'])
    .pipe(plumber())
    .pipe(data(file => {
      const globalData = {};
      globalData.page = path.basename(file.path, '.njk');
      return globalData;
    }))
    .pipe(nunjucksRender({
      path: [paths.templates, paths.templates + '/partials']
    }))
    .pipe(dest(paths.dist))
    .pipe(browserSync.stream());
}

// Compile CSS
function styles() {
  return src('src/assets/css/style.css')
    .pipe(plumber())
    .pipe(gulpIf(isProd, cleanCSS({ level: 2 })))
    .pipe(dest(paths.dist + '/assets/css'))
    .pipe(browserSync.stream());
}

// Compile JS
function scripts() {
  return src(paths.assets.js)
    .pipe(plumber())
    .pipe(gulpIf(isProd, uglify()))
    .pipe(dest(paths.dist + '/assets/js'))
    .pipe(browserSync.stream());
}

// Optimize images
function images() {
  return src(paths.assets.img)
    .pipe(plumber())
    .pipe(gulpIf(isProd, imagemin()))
    .pipe(dest(paths.dist + '/assets/img'))
    .pipe(browserSync.stream());
}

// Copy static files (if needed)
function copyStatic() {
  return src('src/assets/static/**/*')
    .pipe(dest(paths.dist + '/assets/static'));
}

// Serve and watch for changes
function serve() {
  browserSync.init({
    server: {
      baseDir: paths.dist
    },
    port: 5500,
    open: true
  });

  watch(paths.templates + '/**/*.njk', templates);
  watch(paths.assets.css, styles);
  watch(paths.assets.js, scripts);
  watch(paths.assets.img, images);
  watch('src/assets/static/**/*', copyStatic);
}

const build = series(cleanTask, parallel(templates, styles, scripts, images, copyStatic));

exports.clean = cleanTask;
exports.templates = templates;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.build = build;
exports.default = series(build, serve);
