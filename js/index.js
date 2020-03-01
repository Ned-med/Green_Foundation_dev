


// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const browserSync = require('browser-sync').create();
// const cssnano = require('gulp-cssnano');
// const uglify = require('gulp-uglify');
// const gulpIf = require('gulp-if');
// const autoprefixer = require('gulp-autoprefixer');
// const sourcemaps = require('gulp-sourcemaps');
// const useref = require('gulp-useref');

//compile scss into css
// let style = () => {
//     // 1. where is my scss file
//     return gulp.src('sass/**/*.scss')
//     // 2. pass the file through sass compiler
//     .pipe(sass().on('error', sass.logError))
//     // 3. pass the file through autoprifixer
//     .pipe(autoprefixer())
//     .pipe(sourcemaps.init())
//     // 3. pass the file through css minifier
//     .pipe(cssnano())
//     // 4. where do i save the compiled CSS ?
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('css'))
//     // 5. strem changes to all browsers
//     .pipe(browserSync.stream());
// }



// minifing Css
// let comp = () => {
//     return gulp.src('src/css/**/*.css')
//     .pipe(autoprefixer())
//     .pipe(cssnano())
//     .pipe(gulp.dest('src/css/style.min.css'));
// }

// userref (concatination js and css files)


// let userref = () => {
//     return gulp.src('./*.html')
//     .pipe(useref())
//     // Minifies only if it's a js file
//     .pipe(gulpIf('*.js', uglify()))
//     // Minifies only if it's a CSS file
//     // .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('js/'));
// }

//auto-prefixer

//gulp-file-includes

//watching our file for any changes
// let watch = () => {
//     browserSync.init({
//         server: {
//             baseDir: './'
//         }
//     });
//     gulp.watch('src/sass/**/*.scss', style);
//     // gulp.watch('src/sass/**/*.scss', comp);
//     gulp.watch('src/*.html',userref);
//     gulp.watch('./**/**/*.html').on('change', browserSync.reload);
//     gulp.watch('./**/**/*.js').on('change', browserSync.reload);

// }



// exports.style = style;
// exports.watch = watch;
// // exports.comp = comp;
// exports.userref = userref;

