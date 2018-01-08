const del = require('del');
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
  src: 'backend/src/**/*.js',
  dist: 'backend/_dist',
  lintSrc: ['backend/src/**/*.js', 'backend/src/**/**/*.js'],
  watchSrc: ['backend/src/**/*.js', 'backend/src/**/**/*.js'],
  del: ['backend/_dist/**']
};

function make() {
  return gulp.src([paths.src])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({}))
    .pipe(sourcemaps.write('.', {
      sourceRoot: ''
    }))
    .pipe(gulp.dest(paths.dist));
}

gulp.task('dist', [], function () {
  return make();
});

/* eslint no-console: "off" */
gulp.task('lint', ()=> {
  return gulp.src(paths.lintSrc)
    .pipe(eslint())
    .pipe(eslint.result((result)=> {
      if (result.messages.length !== 0 || result.warningCount !== 0 || result.errorCount !== 0) {
        console.log(`ESLint result: ${result.filePath}`);
        console.log(`# Messages: ${result.messages.length}`);
        console.log(`# Warnings: ${result.warningCount}`);
        console.log(`# Errors: ${result.errorCount}`);
      }
    }));
});

gulp.task('watch', ['default'], function () {
  gulp.watch(paths.watchSrc, ['dist']);
});

gulp.task('lint-watch', ['lint'], function () {
  gulp.watch(paths.watchSrc, ['lint']);
});

gulp.task('default', function () {
  return del(paths.del).then(()=> {
    return make();
  });
});
