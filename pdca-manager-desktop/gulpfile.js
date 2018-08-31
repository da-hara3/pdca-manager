// src -> dist
var gulp = require('gulp');
var typescript = require('gulp-typescript');
var plumber = require('gulp-plumber');

gulp.task('htmlTransfer', function(){
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
  });

gulp.task('tsCompiler', function(){
  gulp.src([
         './src/**/*.ts',
         '!./node_modules/**'//node_modules配下は除外する
       ])
      .pipe(plumber())
      .pipe(typescript())
      .pipe(gulp.dest('./dist'));
  });

// 監視を行う
gulp.task('watch', function() {
    gulp.watch('./src/**/*.ts', ['tsCompiler'])
    gulp.watch('./src/**/*.html', ['htmlTransfer'])
});

gulp.task('default', ['htmlTransfer', 'tsCompiler', 'watch']);
