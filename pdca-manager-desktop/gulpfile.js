// src -> dist
var gulp = require('gulp');
 var typescript = require('gulp-typescript');

gulp.task('htmlTransfer', function(){
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
  });

gulp.task('tsCompiler', function(){
  gulp.src([
         './src/**/*.ts',
         '!./node_modules/**'//node_modules配下は除外する
       ])
      .pipe(typescript())
      .pipe(gulp.dest('./dist'));
  });

gulp.task('default', ['htmlTransfer', 'tsCompiler']);
