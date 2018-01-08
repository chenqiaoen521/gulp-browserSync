import gulp from 'gulp';
import del from 'del';
import args from './util/args';
gulp.task('clean', (cb)=>{
  return del(['app/dist/css','app/dist/js']);//, 'app/css'
});