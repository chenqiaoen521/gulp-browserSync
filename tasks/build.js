import gulp from 'gulp';
import sequence from 'gulp-sequence';
import args from './util/args';
gulp.task('build', sequence('clean','images','stylus','scripts',['css','serve','browser']));