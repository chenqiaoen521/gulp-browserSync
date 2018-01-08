import gulp from 'gulp';
import browserSync from './browerSync';

gulp.task('serve', function() {
    browserSync.init({
        server: "./app"
    });
});