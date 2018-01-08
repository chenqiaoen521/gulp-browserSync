import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
 
gulp.task('images', () =>
  gulp.src('app/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('app/dist/images'))
);