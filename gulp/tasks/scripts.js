'use strict';

import gulp from 'gulp';
import source from 'vinyl-source-stream';
import browserify from 'browserify';
import babelify from 'babelify';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';
import config from '../config';
import handleErrors from '../util/handle-errors';
import notify from 'gulp-notify';
import envify from 'envify/custom';

gulp.task('build:scripts',  () =>  {
  let bundle = browserify({
    extensions: ['.jsx'],
    debug: process.env.NODE_ENV !== 'production',
  })
    .transform(babelify)
    .transform(envify({
      API_ROOT: process.env.API_ROOT,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    }))
    .add(config.source.jsMain)
    .bundle()
    .on('error', handleErrors)
    .pipe(source('main.js'));

  if (process.env.NODE_ENV === 'production') {
    bundle = bundle
      .pipe(buffer())
      .pipe(uglify());
  }
  return bundle
    .pipe(gulp.dest(config.build.js))
    .pipe(notify('Scripts done!'));
});
