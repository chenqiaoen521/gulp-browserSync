import gulp from 'gulp';
import gulpif from 'gulp-if';
import bs from 'browser-sync';
import args from './util/args';
import gulpStylus from 'gulp-stylus';
import browserSync from './browerSync';

gulp.task('stylus', ()=>{
  return gulp.src('app/stylus/index.styl')
  .pipe(gulpStylus({
    compress: false
  }))
  .pipe(gulp.dest('app/css'))
  .pipe(gulpif(args.watch,browserSync.stream()));
})