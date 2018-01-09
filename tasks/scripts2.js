import gulp from 'gulp';
import gulpif from 'gulp-if';
import webpack from 'webpack';
import named from 'vinyl-named';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log, colors} from 'gulp-util';
import args from './util/args';
import browserSync from './browerSync';

gulp.task('scripts', () => {
  return gulp.src(['app/js/main/index.js'])
  .pipe(plumber({ //文件流操作 防止管道处理时出错不能往下走
    errorHandle: function () {

    }
  }))
  .pipe(named())
  .pipe(gulpWebpack({
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader'
      }]
    }
  }), null, (err, stats)=>{
    log(`Finished ${colors.cyan('scripts')}`, stats.toString({
      chunks: false
    }))
  })
  .pipe(gulp.dest('app/dist/js'))
  .pipe(rename({
    basename: 'cp',
    extname: '.min.js'
  }))
  .pipe(gulpif(args.production,uglify({compress: {properties: false},output:{'quote_keys': true}})))
  .pipe(gulp.dest('app/dist/js'))
  .pipe(gulpif(args.watch, browserSync.stream()));
})