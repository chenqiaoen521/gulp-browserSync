import gulp from 'gulp';
import gulpif from 'gulp-if';
import gulpUtil from 'gulp-util';
import args from './util/args';
import browserSync from './browerSync';

gulp.task('browser', (cb)=>{
  if (!args.watch) return cb();
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/stylus/*.styl', ['stylus']);
  gulp.watch('app/css/*.css', ['css']);
  gulp.watch('app/images/*', ['images']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});