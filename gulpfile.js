const {src, watch, dest, series, task} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const purgecss = require('gulp-purgecss');
const minifyCSS = require('gulp-minify-css');

task('sass', () => {
    return src('./src/Scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(prefix('last 4 versions'))
        .pipe(purgecss({content: ['./index.html']}))
        .pipe(dest('src/css'))
})

task('watch', () => {
    watch(['./src/Scss/**/*.scss', './index.html'], series('sass'));
})