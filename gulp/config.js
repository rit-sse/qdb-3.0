export default {
  build: {
    images: './dist/images',
    css: './dist/css',
    js: './dist/js',
    jsMain: './dist/js/main.js',
    dir: './dist',
  },

  source: {
    images: './app/images/**/*.png',
    scss: './app/scss/application.scss',
    stylesheets: './app/scss/**/*.scss',
    jsMain: './app/js/app.jsx',
    scripts: './app/js/**/*.@(js|jsx)',
    html: './app/index.html',
  },
};
