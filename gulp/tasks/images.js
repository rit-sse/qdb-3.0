import gulp from 'gulp';
import paths from '../config';

gulp.task('build:images', () => gulp.src(paths.source.images).pipe(gulp.dest(paths.build.images)));
