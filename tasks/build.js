import gulp from 'gulp';
import sequence from 'gulp-sequence';
import args from './util/args';
gulp.task('build', sequence(['clean'],'images',['stylus'],'css','scripts',['serve','browser']));