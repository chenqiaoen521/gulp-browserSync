import gulp from 'gulp';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import minifycss from 'gulp-minify-css';
import args from './util/args';
import cleanCss from 'gulp-clean-css';
import concat from 'gulp-concat';
import browserSync from './browerSync';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('css', ()=>{
  return gulp.src(['app/css/reset.css','app/css/layout.css','app/css/lottery.css'])
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: true
  }))
  .pipe(concat('main.css'))
  .pipe(cleanCss())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('app/dist/css'))
  .pipe(gulpif(args.watch,browserSync.stream()));
})