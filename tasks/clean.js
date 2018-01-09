import gulp from 'gulp';
import del from 'del';
import args from './util/args';
gulp.task('clean', (cb)=>{
  return del(['app/dist/']);//, 'app/css'
});