import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import paths from '../config';

gulp.task('build:css', () => {
  return gulp.src(paths.source.scss)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.build.css));
});
