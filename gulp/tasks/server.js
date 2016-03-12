import gulp from 'gulp';
import app from '../../server';

gulp.task('server', ['build'], () => {
  const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Express server listening on port ' + server.address().port);
  });
});
