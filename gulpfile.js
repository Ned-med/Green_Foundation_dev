const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const fileinclude = require('gulp-file-include');


//compile scss into css
// function style() {
//     // 1. where is my scss file
//     return gulp.src('./sass/**/*.scss')
//     // 2. pass the file through sass compiler
//     .pipe(sass().on('error', sass.logError))
//     // 3. where do i save the compiled CSS ?
//     .pipe(gulp.dest('./css'))
//     // 4. strem changes to all browsers
//     .pipe(browserSync.stream());
// }

//compile scss into css
let style = () => {
    // 1. where is my scss file
    return gulp.src('sass/**/*.scss')
    // 2. pass the file through sass compiler
    .pipe(sass().on('error', sass.logError))
    // 3. pass the file through autoprifixer
    .pipe(autoprefixer())
    .pipe(sourcemaps.init())
    // 4. where do i save the compiled CSS ?
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'))
    // 5. strem changes to all browsers
    .pipe(browserSync.stream());
}

let userref = () => {
    return gulp.src('./*.html')
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // 3. pass the file through css minifier
    .pipe(gulpIf('*.css', cssnano()))
    
    .pipe(gulp.dest('dist'));
}

// let fileincludes = () => {
//     return gulp.src('./*.html')
//     .pipe(fileinclude({
//         prefix: '@@',
//         basepath: '@file'
//     }))
//     .pipe(gulp.dest('dist'));
// }

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.scss', style);
    // gulp.watch('./*html', userref);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;
exports.userref = userref;
// exports.fileincludes = fileincludes;
